'use strict';

// ===== STATE =====
const state = {
  direction: 'jp-de',
  mode: 'flashcard',  // 'flashcard' | 'mc'
  level: 'easy',      // 'easy' | 'adv' — vocab difficulty (vocab/all decks)
  deck: null,
  session: [],
  sessionIdx: 0,
  flipped: false,
  stats: { nochmal: 0, richtig: 0 },
  roundSize: 20,
  lastDeck: null,
  pendingDeck: null,
};

// Fixed round-size presets shown in the start dialog.
const ROUND_SIZES = [10, 20, 30];
const DEFAULT_ROUND = 20;

const MODAL_PREFS_KEY = 'n5_modal_prefs';
const ONBOARD_KEY = 'n5_onboarded';
const RATING_HINT_KEY = 'n5_rating_hint_seen';

const DECK_MODES = {
  kanji:   ['flashcard', 'mc'],
  vocab:   ['flashcard', 'mc', 'conjugation'],
  grammar: ['flashcard', 'mc'],
  basics:  ['flashcard', 'mc'],
  all:     ['flashcard', 'mc'],
};

const MODE_LABELS = {
  flashcard:   'Karteikarten',
  mc:          'Multiple Choice',
  conjugation: 'Konjugation',
};

const DECK_TITLES = {
  kanji: 'Kanji üben',
  vocab: 'Vokabeln üben',
  grammar: 'Grammatik üben',
  basics: 'Alltag üben',
  all: 'Alles üben',
};

function loadModalPrefs() {
  try { return JSON.parse(localStorage.getItem(MODAL_PREFS_KEY) || '{}'); }
  catch { return {}; }
}

function saveModalPrefs(deck, mode, direction, level, count) {
  const prefs = loadModalPrefs();
  prefs[deck] = { mode, direction, level, count };
  localStorage.setItem(MODAL_PREFS_KEY, JSON.stringify(prefs));
}

let modalLastFocus = null;

function openStartModal(deck) {
  state.pendingDeck = deck;
  const prefs = loadModalPrefs()[deck] || {};
  const allowedModes = DECK_MODES[deck] || ['flashcard', 'mc'];
  const initialMode = allowedModes.includes(prefs.mode) ? prefs.mode : allowedModes[0];
  const initialDir = ['jp-de', 'de-jp'].includes(prefs.direction) ? prefs.direction : 'jp-de';
  const initialLevel = ['easy', 'adv'].includes(prefs.level) ? prefs.level : 'easy';
  const initialCount = ROUND_SIZES.includes(prefs.count) ? prefs.count : DEFAULT_ROUND;

  state.mode = initialMode;
  state.direction = initialDir;
  state.level = initialLevel;
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

  document.querySelectorAll('#start-modal .lvl-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.level === initialLevel);
  });

  document.querySelectorAll('#start-modal .count-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.count) === initialCount);
  });

  updateLevelVisibility(deck);

  const modal = document.getElementById('start-modal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  modalLastFocus = document.activeElement;
  (modal.querySelector('.mode-btn.active') || document.getElementById('modal-start-btn')).focus();
}

function updateLevelVisibility(deck) {
  const wrap = document.getElementById('modal-level-wrap');
  if (deck === 'vocab' || deck === 'all') wrap.classList.remove('hidden');
  else wrap.classList.add('hidden');
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
  const rows = c.forms.map(f =>
    `<tr><td class="form-label">${f.label}</td><td class="form-word">${f.word}</td><td class="form-reading">${f.reading}</td></tr>`
  ).join('');
  return `<div class="forms-block">${groupLabel ? `<div class="forms-group">${groupLabel}</div>` : ''}<table class="forms-table">${rows}</table></div>`;
}

// ===== SESSION BUILDING =====
// Vocab slice for the active difficulty. Easy = early-lesson words only;
// advanced = all vocab. Only the vocab/all decks ever read this.
function vocabForLevel(level) {
  return level === 'easy' ? VOCAB.filter(v => v.level === 'easy') : VOCAB;
}

// Collect all candidate cards for a deck. Returns plain objects { item, type, dir, id }
// with no SR data — direction comes from state at call time.
function collectDeckCards(deck) {
  const dir = state.direction === 'jp-de' ? 'fwd' : 'rev';
  const cards = [];

  if (deck === 'kanji' || deck === 'all') {
    KANJI.forEach(k => cards.push({ item: k, type: 'kanji', dir, id: `${k.id}-${dir}` }));
  }
  if (deck === 'vocab' || deck === 'all') {
    let vocabItems = vocabForLevel(state.level);
    // Conjugation mode: keep only items that produce forms (verbs + adjectives).
    if (state.mode === 'conjugation') {
      vocabItems = vocabItems.filter(v => conjugate(v.word, v.reading, v.pos) !== null);
    }
    vocabItems.forEach(v => cards.push({ item: v, type: 'vocab', dir, id: `${v.id}-${dir}` }));
  }
  if (deck === 'grammar' || deck === 'all') {
    GRAMMAR.forEach(g => cards.push({ item: g, type: 'grammar', dir, id: `${g.id}-${dir}` }));
  }
  if (deck === 'basics' || deck === 'all') {
    BASICS.forEach(b => cards.push({ item: b, type: 'vocab', dir, id: `${b.id}-${dir}` }));
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
function makeConjugationCard(item) {
  const c = conjugate(item.word, item.reading, item.pos);
  // Skip index 0 (辞書形/Grundform — that's the known base form, not a test target).
  const target = c.forms[1 + Math.floor(Math.random() * (c.forms.length - 1))];
  return { item, type: 'conjugation', id: item.id, target, all: c };
}

// Build a fresh round: N random cards from the deck pool. No persistence.
function buildRound(deck, size) {
  const pool = collectDeckCards(deck);
  const shuffled = shuffle(pool).slice(0, size);
  if (state.mode === 'conjugation') {
    // Replace each vocab card with a conjugation card that carries a target form.
    return shuffled.map(card =>
      card.type === 'vocab' ? makeConjugationCard(card.item) : card
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
  showScreen('home');

  const onboardPanel = document.getElementById('onboard-panel');
  if (onboardPanel) onboardPanel.classList.toggle('hidden', !!localStorage.getItem(ONBOARD_KEY));
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
function startSession(deck, direction) {
  state.direction = direction;
  state.session = buildRound(deck, state.roundSize);
  state.sessionIdx = 0;
  state.flipped = false;
  state.stats = { nochmal: 0, richtig: 0 };
  state.deck = deck;
  state.lastDeck = deck;

  const deckLabels = { kanji: 'Kanji', vocab: 'Vokabeln', grammar: 'Grammatik', basics: 'Alltag', all: 'Alles' };
  document.getElementById('session-deck-label').textContent = deckLabels[deck] || deck.toUpperCase();

  showScreen('session');
  renderCurrentCard();
}

function renderCurrentCard() {
  if (state.mode === 'mc') renderMCCard();
  else renderCard(); // covers both 'flashcard' and 'conjugation'
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

  // Progress: base total on distinct card ids so requeued cards don't inflate the count.
  const distinctTotal = new Set(state.session.map(c => c.id)).size;
  const erledigt = state.stats.richtig;
  document.getElementById('session-progress').textContent = `${erledigt} / ${distinctTotal}`;
  document.getElementById('progress-bar').style.width = `${(erledigt / distinctTotal) * 100}%`;

  // Render front & back
  const dirLabel = card.dir === 'fwd' ? 'JP → DE' : 'DE → JP';

  if (card.type === 'conjugation') {
    renderConjugationCard(card, front, back);
  } else if (card.type === 'kanji') {
    renderKanjiCard(card, front, back, dirLabel);
  } else if (card.type === 'vocab') {
    renderVocabCard(card, front, back, dirLabel);
  } else {
    renderGrammarCard(card, front, back, dirLabel);
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

function renderKanjiCard(card, front, back, dirLabel) {
  const k = card.item;
  const onStr  = k.on.length  ? k.on.join('、')  : '—';
  const kunStr = k.kun.length ? k.kun.join('、') : '—';
  const kanjiSpeakText = kanjiReading(k);
  const beispielwortHtml = kanjiSpeakIsWord(k)
    ? `<div class="back-section">
        <span class="back-label">Beispielwort</span>
        <div class="back-readings">${escHtml(k.speak)}</div>
      </div>`
    : '';
  const kanjiSentencesHtml = k.sentences && k.sentences.length
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

  if (card.dir === 'fwd') {
    // JP → DE: front = Kanji
    front.innerHTML = `
      <div class="card-type-label">Kanji</div>
      <div class="card-kanji-main">${k.char}</div>
      <div class="card-direction-badge">${dirLabel}</div>`;
    back.innerHTML = `
      <div class="card-direction-badge">${dirLabel}</div>
      <div class="back-section">
        <span class="back-label">Kanji</span>
        <div class="back-main-row">
          <div class="back-main">${k.char}</div>
          ${speakBtn(kanjiSpeakText, 'btn-speak-word')}
        </div>
      </div>
      ${beispielwortHtml}
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">On'yomi</span>
        <div class="back-readings">${onStr}</div>
      </div>
      <div class="back-section">
        <span class="back-label">Kun'yomi</span>
        <div class="back-readings">${kunStr}</div>
      </div>
      <div class="back-section">
        <span class="back-label">Bedeutung</span>
        <div class="back-meanings">${k.meaning.join(', ')}</div>
      </div>
      ${k.examples.length ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Wörter</span>
        <div class="back-examples">${k.examples.map(e => escHtml(e)).join('<br>')}</div>
      </div>` : ''}
      ${k.sentences && k.sentences.length ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Sätze</span>
        ${collapsibleDialogue('Sätze anzeigen', kanjiSentencesHtml)}
      </div>` : ''}`;
  } else {
    // DE → JP: front = German meaning
    front.innerHTML = `
      <div class="card-type-label">Kanji — Bedeutung</div>
      <div class="card-german-main">${k.meaning.join(', ')}</div>
      <div class="card-direction-badge">${dirLabel}</div>`;
    back.innerHTML = `
      <div class="card-direction-badge">${dirLabel}</div>
      <div class="back-section">
        <span class="back-label">Kanji</span>
        <div class="back-main-row">
          <div class="back-main">${k.char}</div>
          ${speakBtn(kanjiSpeakText, 'btn-speak-word')}
        </div>
      </div>
      ${beispielwortHtml}
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">On'yomi</span>
        <div class="back-readings">${onStr}</div>
      </div>
      <div class="back-section">
        <span class="back-label">Kun'yomi</span>
        <div class="back-readings">${kunStr}</div>
      </div>
      ${k.examples.length ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Wörter</span>
        <div class="back-examples">${k.examples.map(e => escHtml(e)).join('<br>')}</div>
      </div>` : ''}
      ${k.sentences && k.sentences.length ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Sätze</span>
        ${collapsibleDialogue('Sätze anzeigen', kanjiSentencesHtml)}
      </div>` : ''}`;
  }
}

function renderVocabCard(card, front, back, dirLabel) {
  const v = card.item;
  const showReading = v.word !== v.reading;

  const vocabSpeakText = v.reading || v.word;
  const vocabExamplesHtml = v.examples && v.examples.length
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

  const formsHtml = renderFormsTable(v);

  if (card.dir === 'fwd') {
    // JP → DE: front = Japanese word + reading
    front.innerHTML = `
      <div class="card-type-label">Vokabel</div>
      <div class="card-word-main">${v.word}</div>
      ${showReading ? `<div class="card-furigana">${v.reading}</div>` : ''}
      <div class="card-direction-badge">${dirLabel}</div>`;
    back.innerHTML = `
      <div class="card-direction-badge">${dirLabel}</div>
      <div class="back-section">
        <span class="back-label">Wort</span>
        <div class="back-main-row">
          <div class="back-main" style="font-size:32px">${v.word}</div>
          ${speakBtn(vocabSpeakText, 'btn-speak-word')}
        </div>
        ${showReading ? `<div class="back-readings">${v.reading}</div>` : ''}
      </div>
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Bedeutung</span>
        <div class="back-meanings">${escHtml(v.meaning)}</div>
        <div class="back-pos">${escHtml(v.pos)}</div>
      </div>
      ${v.examples && v.examples.length ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Beispiele</span>
        ${collapsibleDialogue('Beispiele anzeigen', vocabExamplesHtml)}
      </div>` : ''}
      ${formsHtml}`;
  } else {
    // DE → JP: front = German meaning
    front.innerHTML = `
      <div class="card-type-label">Vokabel — Deutsch</div>
      <div class="card-german-main">${escHtml(v.meaning)}</div>
      <div class="card-direction-badge">${dirLabel}</div>`;
    back.innerHTML = `
      <div class="card-direction-badge">${dirLabel}</div>
      <div class="back-section">
        <span class="back-label">Japanisch</span>
        <div class="back-main-row">
          <div class="back-main" style="font-size:36px">${v.word}</div>
          ${speakBtn(vocabSpeakText, 'btn-speak-word')}
        </div>
        ${showReading ? `<div class="back-readings">${v.reading}</div>` : ''}
      </div>
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Wortart</span>
        <div class="back-pos" style="font-size:15px; color:var(--text-muted)">${escHtml(v.pos)}</div>
      </div>
      ${v.examples && v.examples.length ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Beispiele</span>
        ${collapsibleDialogue('Beispiele anzeigen', vocabExamplesHtml)}
      </div>` : ''}
      ${formsHtml}`;
  }
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
    <div class="back-section">
      <span class="back-label">${escHtml(target.label)}</span>
      <div class="back-main-row">
        <div class="back-main" style="font-size:32px">${target.word}</div>
        ${speakBtn(target.reading, 'btn-speak-word')}
      </div>
      <div class="back-readings">${target.reading}</div>
    </div>
    <div class="back-divider"></div>
    ${renderFormsTable(item)}`;
}

function stripPatternHint(pattern) {
  return pattern.replace(/\s*[\(（].*$/, '').trim();
}

function cleanExplanation(text) {
  // Drop leading list-number "1) " / "2) " etc.; take first sentence; trim.
  return text.replace(/^\s*\d+\)\s*/, '').split('.')[0].trim();
}

function renderGrammarCard(card, front, back, dirLabel) {
  const g = card.item;

  if (card.dir === 'fwd') {
    // JP → DE: front = Grammar pattern (German hint stripped so MC answers don't leak)
    front.innerHTML = `
      <div class="card-type-label">Grammatik</div>
      <div class="card-pattern-main">${escHtml(stripPatternHint(g.pattern))}</div>
      <div class="card-direction-badge">${dirLabel}</div>`;
    back.innerHTML = `
      <div class="card-direction-badge">${dirLabel}</div>
      <div class="back-section">
        <span class="back-label">Muster</span>
        <div style="font-family:var(--font-display);font-size:22px;color:var(--accent)">${escHtml(g.pattern)}</div>
      </div>
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Erklärung</span>
        <div class="back-explanation">${escHtml(g.explanation)}</div>
      </div>
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Beispiel</span>
        <div class="back-example-jp">${escHtml(g.example_jp)}</div>
        ${g.example_reading ? `<div class="sentence-reading">${escHtml(g.example_reading)}</div>` : ''}
        <div class="back-example-de">${escHtml(g.example_de)}</div>
      </div>
      ${g.dialogue ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Dialog</span>
        ${collapsibleDialogue('Dialog anzeigen', `<div class="dialogue-box">${g.dialogue.map(l => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(l.jp)}</div>
            ${l.reading ? `<div class="dialogue-reading">${escHtml(l.reading)}</div>` : ''}
            <div class="dialogue-de">${escHtml(l.de)}</div>
          </div>`).join('')}</div>`, g.dialogue.map(l => l.jp).join(' '))}
      </div>` : ''}`;
  } else {
    // DE → JP: front = German example sentence (cloze-style — no keyword leak from pattern label)
    front.innerHTML = `
      <div class="card-type-label">Grammatik — welches Muster?</div>
      <div class="card-german-main" style="font-size:22px;font-style:normal">${escHtml(g.example_de)}</div>
      <div class="card-direction-badge">${dirLabel}</div>`;
    back.innerHTML = `
      <div class="card-direction-badge">${dirLabel}</div>
      <div class="back-section">
        <span class="back-label">Muster</span>
        <div style="font-family:var(--font-display);font-size:28px;color:var(--accent)">${escHtml(g.pattern)}</div>
      </div>
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Erklärung</span>
        <div class="back-explanation">${escHtml(g.explanation)}</div>
      </div>
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Beispiel</span>
        <div class="back-example-jp">${escHtml(g.example_jp)}</div>
        ${g.example_reading ? `<div class="sentence-reading">${escHtml(g.example_reading)}</div>` : ''}
        <div class="back-example-de">${escHtml(g.example_de)}</div>
      </div>
      ${g.dialogue ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Dialog</span>
        ${collapsibleDialogue('Dialog anzeigen', `<div class="dialogue-box">${g.dialogue.map(l => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(l.jp)}</div>
            ${l.reading ? `<div class="dialogue-reading">${escHtml(l.reading)}</div>` : ''}
            <div class="dialogue-de">${escHtml(l.de)}</div>
          </div>`).join('')}</div>`, g.dialogue.map(l => l.jp).join(' '))}
      </div>` : ''}`;
  }
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
    const vocabPool = [...vocabForLevel(state.level), ...BASICS].filter(v => v.id !== item.id);
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
    // grammar
    pool = GRAMMAR.filter(g => g.id !== item.id);
    if (dir === 'fwd') {
      correct = cleanExplanation(item.explanation);
      getLabel = g => cleanExplanation(g.explanation);
    } else {
      // DE→JP: answers are pattern strings with German hint stripped, so the German
      // parenthetical inside `pattern` can't leak when the question is a DE sentence.
      correct = stripPatternHint(item.pattern);
      getLabel = g => stripPatternHint(g.pattern);
    }
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

  // Animate entry
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth;
  flashcard.classList.add('card-enter');

  // Progress: base total on distinct card ids so requeued cards don't inflate the count.
  const distinctTotal = new Set(state.session.map(c => c.id)).size;
  const erledigt = state.stats.richtig;
  document.getElementById('session-progress').textContent = `${erledigt} / ${distinctTotal}`;
  document.getElementById('progress-bar').style.width = `${(erledigt / distinctTotal) * 100}%`;

  // Render question on front only (no flip)
  const dirLabel = card.dir === 'fwd' ? 'JP → DE' : 'DE → JP';
  if (card.type === 'kanji') {
    renderKanjiCard(card, front, back, dirLabel);
  } else if (card.type === 'vocab') {
    renderVocabCard(card, front, back, dirLabel);
  } else {
    renderGrammarCard(card, front, back, dirLabel);
  }

  // Grammar JP→DE MC: ask with the pattern in context (a sentence), not the bare
  // skeleton — particles in a lone pattern telegraph the correct explanation.
  if (card.type === 'grammar' && card.dir === 'fwd') {
    const g = card.item;
    front.innerHTML = `
      <div class="card-type-label">Grammatik — was passt?</div>
      <div class="card-example-jp">${escHtml(g.example_jp)}</div>
      ${g.example_reading ? `<div class="sentence-reading">${escHtml(g.example_reading)}</div>` : ''}
      <div class="card-direction-badge">${dirLabel}</div>`;
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
  const picked = clickedBtn.dataset.choice;
  const isCorrect = picked === correct;
  const resultEl = document.getElementById('mc-result');
  resultEl.classList.remove('correct', 'wrong');
  resultEl.classList.add(isCorrect ? 'correct' : 'wrong');
  resultEl.innerHTML = isCorrect
    ? `<span class="mc-result-mark">✓ Richtig</span>`
    : `<span class="mc-result-mark">✗ Falsch</span> <span class="mc-result-pick">Deine Antwort: ${escHtml(picked)}</span>`;
  flipCard();
}

// ===== FLIP =====
function flipCard() {
  if (state.flipped) return;
  state.flipped = true;

  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('card-controls').style.display = 'none';

  // In MC: keep mc-choices container's space so card doesn't shift; just hide its content
  const mcEl = document.getElementById('mc-choices');
  if (state.mode === 'mc' && mcEl.style.display !== 'none') {
    mcEl.style.visibility = 'hidden';
  }

  const currentCard = state.session[state.sessionIdx];
  if (currentCard && currentCard.type !== 'grammar') speakJapanese(getJapaneseText(currentCard));

  document.getElementById('rating-wrap').style.display = '';
  showRatingHintOnce();
}

// ===== RATE & ADVANCE =====
function rateCard(rating) {
  dismissRatingHint();
  const card = state.session[state.sessionIdx];

  if (rating === 1) {
    // Wusste ich nicht: requeue to end of round
    state.session.push(card);
    state.stats.nochmal++;
  } else {
    // Wusste ich: card is done
    state.stats.richtig++;
  }
  state.sessionIdx++;

  if (state.sessionIdx >= state.session.length) {
    renderDone();
  } else {
    renderCurrentCard();
  }
}

// ===== DONE SCREEN =====
function renderDone() {
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
  if (type === 'grammar')     return item.pattern;
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

const TAB_LABELS = { kanji: 'Kanji', vocab: 'Vokabeln', adjektive: 'Adjektive', ausdruecke: 'Ausdrücke' };

function isAltag(item) {
  return item.pos && (item.pos.includes('Adjektiv') || item.pos.includes('Adverb'));
}
function isNutzwort(item) {
  return item.pos && (
    item.pos.startsWith('Partikel') ||
    item.pos.startsWith('Konjunktion') ||
    item.pos === 'Ausdruck'
  );
}
function isVocabMain(item) {
  return !isAltag(item) && !isNutzwort(item);
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
  const ex = item.examples && item.examples[0];
  const exHtml = ex ? `<div class="list-detail-example">
    <div class="list-detail-example-row">
      <div class="list-detail-jp">${escHtml(ex.jp)}</div>
      ${speakBtn(ex.jp, 'btn-speak-example')}
    </div>
    ${ex.reading ? `<div class="sentence-reading">${escHtml(ex.reading)}</div>` : ''}
    <div class="list-detail-de">${escHtml(ex.de)}</div>
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
  if (tab === 'vocab')     return VOCAB.filter(isVocabMain);
  if (tab === 'adjektive') return dedupByWord([...BASICS, ...VOCAB].filter(isAltag));
  return dedupByWord([...BASICS, ...VOCAB].filter(isNutzwort));
}

function matchesSearch(item, q) {
  const on = Array.isArray(item.on) ? item.on : [];
  const kun = Array.isArray(item.kun) ? item.kun : [];
  const rawMatch = [item.word, item.reading, item.meaning, item.char, ...on, ...kun]
    .concat(Array.isArray(item.meaning) ? item.meaning : [])
    .some(f => f && String(f).toLowerCase().includes(q));
  if (rawMatch) return true;

  const qLoose = looseRomaji(q);
  if (!qLoose) return false;
  return [item.reading, item.word, ...on, ...kun]
    .some(f => f && looseRomaji(kanaToRomaji(String(f))).includes(qLoose));
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

  if (pendingExpandKey) {
    const row = listContent.querySelector(`[data-item-key="${pendingExpandKey}"]`);
    if (row) toggleListRow(row);
    pendingExpandKey = '';
  }
}

function renderSearchAllTabs() {
  const q = listSearchQuery.toLowerCase();
  const rows = [];

  ['kanji', 'vocab', 'adjektive', 'ausdruecke'].forEach(tab => {
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
  const readingHtml = c.reading
    ? `<span class="list-reading">${escHtml(c.reading)}</span>` : '';
  const badge = badgeHtml || '';
  return `<div class="list-row concept-nav-row" onclick="openConceptDetail('${escHtml(c.id)}')">
    <div class="list-row-summary">
      <div class="list-row-main">
        <div class="list-jp-line">
          <span class="list-jp">${escHtml(c.title)}</span>
          ${readingHtml}
        </div>
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

function renderConceptsScreen() {
  showScreen('concepts');
  if (window.speechSynthesis) window.speechSynthesis.cancel();

  const seen = new Set();
  const html = [];
  CONCEPTS.forEach(c => {
    if (!seen.has(c.category)) {
      seen.add(c.category);
      html.push(`<div class="concept-category">${escHtml(c.category)}</div>`);
    }
    html.push(renderConceptRow(c));
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

  // Deck cards open start-modal
  document.querySelectorAll('.deck-card').forEach(card => {
    card.addEventListener('click', () => {
      openStartModal(card.dataset.deck);
    });
  });

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

  // Start modal: level toggle
  document.querySelectorAll('#start-modal .lvl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#start-modal .lvl-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.level = btn.dataset.level;
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
    saveModalPrefs(deck, state.mode, state.direction, state.level, state.roundSize);
    closeStartModal();
    startSession(deck, state.direction);
  });

  // Flip button
  document.getElementById('flip-btn').addEventListener('click', flipCard);

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
      renderListTab(tab.dataset.listTab);
    });
  });

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
          if (e.key === '1') rateCard(1);
          if (e.key === '3') rateCard(3);
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
}

init();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');

      if (reg.waiting && navigator.serviceWorker.controller) {
        showUpdateToast(reg.waiting);
      }

      reg.addEventListener('updatefound', () => {
        const sw = reg.installing;
        if (!sw) return;
        sw.addEventListener('statechange', () => {
          if (sw.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateToast(sw);
          }
        });
      });

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update();
      });

      let reloading = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (reloading) return;
        reloading = true;
        location.reload();
      });
    } catch (_) {}
  });
}

function showUpdateToast(sw) {
  const el = document.getElementById('update-toast');
  if (!el) return;
  el.classList.add('visible');
  el.onclick = () => sw.postMessage('SKIP_WAITING');
}
