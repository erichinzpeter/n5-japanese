'use strict';

// ===== STATE =====
const state = {
  direction: 'jp-de',
  mode: 'flashcard',  // 'flashcard' | 'mc'
  deck: null,
  session: [],
  sessionIdx: 0,
  flipped: false,
  stats: { nochmal: 0, richtig: 0 },
  roundSize: 20,
  lastDeck: null,
  pendingDeck: null,
  scheduledThisRound: null, // Set<cardId>: first-attempt outcome recorded this round (SRS + stats)
  graduated: null,          // Set<cardId>: answered correctly this round — drives the progress bar
  caughtUp: false,          // true while the reused done screen shows "Für heute durch"
};

// Fixed round-size presets shown in the start dialog.
const ROUND_SIZES = [10, 20, 30];
const DEFAULT_ROUND = 20;

const MODAL_PREFS_KEY = 'n5_modal_prefs';
const ONBOARD_KEY = 'n5_onboarded';
const RATING_HINT_KEY = 'n5_rating_hint_seen';
const AUDIO_OFF_KEY = 'n5_audio_off';

// A new service worker activated while the user was mid-session: reload is
// deferred until the next home visit so it never interrupts a running round.
let swPendingReload = false;

function isAudioOff() {
  return localStorage.getItem(AUDIO_OFF_KEY) === '1';
}

const DECK_MODES = {
  kanji:     ['flashcard', 'mc'],
  nomen:     ['flashcard', 'mc'],
  verben:    ['flashcard', 'mc', 'conjugation'],
  adjektive: ['flashcard', 'mc', 'conjugation'],
  sonstiges: ['flashcard', 'mc'],
  grammar:   ['flashcard', 'mc'],
  all:       ['flashcard', 'mc'],
};

// Decks whose pool comes from VOCAB + BASICS (the part-of-speech split).
const VOCAB_CATEGORIES = ['nomen', 'verben', 'adjektive', 'sonstiges'];

const MODE_LABELS = {
  flashcard:   'Karteikarten',
  mc:          'Multiple Choice',
  conjugation: 'Konjugation',
};

const DECK_TITLES = {
  kanji: 'Kanji üben',
  nomen: 'Nomen üben',
  verben: 'Verben üben',
  adjektive: 'Adjektive üben',
  sonstiges: 'Sonstiges üben',
  grammar: 'Grammatik üben',
  all: 'Zufall üben',
};

function loadModalPrefs() {
  try { return JSON.parse(localStorage.getItem(MODAL_PREFS_KEY) || '{}'); }
  catch { return {}; }
}

function saveModalPrefs(deck, mode, direction, count) {
  const prefs = loadModalPrefs();
  prefs[deck] = { mode, direction, count };
  localStorage.setItem(MODAL_PREFS_KEY, JSON.stringify(prefs));
}

let modalLastFocus = null;

function openStartModal(deck) {
  state.pendingDeck = deck;
  const prefs = loadModalPrefs()[deck] || {};
  const allowedModes = DECK_MODES[deck] || ['flashcard', 'mc'];
  const initialMode = allowedModes.includes(prefs.mode) ? prefs.mode : allowedModes[0];
  const initialDir = ['jp-de', 'de-jp'].includes(prefs.direction) ? prefs.direction : 'jp-de';
  const initialCount = ROUND_SIZES.includes(prefs.count) ? prefs.count : DEFAULT_ROUND;

  state.mode = initialMode;
  state.direction = initialDir;
  state.roundSize = initialCount;

  document.getElementById('start-modal-title').textContent = DECK_TITLES[deck] || 'Üben';

  const modeWrap = document.getElementById('modal-mode-toggle');
  modeWrap.innerHTML = '';
  allowedModes.forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'mode-btn' + (m === initialMode ? ' active' : '');
    btn.dataset.mode = m;
    btn.textContent = MODE_LABELS[m];
    btn.addEventListener('click', () => {
      modeWrap.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = m;
    });
    modeWrap.appendChild(btn);
  });

  document.querySelectorAll('#start-modal .dir-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.dir === initialDir);
  });

  document.querySelectorAll('#start-modal .count-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.count) === initialCount);
  });

  document.getElementById('modal-direction-wrap').classList.toggle('hidden', deck === 'grammar');
  if (deck === 'grammar') state.direction = 'jp-de';

  const modal = document.getElementById('start-modal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  modalLastFocus = document.activeElement;
  (modal.querySelector('.mode-btn.active') || document.getElementById('modal-start-btn')).focus();
}

function closeStartModal() {
  const modal = document.getElementById('start-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  state.pendingDeck = null;
  if (modalLastFocus) { modalLastFocus.focus(); modalLastFocus = null; }
}

function trapModalTab(e) {
  if (e.key !== 'Tab') return;
  const modal = document.getElementById('start-modal');
  if (modal.classList.contains('hidden')) return;
  const f = [...modal.querySelectorAll('button:not([disabled])')];
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

// ===== FORMS TABLE =====
// Returns an HTML string for the conjugation table, or '' if the item is not conjugable.
function renderFormsTable(item) {
  const c = conjugate(item.word, item.reading, item.pos);
  if (!c) return '';
  const groupLabel = c.group ? `Gruppe ${c.group}` : '';
  const tiles = c.forms.map(f =>
    `<div class="form-tile"><span class="form-tile-label">${f.label}</span><span class="form-tile-word">${f.word}</span><span class="form-tile-reading">${f.reading}</span></div>`
  ).join('');
  return `<div class="forms-block">${groupLabel ? `<div class="forms-group">${groupLabel}</div>` : ''}<div class="forms-grid">${tiles}</div></div>`;
}

// ===== SESSION BUILDING =====
// Collect all candidate cards for a deck. Returns plain objects { item, type, dir, id }
// with no SR data — direction comes from state at call time.
function collectDeckCards(deck) {
  const dir = state.direction === 'jp-de' ? 'fwd' : 'rev';
  const cards = [];

  if (deck === 'kanji' || deck === 'all') {
    KANJI.forEach(k => cards.push({ item: k, type: 'kanji', dir, id: `${k.id}-${dir}` }));
  }

  if (VOCAB_CATEGORIES.includes(deck) || deck === 'all') {
    const pool = [...VOCAB, ...BASICS];
    const wanted = deck === 'all' ? null : deck; // 'all' spans every category, so no single filter
    let items = pool.filter(v => wanted === null || posCategory(v.pos) === wanted);
    if (state.mode === 'conjugation') {
      // Keep only items that produce at least one non-dictionary form.
      items = items.filter(v => {
        const c = conjugate(v.word, v.reading, v.pos);
        return c !== null && c.forms.length >= 2;
      });
    }
    items.forEach(v => cards.push({ item: v, type: 'vocab', dir, id: `${v.id}-${dir}` }));
  }

  // Grammar is its own deck only — never part of "Alles".
  // One card per cloze item; grammar is direction-independent (always JP gap sentence).
  if (deck === 'grammar') {
    GRAMMAR.forEach(g => g.cloze.items.forEach((it, i) => {
      cards.push({
        item: { text: it.text, reading: it.reading, answer: it.answer, de: it.de, pattern: g.pattern,
                explanation: g.explanation, distractors: it.distractors ?? g.cloze.distractors },
        type: 'grammar', dir: 'fwd', id: `${g.id}-c${i}`,
      });
    }));
  }

  return cards;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Conjugation drill card: picks a random non-dictionary target form from the item.
// Pool is pre-filtered to items with >= 2 forms, so index 1.. is always valid.
function makeConjugationCard(item, dir) {
  const c = conjugate(item.word, item.reading, item.pos);
  // Skip index 0 (辞書形/Grundform — that's the known base form, not a test target).
  const target = c.forms[1 + Math.floor(Math.random() * (c.forms.length - 1))];
  return { item, type: 'conjugation', dir, id: item.id, target, all: c };
}

// Kanji + Vocab cards have stable per-direction ids, so they get Leitner scheduling.
// Grammar (cloze) and Conjugation drills keep the random-round behavior.
function usesSRS(deck, mode) {
  return mode !== 'conjugation' && deck !== 'grammar';
}

function buildRound(deck, size) {
  const pool = collectDeckCards(deck);
  if (usesSRS(deck, state.mode)) {
    return buildQueue(pool, loadSRS(), todayStr(), size);
  }
  const shuffled = shuffle(pool).slice(0, size);
  if (state.mode === 'conjugation') {
    // Replace each vocab card with a conjugation card that carries a target form.
    return shuffled.map(card =>
      card.type === 'vocab' ? makeConjugationCard(card.item, card.dir) : card
    );
  }
  return shuffled;
}

// ===== SCREEN NAVIGATION =====
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
  updateTabbar(name);
}

// Bottom nav is visible only on the three top-level destinations.
function updateTabbar(name) {
  const bar = document.getElementById('tabbar');
  if (!bar) return;
  const navName =
    name === 'list' ? 'list' :
    (name === 'concepts' || name === 'concept-detail') ? 'concepts' :
    name === 'home' ? 'home' : null;
  bar.classList.toggle('tabbar--hidden', navName === null);
  bar.querySelectorAll('.tab').forEach(t =>
    t.classList.toggle('active', t.dataset.nav === navName)
  );
}

// ===== HOME SCREEN =====
function renderHome() {
  if (swPendingReload) { location.reload(); return; }
  showScreen('home');

  const onboardPanel = document.getElementById('onboard-panel');
  if (onboardPanel) onboardPanel.classList.toggle('hidden', !!localStorage.getItem(ONBOARD_KEY));

  renderKotd();
}

// ===== KANJI DES TAGES =====
// Deterministic daily pick: same kanji all day, next one at local midnight,
// full rotation through all 170 kanji (~5.6 months) with no storage.
function kanjiOfTheDay() {
  const [y, m, d] = todayStr().split('-').map(Number);
  const days = Math.floor(new Date(y, m - 1, d).getTime() / 86400000);
  return KANJI[days % KANJI.length];
}

function renderKotd() {
  const el = document.getElementById('kotd-card');
  if (!el) return;
  const k = kanjiOfTheDay();
  const reading = k.speak || k.kun[0] || k.on[0] || '';
  el.innerHTML = `
    <div class="kotd-char" aria-hidden="true">${k.char}</div>
    <div class="kotd-main">
      <div class="kotd-reading">${escHtml(reading)}</div>
      <div class="kotd-meaning">${escHtml(k.meaning.slice(0, 2).join(', '))}</div>
    </div>
    ${speakBtn(kanjiReading(k), 'btn-speak-list')}
    <span class="kotd-chevron" aria-hidden="true">›</span>`;
}

// Opens the list screen on the kanji tab with today's kanji expanded.
function openKotdDetail() {
  pendingExpandKey = kanjiOfTheDay().id;
  showListScreen();
}

// ===== ONBOARDING =====
function dismissOnboard() {
  localStorage.setItem(ONBOARD_KEY, '1');
  const el = document.getElementById('onboard-panel');
  if (el) el.classList.add('hidden');
}

function showRatingHintOnce() {
  if (localStorage.getItem(RATING_HINT_KEY)) return;
  const el = document.getElementById('first-rating-hint');
  if (el) el.classList.remove('hidden');
}

function dismissRatingHint() {
  if (localStorage.getItem(RATING_HINT_KEY)) return;
  localStorage.setItem(RATING_HINT_KEY, '1');
  const el = document.getElementById('first-rating-hint');
  if (el) el.classList.add('hidden');
}

// ===== SESSION START =====
// Shared session launcher: takes a prebuilt card list and shows the session screen.
function launchSession(deck, sessionCards) {
  state.session = sessionCards;
  state.scheduledThisRound = new Set();
  state.graduated = new Set();
  state.sessionIdx = 0;
  state.flipped = false;
  state.stats = { nochmal: 0, richtig: 0 };
  state.deck = deck;
  state.lastDeck = deck;
  state.caughtUp = false;

  const deckLabels = { kanji: 'Kanji', nomen: 'Nomen', verben: 'Verben', adjektive: 'Adjektive', sonstiges: 'Sonstiges', grammar: 'Grammatik', all: 'Zufall' };
  document.getElementById('session-deck-label').textContent = deckLabels[deck] || deck.toUpperCase();

  // Desktop-only hint (hidden on touch): MC uses number keys to pick an answer.
  const hintEl = document.getElementById('keyboard-hint');
  if (hintEl) {
    hintEl.textContent = state.mode === 'mc'
      ? '1–4 = Antwort wählen  ·  Leertaste = weiter'
      : 'Leertaste = umdrehen  ·  1 = Wusste ich nicht  ·  3 = Wusste ich';
  }

  showScreen('session');
  renderCurrentCard();
}

function startSession(deck, direction) {
  state.direction = direction; // set before buildRound — collectDeckCards reads it
  const session = buildRound(deck, state.roundSize);
  if (session.length === 0) {
    state.deck = deck;
    state.lastDeck = deck;
    renderCaughtUp(deck);
    return;
  }
  launchSession(deck, session);
}

// "Trotzdem üben" from the caught-up screen: a random round ignoring due dates,
// still writes SRS on each rating.
function startFreeRound(deck) {
  const round = shuffle(collectDeckCards(deck)).slice(0, state.roundSize);
  const cards = state.mode === 'conjugation'
    ? round.map(c => c.type === 'vocab' ? makeConjugationCard(c.item, c.dir) : c)
    : round;
  launchSession(deck, cards);
}

function renderCurrentCard() {
  const card = state.session[state.sessionIdx];
  const chip = document.getElementById('requeue-chip');
  if (chip) chip.classList.toggle('hidden', !(card && card.isRequeue));
  if (state.mode === 'mc' && card) renderMCCard();
  else renderCard(); // covers flashcard and conjugation
}

// ===== CARD RENDERING =====
function renderCard() {
  const card = state.session[state.sessionIdx];
  const front = document.getElementById('card-front');
  const back  = document.getElementById('card-back');
  const inner = document.getElementById('card-inner');

  // Reset flip
  inner.classList.remove('flipped');
  state.flipped = false;

  // Animate card entry
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth; // reflow
  flashcard.classList.add('card-enter');

  // Progress counts distinct cards that have been answered correctly (graduated);
  // a missed card is requeued and only advances the bar once it comes back right.
  const distinctTotal = new Set(state.session.map(c => c.id)).size;
  const erledigt = state.graduated.size;
  document.getElementById('session-progress').textContent = `${erledigt} / ${distinctTotal}`;
  document.getElementById('progress-bar').style.width = `${(erledigt / distinctTotal) * 100}%`;

  // Render front & back

  if (card.type === 'conjugation') {
    renderConjugationCard(card, front, back);
  } else if (card.type === 'kanji') {
    renderKanjiCard(card, front, back);
  } else if (card.type === 'vocab') {
    renderVocabCard(card, front, back);
  } else {
    renderGrammarCard(card, front, back);
  }

  // Show flip button, hide ratings and other mode elements
  document.getElementById('card-controls').style.display = '';
  document.getElementById('flip-btn').style.display = '';
  document.getElementById('rating-wrap').style.display = 'none';
  const mcEl = document.getElementById('mc-choices');
  mcEl.style.display = 'none';
  mcEl.style.visibility = '';
  const resultEl = document.getElementById('mc-result');
  resultEl.innerHTML = '';
  resultEl.classList.remove('correct', 'wrong');
}

// Shared back face for both directions — a header band (kanji + meaning) over
// reading tiles, so the readings read as objects instead of stacked form rows.
function kanjiBackHtml(k) {
  const onStr  = k.on.length  ? k.on.join('、')  : '—';
  const kunStr = k.kun.length ? k.kun.join('、') : '—';
  const beispielwort = kanjiSpeakIsWord(k)
    ? `<div class="reading-tile reading-tile--wide">
        <span class="reading-tile-label">Beispielwort</span>
        <span class="reading-tile-val">${escHtml(k.speak)}</span>
      </div>`
    : '';
  const sentencesHtml = k.sentences && k.sentences.length
    ? `<div class="dialogue-box">${k.sentences.map(s => `
        <div class="dialogue-line">
          <div class="dialogue-line-top">
            <div class="dialogue-jp">${escHtml(s.jp)}</div>
            ${speakBtn(s.jp, 'btn-speak-example')}
          </div>
          ${s.reading ? `<div class="dialogue-reading">${escHtml(s.reading)}</div>` : ''}
          <div class="dialogue-de">${escHtml(s.de)}</div>
        </div>`).join('')}</div>`
    : '';
  return `
    <div class="back-head">
      <div class="back-head-main">
        <span class="back-head-char">${k.char}</span>
        ${speakBtn(kanjiReading(k), 'btn-speak-word')}
      </div>
      <div class="back-head-gloss">${k.meaning.join(', ')}</div>
    </div>
    <div class="reading-grid">
      <div class="reading-tile">
        <span class="reading-tile-label">On'yomi</span>
        <span class="reading-tile-val">${onStr}</span>
      </div>
      <div class="reading-tile">
        <span class="reading-tile-label">Kun'yomi</span>
        <span class="reading-tile-val">${kunStr}</span>
      </div>
      ${beispielwort}
    </div>
    ${k.examples.length ? `
    <div class="back-section">
      <span class="back-label">Wörter</span>
      <div class="back-examples">${k.examples.map(e => escHtml(e)).join('<br>')}</div>
    </div>` : ''}
    ${k.sentences && k.sentences.length ? `
    <div class="back-section">
      <span class="back-label">Sätze</span>
      ${collapsibleDialogue('Sätze anzeigen', sentencesHtml)}
    </div>` : ''}`;
}

function renderKanjiCard(card, front, back) {
  const k = card.item;
  if (card.dir === 'fwd') {
    // JP → DE: front = Kanji
    front.innerHTML = `
      <div class="card-type-label">Kanji</div>
      <div class="card-kanji-main">${k.char}</div>`;
  } else {
    // DE → JP: front = German meaning
    front.innerHTML = `
      <div class="card-type-label">Kanji — Bedeutung</div>
      <div class="card-german-main">${k.meaning.join(', ')}</div>`;
  }
  back.innerHTML = kanjiBackHtml(k);
}

function vocabBackHtml(v) {
  const showReading = v.word !== v.reading;
  const speakText = v.reading || v.word;
  const examplesHtml = v.examples && v.examples.length
    ? `<div class="dialogue-box">${v.examples.map(ex => `
        <div class="dialogue-line">
          <div class="dialogue-line-top">
            <div class="dialogue-jp">${escHtml(ex.jp)}</div>
            ${speakBtn(ex.jp, 'btn-speak-example')}
          </div>
          ${ex.reading ? `<div class="dialogue-reading">${escHtml(ex.reading)}</div>` : ''}
          <div class="dialogue-de">${escHtml(ex.de)}</div>
        </div>`).join('')}</div>`
    : '';
  return `
    <div class="back-head">
      <div class="back-head-main">
        <span class="back-head-word">${v.word}</span>
        ${speakBtn(speakText, 'btn-speak-word')}
      </div>
      ${showReading ? `<div class="back-head-reading">${v.reading}</div>` : ''}
      <div class="back-head-gloss">${escHtml(v.meaning)}</div>
    </div>
    ${v.examples && v.examples.length ? `
    <div class="back-section">
      <span class="back-label">Beispiele</span>
      ${collapsibleDialogue('Beispiele anzeigen', examplesHtml)}
    </div>` : ''}
    ${renderFormsTable(v)}`;
}

function renderVocabCard(card, front, back) {
  const v = card.item;
  const showReading = v.word !== v.reading;
  if (card.dir === 'fwd') {
    // JP → DE: front = Japanese word + reading
    front.innerHTML = `
      <div class="card-type-label">Vokabel</div>
      <div class="card-word-main">${v.word}</div>
      ${showReading ? `<div class="card-furigana">${v.reading}</div>` : ''}`;
  } else {
    // DE → JP: front = German meaning
    front.innerHTML = `
      <div class="card-type-label">Vokabel — Deutsch</div>
      <div class="card-german-main">${escHtml(v.meaning)}</div>`;
  }
  back.innerHTML = vocabBackHtml(v);
}

function renderConjugationCard(card, front, back) {
  const { item, target, all } = card;
  const groupLabel = all.group ? `Gruppe ${all.group}` : '';
  front.innerHTML = `
    <div class="card-type-label">Konjugation${groupLabel ? ` — ${groupLabel}` : ''}</div>
    <div class="card-word-main">${item.word}</div>
    <div class="card-furigana">${item.reading}</div>
    <div class="conj-prompt">${escHtml(target.label)}?</div>`;
  back.innerHTML = `
    <div class="back-head">
      <span class="back-label">${escHtml(target.label)}</span>
      <div class="back-head-main">
        <span class="back-head-word">${target.word}</span>
        ${speakBtn(target.reading, 'btn-speak-word')}
      </div>
      <div class="back-head-reading">${target.reading}</div>
      <div class="back-head-gloss">${escHtml(item.meaning)}</div>
    </div>
    ${renderFormsTable(item)}`;
}

// ＿ → blank span (question) or highlighted answer (solution).
function renderClozeText(text, fill) {
  const slot = fill
    ? `<span class="cloze-fill">${escHtml(fill)}</span>`
    : `<span class="cloze-gap">＿</span>`;
  return escHtml(text).replace('＿', slot);
}

function renderGrammarCard(card, front, back) {
  const c = card.item;  // { text, reading, answer, de, pattern, explanation, distractors }
  // Furigana aid for the sentence skeleton; always gapped since the answer may be
  // kanji (前に, 本, …) and would break the all-kana reading line.
  const readingLine = c.reading
    ? `<div class="card-cloze-reading">${renderClozeText(c.reading, null)}</div>` : '';
  front.innerHTML = `
    <div class="card-type-label">Grammatik — was fehlt?</div>
    <div class="card-cloze-jp">${renderClozeText(c.text, null)}</div>
    ${readingLine}
    <div class="card-cloze-de">${escHtml(c.de)}</div>`;
  back.innerHTML = `
    <div class="back-head">
      <span class="back-label">Lösung</span>
      <div class="card-cloze-jp">${renderClozeText(c.text, c.answer)}</div>
      ${readingLine}
    </div>
    <div class="back-section">
      <span class="back-label">Muster</span>
      <div class="back-pattern">${escHtml(c.pattern)}</div>
    </div>
    <div class="back-divider"></div>
    <div class="back-section">
      <span class="back-label">Erklärung</span>
      <div class="back-explanation">${escHtml(c.explanation)}</div>
    </div>`;
}

// ===== MULTIPLE CHOICE =====
function generateChoices(card) {
  const { item, type, dir } = card;
  let pool, correct, getLabel;

  if (type === 'kanji') {
    pool = KANJI.filter(k => k.id !== item.id);
    if (dir === 'fwd') {
      // Question: Kanji char → correct answer: meaning
      correct = item.meaning.join(', ');
      getLabel = k => k.meaning.join(', ');
    } else {
      // Question: meaning → correct answer: Kanji char
      correct = item.char;
      getLabel = k => k.char;
    }
  } else if (type === 'vocab') {
    // Pool includes BASICS items too so distractors come from the same broad vocab space
    const vocabPool = [...VOCAB, ...BASICS].filter(v => v.id !== item.id);
    pool = vocabPool;
    if (dir === 'fwd') {
      correct = item.meaning;
      getLabel = v => v.meaning;
    } else {
      // DE→JP: show reading below word in choices so kanji are readable
      correct = item.word;
      getLabel = v => v.word;
    }
  } else {
    // grammar cloze: answer token vs. its (item-resolved) distractors
    const distractors = item.distractors.slice(0, 3);
    const choices = shuffle([item.answer, ...distractors]);
    return { choices, correct: item.answer, readings: null };
  }

  const shuffled = shuffle([...pool]).slice(0, 3);
  const distractors = shuffled.map(getLabel);
  const choices = shuffle([correct, ...distractors]);

  // For vocab/basics DE→JP: attach readings so MC buttons can show furigana
  let readings = null;
  if (type === 'vocab' && dir === 'rev') {
    const allItems = [item, ...shuffled];
    const readingMap = {};
    allItems.forEach(v => { readingMap[v.word] = v.reading !== v.word ? v.reading : ''; });
    readings = choices.map(c => readingMap[c] || '');
  }

  return { choices, correct, readings };
}

function renderMCCard() {
  const card = state.session[state.sessionIdx];
  const front = document.getElementById('card-front');
  const back  = document.getElementById('card-back');
  const inner = document.getElementById('card-inner');

  // Reset state
  inner.classList.remove('flipped');
  state.flipped = false;
  state.mcPicked = false;

  // Animate entry
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth;
  flashcard.classList.add('card-enter');

  // Progress counts distinct cards answered correctly (graduated); a miss requeues the
  // card and only moves the bar once it returns and is answered right.
  const distinctTotal = new Set(state.session.map(c => c.id)).size;
  const erledigt = state.graduated.size;
  document.getElementById('session-progress').textContent = `${erledigt} / ${distinctTotal}`;
  document.getElementById('progress-bar').style.width = `${(erledigt / distinctTotal) * 100}%`;

  // Render question on front only (no flip)
  if (card.type === 'kanji') {
    renderKanjiCard(card, front, back);
  } else if (card.type === 'vocab') {
    renderVocabCard(card, front, back);
  } else {
    renderGrammarCard(card, front, back);
  }

  // Hide flip button + card-controls in MC (user clicks card to flip)
  document.getElementById('card-controls').style.display = 'none';
  document.getElementById('flip-btn').style.display = 'none';
  document.getElementById('rating-wrap').style.display = 'none';

  const { choices, correct, readings } = generateChoices(card);
  const mcEl = document.getElementById('mc-choices');
  mcEl.style.display = '';
  mcEl.style.visibility = '';
  mcEl.innerHTML = choices.map((c, i) => {
    const reading = readings ? readings[i] : '';
    return `<button class="mc-btn" data-choice="${escHtml(c)}" data-correct="${escHtml(correct)}">
      <span class="mc-num">${i + 1}</span>
      <span class="mc-text">
        <span class="mc-word">${escHtml(c)}</span>
        ${reading ? `<span class="mc-reading">${escHtml(reading)}</span>` : ''}
      </span>
    </button>`;
  }).join('');

  mcEl.querySelectorAll('.mc-btn').forEach(btn => {
    btn.addEventListener('click', () => handleMCAnswer(btn, correct));
  });
}

function handleMCAnswer(clickedBtn, correct) {
  if (state.flipped || state.mcPicked) return; // already answered this card
  const picked = clickedBtn.dataset.choice;
  const isCorrect = picked === correct;
  state.mcPicked = true;
  state.mcCorrect = isCorrect;

  // Verdict on the buttons first, flip after a beat — longer on a miss so the
  // highlighted correct answer registers before the back takes over.
  document.querySelectorAll('.mc-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === correct) btn.classList.add('correct');
  });
  if (!isCorrect) clickedBtn.classList.add('wrong');

  const resultEl = document.getElementById('mc-result');
  resultEl.classList.remove('correct', 'wrong');
  resultEl.classList.add(isCorrect ? 'correct' : 'wrong');
  resultEl.innerHTML = isCorrect
    ? `<span class="mc-result-mark">✓ Richtig</span>`
    : `<span class="mc-result-mark">✗ Falsch</span> <span class="mc-result-pick">Deine Antwort: ${escHtml(picked)}</span>`;
  setTimeout(flipCard, isCorrect ? 400 : 800);
}


// Swap the rating-wrap footer between flip-mode (self-assessment) and MC (single Weiter).
function setMCContinueMode(isMC) {
  const wrap = document.getElementById('rating-wrap');
  wrap.querySelector('.rating-hint').style.display = isMC ? 'none' : '';
  wrap.querySelector('.rating-buttons').style.display = isMC ? 'none' : '';
  document.getElementById('mc-continue-btn').style.display = isMC ? '' : 'none';
}

// ===== FLIP =====
function flipCard() {
  if (state.flipped) return;
  state.flipped = true;

  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('card-controls').style.display = 'none';

  // In MC: collapse the choices on reveal so the footer sits directly under the card.
  const mcEl = document.getElementById('mc-choices');
  if (state.mode === 'mc' && mcEl.style.display !== 'none') {
    mcEl.style.display = 'none';
  }

  // Auto-speak respects the mute toggle; manual 🔊 buttons always speak.
  const currentCard = state.session[state.sessionIdx];
  if (currentCard && !isAudioOff()) speakJapanese(getJapaneseText(currentCard));

  document.getElementById('rating-wrap').style.display = '';

  if (state.mode === 'mc') {
    // Revealing without picking (Leertaste) counts as not-known.
    state.mcOutcome = state.mcPicked ? state.mcCorrect : false;
    recordFirstOutcome(state.session[state.sessionIdx], state.mcOutcome);
    setMCContinueMode(true);
  } else {
    setMCContinueMode(false);
    showRatingHintOnce();
  }
}

// A missed card is re-inserted a few cards ahead so it comes back within the same
// round — spaced retrieval beats dropping it. It must be answered correctly to leave.
const REQUEUE_GAP_MIN = 3;
const REQUEUE_GAP_MAX = 5;
function requeueCard(card) {
  const span = REQUEUE_GAP_MAX - REQUEUE_GAP_MIN + 1;
  const gap = REQUEUE_GAP_MIN + Math.floor(Math.random() * span);
  const pos = Math.min(state.sessionIdx + 1 + gap, state.session.length);
  state.session.splice(pos, 0, { ...card, isRequeue: true });
}

// SRS box + round stats reflect the FIRST attempt only (once per card id). A requeued
// re-answer changes neither — it just decides whether the card graduates out of the round.
function recordFirstOutcome(card, isCorrect) {
  if (!state.scheduledThisRound || state.scheduledThisRound.has(card.id)) return;
  const isTracked = card.type === 'kanji' || card.type === 'vocab';
  if (isTracked) {
    const srs = loadSRS();
    rate(srs, card.id, isCorrect, todayStr());
    saveSRS(srs);
  }
  if (isCorrect) state.stats.richtig++;
  else state.stats.nochmal++;
  state.scheduledThisRound.add(card.id);
}

// MC advance (the "Weiter" button): correct graduates the card, a miss requeues it.
function advanceCard() {
  dismissRatingHint();
  const card = state.session[state.sessionIdx];
  if (state.mcOutcome) state.graduated.add(card.id);
  else requeueCard(card);
  state.sessionIdx++;
  if (state.sessionIdx >= state.session.length) renderDone();
  else renderCurrentCard();
}

// ===== RATE & ADVANCE =====
function rateCard(rating) {
  dismissRatingHint();
  const card = state.session[state.sessionIdx];
  const isCorrect = rating === 3;

  recordFirstOutcome(card, isCorrect);

  if (isCorrect) state.graduated.add(card.id);
  else requeueCard(card);

  state.sessionIdx++;
  if (state.sessionIdx >= state.session.length) {
    renderDone();
  } else {
    renderCurrentCard();
  }
}

// ===== DONE SCREEN =====
// Reuses the #screen-done markup to show "nothing due today".
function renderCaughtUp(deck) {
  state.caughtUp = true;
  document.getElementById('done-stats').innerHTML = '';
  const remaining = document.getElementById('done-remaining');
  if (remaining) remaining.textContent = 'Keine Karten fällig.';
  const title = document.querySelector('#screen-done .done-title');
  if (title) title.textContent = 'Für heute durch';
  document.getElementById('done-again-btn').textContent = 'Trotzdem üben';
  showScreen('done');
}

function renderDone() {
  state.caughtUp = false;
  const doneTitle = document.querySelector('#screen-done .done-title');
  if (doneTitle) doneTitle.textContent = 'Session abgeschlossen';
  document.getElementById('done-again-btn').textContent = 'Nochmal';
  const s = state.stats;

  const statsEl = document.getElementById('done-stats');
  statsEl.innerHTML = `
  <div class="done-stat">
    <span class="done-stat-num" style="color:var(--btn-nochmal)">${s.nochmal}</span>
    <span class="done-stat-label">Wusste ich nicht</span>
  </div>
  <div class="done-stat">
    <span class="done-stat-num" style="color:var(--btn-gut)">${s.richtig}</span>
    <span class="done-stat-label">Wusste ich</span>
  </div>`;

  const remainingEl = document.getElementById('done-remaining');
  if (remainingEl) remainingEl.textContent = '';

  showScreen('done');
}

// ===== TEXT-TO-SPEECH =====
// Spoken reading for a kanji: a curated kana reading, never the raw character.
// A lone kanji handed to speech synthesis is read nondeterministically and
// often mismatches the reading shown on the card.
function kanjiReading(k) {
  return k.speak || k.kun[0] || k.on[0];
}

// True when `speak` is a representative word (e.g. 菜→やさい, 多→おおい) rather
// than a bare on/kun reading. Such kanji are voiced as that word, so the word
// is surfaced as a "Beispielwort" to explain the audio.
function kanjiSpeakIsWord(k) {
  return !!k.speak && ![...k.on, ...k.kun].includes(k.speak);
}

function getJapaneseText(card) {
  const { item, type } = card;
  if (type === 'kanji')       return kanjiReading(item);
  if (type === 'grammar')     return item.text.replace('＿', item.answer);
  if (type === 'conjugation') return card.target.reading;
  return item.reading || item.word;   // vocab + basics
}

function speakJapanese(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'ja-JP';
  utt.rate = 0.9;
  window.speechSynthesis.speak(utt);
}

// ===== UTILS =====
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Kana → Hepburn romaji, runtime-generated so search can match latin readings
// without storing romaji in the data (CLAUDE.md: no data/*.js structure change).
const ROMAJI_YOON = {
  きゃ: 'kya', きゅ: 'kyu', きょ: 'kyo', しゃ: 'sha', しゅ: 'shu', しょ: 'sho',
  ちゃ: 'cha', ちゅ: 'chu', ちょ: 'cho', にゃ: 'nya', にゅ: 'nyu', にょ: 'nyo',
  ひゃ: 'hya', ひゅ: 'hyu', ひょ: 'hyo', みゃ: 'mya', みゅ: 'myu', みょ: 'myo',
  りゃ: 'rya', りゅ: 'ryu', りょ: 'ryo', ぎゃ: 'gya', ぎゅ: 'gyu', ぎょ: 'gyo',
  じゃ: 'ja', じゅ: 'ju', じょ: 'jo', ぢゃ: 'ja', ぢゅ: 'ju', ぢょ: 'jo',
  びゃ: 'bya', びゅ: 'byu', びょ: 'byo', ぴゃ: 'pya', ぴゅ: 'pyu', ぴょ: 'pyo'
};
const ROMAJI_KANA = {
  あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
  か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
  が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go',
  さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
  ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo',
  た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
  だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do',
  な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
  は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
  ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo',
  ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po',
  ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
  や: 'ya', ゆ: 'yu', よ: 'yo',
  ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
  わ: 'wa', ゐ: 'i', ゑ: 'e', を: 'wo', ん: 'n', ゔ: 'vu',
  ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o', ゃ: 'ya', ゅ: 'yu', ょ: 'yo'
};
function kanaToRomaji(kana) {
  if (!kana) return '';
  // Fold katakana onto hiragana (same offset) so one table covers both.
  let s = '';
  for (const ch of kana) {
    const c = ch.codePointAt(0);
    s += (c >= 0x30A1 && c <= 0x30F6) ? String.fromCodePoint(c - 0x60) : ch;
  }
  let out = '';
  let sokuon = false;
  let i = 0;
  while (i < s.length) {
    const pair = s.slice(i, i + 2);
    let rom, len;
    if (ROMAJI_YOON[pair]) {
      rom = ROMAJI_YOON[pair];
      len = 2;
    } else {
      const ch = s[i];
      if (ch === 'っ') { sokuon = true; i += 1; continue; }
      if (ch === 'ー') {
        const last = out[out.length - 1];
        if ('aiueo'.includes(last)) out += last;
        i += 1;
        continue;
      }
      rom = ROMAJI_KANA[ch] != null ? ROMAJI_KANA[ch] : ch;
      len = 1;
    }
    if (sokuon) {
      sokuon = false;
      if (/^[a-z]/.test(rom)) out += rom.startsWith('ch') ? 't' : rom[0];
    }
    out += rom;
    i += len;
  }
  return out;
}

// Normalize romaji on both query and generated side so beginner spellings match:
// Hepburn ↔ Kunrei variants fold to one form, punctuation/spaces stripped.
function looseRomaji(s) {
  return String(s)
    .toLowerCase()
    .replace(/[\s'._,/-]/g, '')
    .replace(/sha/g, 'sya').replace(/shu/g, 'syu').replace(/sho/g, 'syo')
    .replace(/cha/g, 'tya').replace(/chu/g, 'tyu').replace(/cho/g, 'tyo')
    .replace(/ja/g, 'zya').replace(/ju/g, 'zyu').replace(/jo/g, 'zyo')
    .replace(/shi/g, 'si').replace(/chi/g, 'ti').replace(/tsu/g, 'tu')
    .replace(/ji/g, 'zi').replace(/fu/g, 'hu').replace(/wo/g, 'o');
}

// Audio button. Text goes in a `data-speak` attribute (HTML-escaped, so quotes
// and special chars are safe) and is read by a delegated listener — no inline
// onclick string-escaping needed.
function speakBtn(text, cls, inner = '🔊') {
  return `<button class="${cls}" data-speak="${escHtml(text)}" aria-label="Aussprache anhören">${inner}</button>`;
}

let toastTimer = null;
function showToast(msg, actionLabel, onAction) {
  const el = document.getElementById('toast');
  if (!el) return;
  clearTimeout(toastTimer);
  el.innerHTML = '';
  const text = document.createElement('span');
  text.textContent = msg;
  el.appendChild(text);
  if (actionLabel && onAction) {
    const btn = document.createElement('button');
    btn.className = 'toast-action';
    btn.textContent = actionLabel;
    btn.addEventListener('click', () => { hideToast(); onAction(); });
    el.appendChild(btn);
  }
  el.classList.add('visible');
  toastTimer = setTimeout(hideToast, actionLabel ? 5000 : 2600);
}

function hideToast() {
  clearTimeout(toastTimer);
  const el = document.getElementById('toast');
  if (el) el.classList.remove('visible');
}

function collapsibleDialogue(label, innerHtml, speakText) {
  const id = `dlg-${Math.random().toString(36).slice(2, 7)}`;
  const speakBtnHtml = speakText
    ? speakBtn(speakText, 'btn-speak-dialogue', '🔊 Anhören')
    : '';
  return `
    <div class="dialogue-header">
      <button class="dialogue-toggle" onclick="
        const c = document.getElementById('${id}');
        const a = this.querySelector('.dialogue-toggle-arrow');
        c.classList.toggle('expanded');
        a.style.transform = c.classList.contains('expanded') ? 'rotate(90deg)' : '';
      ">
        <span class="dialogue-toggle-arrow">▶</span>
        ${escHtml(label)}
      </button>
      ${speakBtnHtml}
    </div>
    <div class="dialogue-collapsible" id="${id}">
      ${innerHtml}
    </div>`;
}

// ===== LIST MODE =====
let listSearchQuery = '';
let pendingExpandKey = '';
let updateTabScrollFades = () => {};

const TAB_LABELS = { kanji: 'Kanji', nomen: 'Nomen', verben: 'Verben', adjektive: 'Adjektive', adverbien: 'Adverbien', ausdruecke: 'Ausdrücke' };

// Maps an item to its list tab, refining the decks' posCategory: the deck's
// broad "sonstiges" splits here into Adverbien (pure Adverb pos) and Ausdrücke
// (Partikel/Konjunktion/Ausdruck/Fragewort). Nomen/Adverb stays Nomen.
function listCategory(item) {
  const c = posCategory(item.pos);
  if (c === 'sonstiges') return /Adverb/.test(item.pos || '') ? 'adverbien' : 'ausdruecke';
  return c;
}

function renderListDetail(item, tab) {
  if (tab === 'kanji') {
    const k = item;
    const onStr  = k.on.length  ? k.on.join('、')  : '—';
    const kunStr = k.kun.length ? k.kun.join('、') : '—';
    const examplesHtml = k.examples.length
      ? `<div class="list-detail-readings">
          ${k.examples.map(e => `<span class="list-detail-reading-item">${escHtml(e)}</span>`).join('')}
         </div>` : '';
    const sentHtml = k.sentences && k.sentences.length
      ? `<div class="list-detail-example">
          ${k.sentences.map(s => `
            <div class="list-detail-example-row">
              <div class="list-detail-jp">${escHtml(s.jp)}</div>
              ${speakBtn(s.jp, 'btn-speak-example')}
            </div>
            ${s.reading ? `<div class="sentence-reading">${escHtml(s.reading)}</div>` : ''}
            <div class="list-detail-de">${escHtml(s.de)}</div>`).join('<hr style="border:none;border-top:1px solid var(--border);margin:6px 0">')}
         </div>` : '';
    const beispielHtml = kanjiSpeakIsWord(k)
      ? `<span class="list-detail-reading-label">Beispielwort</span>
      <div class="list-detail-readings"><span class="list-detail-reading-item">${escHtml(k.speak)}</span></div>`
      : '';
    return `<span class="list-detail-reading-label">On'yomi</span>
      <div class="list-detail-readings"><span class="list-detail-reading-item">${escHtml(onStr)}</span></div>
      <span class="list-detail-reading-label">Kun'yomi</span>
      <div class="list-detail-readings"><span class="list-detail-reading-item">${escHtml(kunStr)}</span></div>
      ${beispielHtml}
      <div class="list-detail-text">${k.meaning.map(m => escHtml(m)).join(', ')}</div>
      ${examplesHtml}${sentHtml}`;
  }
  // vocab / adjektive / ausdruecke
  const readingHtml = item.reading && item.reading !== item.word
    ? `<div class="list-detail-reading">${escHtml(item.reading)}</div>` : '';
  const examples = item.examples || [];
  const exHtml = examples.length ? `<div class="list-detail-example">
    ${examples.map(ex => `
    <div class="list-detail-example-row">
      <div class="list-detail-jp">${escHtml(ex.jp)}</div>
      ${speakBtn(ex.jp, 'btn-speak-example')}
    </div>
    ${ex.reading ? `<div class="sentence-reading">${escHtml(ex.reading)}</div>` : ''}
    <div class="list-detail-de">${escHtml(ex.de)}</div>`).join('<hr style="border:none;border-top:1px solid var(--border);margin:6px 0">')}
  </div>` : '';
  // Conjugation table for verbs and adjectives; returns '' for nouns/ausdruecke.
  const formsHtml = renderFormsTable(item);
  return `${readingHtml}<div class="list-detail-text">${escHtml(item.meaning)}</div>${exHtml}${formsHtml}`;
}

// ~55 words live in both BASICS and VOCAB; dedup by word+reading so they show once.
function dedupByWord(items) {
  const seen = new Set();
  return items.filter(item => {
    const key = `${item.word} ${item.reading}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getItemsForTab(tab) {
  if (tab === 'kanji')     return KANJI;
  return dedupByWord([...BASICS, ...VOCAB].filter(v => listCategory(v) === tab));
}

function matchesSearch(item, q) {
  const on = Array.isArray(item.on) ? item.on : [];
  const kun = Array.isArray(item.kun) ? item.kun : [];
  const qLoose = looseRomaji(q);

  const rawMatch = [item.word, item.reading, item.meaning, item.char, ...on, ...kun]
    .concat(Array.isArray(item.meaning) ? item.meaning : [])
    .some(f => f && String(f).toLowerCase().includes(q));
  if (rawMatch) return true;

  // Romaji nur am Wortanfang: "yon" soll 四 treffen, nicht 去年 (k-yon-en) —
  // Substring landet sonst mitten in Silben. Kana-/Kanji-Suche oben bleibt Substring.
  if (qLoose && [item.reading, item.word, ...on, ...kun]
      .some(f => f && looseRomaji(kanaToRomaji(String(f))).startsWith(qLoose))) return true;

  // Verbs/adjectives are also findable by their conjugated forms (ます/て/た/ない …),
  // in kanji and kana, so "ikimasu"/"行きます"/"いきます" all match 行く. Prefix-match
  // (not substring) here: 聞きます ("kikimasu") contains "ikimasu", so includes()
  // would make a search for 行く also hit 聞く. conjugate returns null for
  // nouns/expressions, so those never reach this branch.
  const conj = item.pos ? conjugate(item.word, item.reading, item.pos) : null;
  if (!conj) return false;
  const forms = conj.forms.flatMap(f => [f.word, f.reading]);
  if (forms.some(f => f && String(f).toLowerCase().startsWith(q))) return true;
  return !!qLoose && forms.some(f => f && looseRomaji(kanaToRomaji(String(f))).startsWith(qLoose));
}

function matchesConcept(c, q) {
  if ([c.title, c.reading, c.summary, c.usage].some(f => f && f.toLowerCase().includes(q))) return true;
  if (c.reading && /[ぁ-ゖァ-ヺ]/.test(c.reading)) {
    const qLoose = looseRomaji(q);
    return !!qLoose && looseRomaji(kanaToRomaji(c.reading)).includes(qLoose);
  }
  return false;
}

function renderListRow(item, tab, i, clickHandler, extraAttrs, badgeHtml) {
  const itemKey = escHtml(item.id || item.char || item.word || '');
  const attrs = `data-item-key="${itemKey}"${extraAttrs ? ' ' + extraAttrs : ''} onclick="${clickHandler}"`;
  const badge = badgeHtml || '';
  if (tab === 'kanji') {
    const k = item;
    const shortMeaning = k.meaning.slice(0, 2).join(', ');
    const primary   = k.speak || k.kun[0] || k.on[0] || '';
    const secondary = k.speak
      ? (k.kun[0] && k.kun[0] !== k.speak ? k.kun[0] : (k.on[0] && k.on[0] !== k.speak ? k.on[0] : ''))
      : (k.kun[0] && k.on[0] ? k.on[0] : '');
    return `<div class="list-row" ${attrs}>
      <div class="list-row-summary">
        <div class="list-kanji-char">${escHtml(k.char)}</div>
        <div class="list-row-main">
          <div class="list-jp-line">
            <span class="list-jp">${escHtml(primary)}</span>
            ${secondary ? `<span class="list-reading">${escHtml(secondary)}</span>` : ''}
          </div>
          <div class="list-de">${escHtml(shortMeaning)}</div>
        </div>
        ${speakBtn(kanjiReading(k), 'btn-speak-list')}
        ${badge}<span class="list-chevron">▼</span>
      </div>
      <div class="list-row-detail" data-tab="${escHtml(tab)}" data-idx="${i}">
        ${renderListDetail(item, tab)}
      </div>
    </div>`;
  }

  const jp = item.word || '';
  const showReading = item.reading && item.reading !== jp;
  const de = item.meaning || '';
  const speakText = item.reading || item.word || '';
  const speakBtnHtml = speakText
    ? speakBtn(speakText, 'btn-speak-list')
    : '';
  return `<div class="list-row" ${attrs}>
    <div class="list-row-summary">
      <div class="list-row-main">
        <div class="list-jp-line">
          <span class="list-jp">${escHtml(jp)}</span>
          ${showReading ? `<span class="list-reading">${escHtml(item.reading)}</span>` : ''}
        </div>
        <div class="list-de">${escHtml(de)}</div>
      </div>
      ${speakBtnHtml}${badge}<span class="list-chevron">▼</span>
    </div>
    <div class="list-row-detail" data-tab="${escHtml(tab)}" data-idx="${i}">
      ${renderListDetail(item, tab)}
    </div>
  </div>`;
}

function renderListTab(tab) {
  let items = getItemsForTab(tab);

  if (listSearchQuery) {
    const q = listSearchQuery.toLowerCase();
    items = items.filter(item => matchesSearch(item, q));
  }

  const listContent = document.getElementById('list-content');

  if (items.length === 0) {
    listContent.innerHTML = `<div class="list-no-results">Keine Ergebnisse für „${escHtml(listSearchQuery)}"</div>`;
    return;
  }

  listContent.innerHTML = items.map((item, i) => renderListRow(item, tab, i, 'toggleListRow(this)', '', '')).join('');
  // Frischer Inhalt startet oben — sonst bleibt der alte scrollTop stehen und
  // Such-/Tab-Ergebnisse wirken "abgeschnitten" (erste Treffer über dem Fold).
  listContent.scrollTop = 0;

  if (pendingExpandKey) {
    const row = listContent.querySelector(`[data-item-key="${pendingExpandKey}"]`);
    if (row) {
      toggleListRow(row);
      // Nur .list-content scrollen — scrollIntoView nudgt auch Window/äußere
      // Container und verschiebt damit sichtbar den Listen-Header (iOS).
      const scroller = document.getElementById('list-content');
      scroller.scrollTop += row.getBoundingClientRect().top - scroller.getBoundingClientRect().top - 12;
    }
    pendingExpandKey = '';
  }
}

function renderSearchAllTabs() {
  const q = listSearchQuery.toLowerCase();
  const rows = [];

  ['kanji', 'nomen', 'verben', 'adjektive', 'adverbien', 'ausdruecke'].forEach(tab => {
    getItemsForTab(tab)
      .filter(item => matchesSearch(item, q))
      .forEach((item, i) => {
        const badge = `<span class="list-tab-badge">${TAB_LABELS[tab]}</span>`;
        rows.push(renderListRow(item, tab, i, 'switchToTabAndExpand(this)', `data-source-tab="${tab}"`, badge));
      });
  });

  // Grammar lives in CONCEPTS now (no list tab); a hit opens the full-screen concept detail.
  CONCEPTS
    .filter(c => matchesConcept(c, q))
    .forEach(c => {
      rows.push(renderConceptRow(c, '<span class="list-tab-badge">Konzept</span>'));
    });

  const listContent = document.getElementById('list-content');
  listContent.innerHTML = rows.length
    ? rows.join('')
    : `<div class="list-no-results">Keine Ergebnisse für „${escHtml(listSearchQuery)}"</div>`;
  listContent.scrollTop = 0;
}

function switchToTabAndExpand(el) {
  const sourceTab = el.dataset.sourceTab;
  const itemKey = el.dataset.itemKey;

  document.querySelectorAll('.list-tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`.list-tab[data-list-tab="${sourceTab}"]`).classList.add('active');

  pendingExpandKey = itemKey;
  renderListTab(sourceTab);
}

function toggleListRow(el) {
  const detail = el.querySelector('.list-row-detail');
  const chevron = el.querySelector('.list-chevron');
  detail.classList.toggle('visible');
  chevron.classList.toggle('open');
}

function showListScreen() {
  showScreen('list');
  listSearchQuery = '';
  const searchEl = document.getElementById('list-search');
  if (searchEl) searchEl.value = '';
  const firstTab = document.querySelector('.list-tab[data-list-tab="kanji"]');
  document.querySelectorAll('.list-tab').forEach(t => t.classList.remove('active'));
  if (firstTab) firstTab.classList.add('active');
  const scroller = document.getElementById('list-tabs');
  if (scroller) scroller.scrollLeft = 0;
  updateTabScrollFades();
  renderListTab('kanji');
}

// ===== CONCEPTS (read-only N5 grammar reference) =====
function renderConceptDetail(c) {
  const usageHtml = c.usage
    ? `<div class="concept-block-label">Wann benutzt man das?</div>
       <div class="concept-usage">${escHtml(c.usage)}</div>`
    : '';

  const formationHtml = c.formation && c.formation.length
    ? `<div class="concept-block-label">Bildung</div>
       <div class="concept-formation">${c.formation.map(f => `
        <div class="concept-rule">
          <span class="concept-rule-from">${escHtml(f.from)}</span>
          <span class="concept-rule-arrow">→</span>
          <span class="concept-rule-to">${escHtml(f.to)}</span>
          ${f.note ? `<span class="concept-rule-note">${escHtml(f.note)}</span>` : ''}
        </div>`).join('')}</div>`
    : '';

  const tableHtml = c.table && c.table.rows && c.table.rows.length
    ? `<div class="concept-block-label">Übersicht</div>
       <table class="concept-table">
        <thead><tr>${c.table.head.map(h => `<th>${escHtml(h)}</th>`).join('')}</tr></thead>
        <tbody>${c.table.rows.map(r => `<tr>${r.map(cell => `<td>${escHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>`
    : '';

  const pitfallHtml = c.pitfall
    ? `<div class="concept-block-label">Häufiger Fehler</div>
       <div class="concept-pitfall">${escHtml(c.pitfall)}</div>`
    : '';

  const examplesHtml = `<div class="concept-block-label">Beispiele</div>
    <div class="concept-examples">${c.examples.map(ex => `
    <div class="concept-example">
      <div class="concept-example-row">
        <div class="list-detail-jp">${escHtml(ex.jp)}</div>
        ${speakBtn(ex.reading || ex.jp, 'btn-speak-example')}
      </div>
      ${ex.reading ? `<div class="sentence-reading">${escHtml(ex.reading)}</div>` : ''}
      <div class="list-detail-de">${escHtml(ex.de)}</div>
    </div>`).join('')}</div>`;

  return `<div class="concept-summary">${escHtml(c.summary)}</div>${usageHtml}${formationHtml}${tableHtml}${pitfallHtml}${examplesHtml}`;
}

function renderConceptRow(c, badgeHtml) {
  // Concept row is two lines: JP title on top, short German gloss (reading) below.
  const glossHtml = c.reading
    ? `<div class="concept-gloss">${escHtml(c.reading)}</div>` : '';
  const badge = badgeHtml || '';
  return `<div class="list-row concept-nav-row" onclick="openConceptDetail('${escHtml(c.id)}')">
    <div class="list-row-summary">
      <div class="list-row-main">
        <div class="list-jp-line">
          <span class="list-jp">${escHtml(c.title)}</span>
        </div>
        ${glossHtml}
      </div>
      ${badge}<span class="list-chevron concept-chevron">›</span>
    </div>
  </div>`;
}

function openConceptDetail(id) {
  const c = CONCEPTS.find(x => x.id === id);
  if (!c) return;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  showScreen('concept-detail');
  document.getElementById('concept-detail-title').textContent = c.title;
  document.getElementById('concept-detail-content').innerHTML =
    `<div class="concept-detail concept-detail-screen">
      <div class="concept-detail-reading">${escHtml(c.reading || '')}</div>
      ${renderConceptDetail(c)}
    </div>`;
  document.getElementById('concept-detail-content').scrollTop = 0;
  window.scrollTo(0, 0);
}

// Category display order for the Konzepte screen (communicative grouping).
// Kept here (not derived from array order) so grouping is robust regardless of
// how CONCEPTS is sorted in data/concepts.js.
const CONCEPT_ORDER = [
  "Grundlagen",
  "Partikel",
  "Adjektive & Adverbien",
  "Verbformen & Zeiten",
  "Bitten, Vorschläge & Ratschläge",
  "Wünsche, Absichten & Entscheidungen",
  "Vergleiche & Grad",
  "Gründe & Verbindungen",
  "Geben, Erfahrung & Veränderung",
  "Zeit, Menge & Bewegung",
];

function renderConceptsScreen() {
  showScreen('concepts');
  if (window.speechSynthesis) window.speechSynthesis.cancel();

  const byCat = new Map();
  CONCEPTS.forEach(c => {
    if (!byCat.has(c.category)) byCat.set(c.category, []);
    byCat.get(c.category).push(c);
  });
  const cats = [
    ...CONCEPT_ORDER.filter(k => byCat.has(k)),
    ...[...byCat.keys()].filter(k => !CONCEPT_ORDER.includes(k)),
  ];

  const html = [];
  cats.forEach(cat => {
    html.push(`<div class="concept-category">${escHtml(cat)}</div>`);
    byCat.get(cat).forEach(c => html.push(renderConceptRow(c)));
  });
  document.getElementById('concepts-content').innerHTML = html.join('');
}

// ===== EVENTS =====
function initEvents() {
  // Delegated audio: capture phase so tapping a 🔊 button doesn't also flip the
  // card or toggle the list row it sits inside.
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-speak]');
    if (!el) return;
    e.stopPropagation();
    speakJapanese(el.dataset.speak);
  }, true);

  // Deck cards open the start modal directly.
  document.querySelectorAll('.deck-card').forEach(card => {
    card.addEventListener('click', () => openStartModal(card.dataset.deck));
  });

  // Kanji des Tages → list detail. The delegated data-speak listener above runs
  // in capture phase and stops propagation, so the 🔊 inside never triggers this.
  const kotdEl = document.getElementById('kotd-card');
  if (kotdEl) {
    kotdEl.addEventListener('click', openKotdDetail);
    kotdEl.addEventListener('keydown', e => {
      if (e.target !== kotdEl) return; // Enter on the inner 🔊 must only speak
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openKotdDetail(); }
    });
  }

  // Audio toggle in the session topbar: mutes only the auto-speak on flip.
  const audioBtn = document.getElementById('audio-toggle');
  const renderAudioToggle = () => {
    const off = isAudioOff();
    audioBtn.textContent = off ? '🔇' : '🔊';
    audioBtn.classList.toggle('off', off);
    audioBtn.setAttribute('aria-pressed', String(!off));
  };
  audioBtn.addEventListener('click', () => {
    if (isAudioOff()) localStorage.removeItem(AUDIO_OFF_KEY);
    else {
      localStorage.setItem(AUDIO_OFF_KEY, '1');
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    }
    renderAudioToggle();
  });
  renderAudioToggle();

  // Start modal: close (×, backdrop, Esc), trap Tab while open
  document.getElementById('start-modal-close').addEventListener('click', closeStartModal);
  document.getElementById('start-modal').addEventListener('click', e => {
    if (e.target.id === 'start-modal') closeStartModal();
  });
  document.getElementById('start-modal').addEventListener('keydown', trapModalTab);

  // Start modal: direction toggle
  document.querySelectorAll('#start-modal .dir-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#start-modal .dir-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.direction = btn.dataset.dir;
    });
  });

  // Start modal: count toggle
  document.querySelectorAll('#start-modal .count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#start-modal .count-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.roundSize = parseInt(btn.dataset.count);
    });
  });

  // Start modal: Start button
  document.getElementById('modal-start-btn').addEventListener('click', () => {
    const deck = state.pendingDeck;
    if (!deck) return;
    saveModalPrefs(deck, state.mode, state.direction, state.roundSize);
    closeStartModal();
    startSession(deck, state.direction);
  });

  // Flip button
  document.getElementById('flip-btn').addEventListener('click', flipCard);

  // MC "Weiter" — advance after an answer is revealed
  document.getElementById('mc-continue-btn').addEventListener('click', advanceCard);

  // Flashcard click / Enter to flip (MC flips itself after an answer)
  const flashcardEl = document.getElementById('flashcard');
  flashcardEl.addEventListener('click', () => {
    if (state.mode === 'mc') return;
    if (!state.flipped) flipCard();
  });
  flashcardEl.addEventListener('keydown', e => {
    if (state.mode === 'mc') return;
    if (e.key === 'Enter' && !state.flipped) { e.preventDefault(); flipCard(); }
  });

  // Rating buttons
  document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rateCard(parseInt(btn.dataset.rating));
    });
  });

  // Back button
  document.getElementById('back-btn').addEventListener('click', () => {
    window.speechSynthesis && window.speechSynthesis.cancel();
    renderHome();
  });

  // Done buttons
  document.getElementById('done-home-btn').addEventListener('click', () => {
    renderHome();
  });

  document.getElementById('done-again-btn').addEventListener('click', () => {
    if (state.caughtUp && state.lastDeck) { startFreeRound(state.lastDeck); return; }
    if (state.lastDeck) startSession(state.lastDeck, state.direction);
    else renderHome();
  });

  // Onboarding panel: dismiss (Los geht's / ×)
  document.getElementById('onboard-start').addEventListener('click', dismissOnboard);
  document.getElementById('onboard-close').addEventListener('click', dismissOnboard);

  // Bottom nav
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switch (tab.dataset.nav) {
        case 'home':     renderHome(); break;
        case 'list':     showListScreen(); break;
        case 'concepts': renderConceptsScreen(); break;
      }
    });
  });
  document.getElementById('concepts-back-btn').addEventListener('click', () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    renderHome();
  });
  document.getElementById('concept-detail-back-btn').addEventListener('click', renderConceptsScreen);

  // List back button
  document.getElementById('list-back-btn').addEventListener('click', () => renderHome());

  // List search
  const listSearchEl = document.getElementById('list-search');
  if (listSearchEl) {
    listSearchEl.addEventListener('input', e => {
      listSearchQuery = e.target.value.trim();
      if (listSearchQuery) {
        renderSearchAllTabs();
      } else {
        const activeTab = document.querySelector('.list-tab.active');
        renderListTab(activeTab ? activeTab.dataset.listTab : 'kanji');
      }
    });
  }

  // List tabs
  document.querySelectorAll('.list-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.list-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tab.scrollIntoView({ inline: 'nearest', block: 'nearest' });
      renderListTab(tab.dataset.listTab);
    });
  });

  const tabScroller = document.getElementById('list-tabs');
  if (tabScroller) {
    const wrap = tabScroller.parentElement;
    updateTabScrollFades = () => {
      const max = tabScroller.scrollWidth - tabScroller.clientWidth;
      wrap.classList.toggle('can-scroll-left', tabScroller.scrollLeft > 1);
      wrap.classList.toggle('can-scroll-right', tabScroller.scrollLeft < max - 1);
    };
    tabScroller.addEventListener('scroll', updateTabScrollFades, { passive: true });
    window.addEventListener('resize', updateTabScrollFades);
    updateTabScrollFades();
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    const modal = document.getElementById('start-modal');
    if (modal && !modal.classList.contains('hidden')) {
      if (e.key === 'Escape') { closeStartModal(); return; }
      if (e.key === 'Enter') { document.getElementById('modal-start-btn').click(); return; }
    }

    const screen = document.querySelector('.screen.active');
    if (!screen) return;

    if (screen.id === 'screen-session') {
      if (state.mode === 'mc') {
        if (state.flipped) {
          if (e.code === 'Space' || e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            advanceCard();
          }
        } else {
          if (e.code === 'Space' || e.key === ' ') {
            e.preventDefault();
            flipCard();
          } else {
            const mcBtns = document.querySelectorAll('.mc-btn:not([disabled])');
            if (e.key === '1' && mcBtns[0]) mcBtns[0].click();
            if (e.key === '2' && mcBtns[1]) mcBtns[1].click();
            if (e.key === '3' && mcBtns[2]) mcBtns[2].click();
            if (e.key === '4' && mcBtns[3]) mcBtns[3].click();
          }
        }
      } else {
        if (e.code === 'Space' || e.key === ' ') {
          e.preventDefault();
          if (!state.flipped) flipCard();
        }
        if (state.flipped) {
          if (e.key === '1') rateCard(1);
          if (e.key === '3') rateCard(3);
        }
      }
      if (e.key === 'Escape') renderHome();
    }
  });
}

// ===== INIT =====
function init() {
  initEvents();
  renderHome();
  // Splash is a loading cover, not a brand pause. Fast launch (warm PWA reload,
  // local file): the icon never visibly painted — remove it without a fade, a
  // fade here caused the old one-frame flicker. Slow (cold) load: the splash has
  // been covering the gap for a while already, so fade it out now.
  const splash = document.getElementById('splash');
  if (splash) {
    if (performance.now() < 400) splash.remove();
    else splash.classList.add('hidden');
  }
}

init();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      // updateViaCache 'none': never serve sw.js (or its imports) from the HTTP
      // cache during update checks, so a new worker is detected on every launch.
      const reg = await navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' });

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update();
      });

      // A new worker calls skipWaiting + claims clients, firing controllerchange.
      // Reload only while home is showing — never mid-session; other screens
      // defer via swPendingReload until the user returns home (see renderHome).
      let reloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (reloading) return;
        const home = document.getElementById('screen-home');
        if (home && home.classList.contains('active')) {
          reloading = true;
          location.reload();
        } else {
          swPendingReload = true;
        }
      });
    } catch (_) {}
  });
}
