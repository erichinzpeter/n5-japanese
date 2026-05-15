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
  srs: {},
  lastDeck: null,
  pendingDeck: null,
};

const MODAL_PREFS_KEY = 'n5_modal_prefs';

const DECK_MODES = {
  kanji:   ['flashcard', 'mc'],
  vocab:   ['flashcard', 'mc'],
  grammar: ['flashcard', 'mc', 'situation', 'verwendung'],
  basics:  ['flashcard', 'mc'],
  all:     ['flashcard', 'mc'],
};

const MODE_LABELS = {
  flashcard:  'Karteikarten',
  mc:         'Multiple Choice',
  situation:  'Situation',
  verwendung: 'Verwendung',
};

const MODE_NEEDS_DIRECTION = { flashcard: true, mc: true, situation: false, verwendung: false };

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

function saveModalPrefs(deck, mode, direction) {
  const prefs = loadModalPrefs();
  prefs[deck] = { mode, direction };
  localStorage.setItem(MODAL_PREFS_KEY, JSON.stringify(prefs));
}

function openStartModal(deck) {
  state.pendingDeck = deck;
  const prefs = loadModalPrefs()[deck] || {};
  const allowedModes = DECK_MODES[deck] || ['flashcard', 'mc'];
  const initialMode = allowedModes.includes(prefs.mode) ? prefs.mode : allowedModes[0];
  const initialDir = ['jp-de', 'de-jp', 'both'].includes(prefs.direction) ? prefs.direction : 'jp-de';

  state.mode = initialMode;
  state.direction = initialDir;

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
      updateDirectionVisibility();
    });
    modeWrap.appendChild(btn);
  });

  document.querySelectorAll('#start-modal .dir-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.dir === initialDir);
  });

  updateDirectionVisibility();

  const modal = document.getElementById('start-modal');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function updateDirectionVisibility() {
  const wrap = document.getElementById('modal-direction-wrap');
  if (MODE_NEEDS_DIRECTION[state.mode]) wrap.classList.remove('hidden');
  else wrap.classList.add('hidden');
}

function closeStartModal() {
  const modal = document.getElementById('start-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  state.pendingDeck = null;
}

// ===== SRS HELPERS =====
const SRS_KEY = 'n5_srs';

function loadSRS() {
  try {
    state.srs = JSON.parse(localStorage.getItem(SRS_KEY) || '{}');
  } catch {
    state.srs = {};
  }
}

function saveSRS() {
  localStorage.setItem(SRS_KEY, JSON.stringify(state.srs));
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

function getSRSCard(id) {
  return state.srs[id] || { interval: 0, ease: 2.5, due: todayStr(), reps: 0 };
}

function calcNextReview(srsCard, rating) {
  if (rating === 1) {
    return { interval: 1, ease: Math.max(1.3, srsCard.ease - 0.2), due: addDays(1), reps: 0 };
  }
  const newReps = srsCard.reps + 1;
  let interval;
  if (srsCard.reps === 0)      interval = 1;
  else if (srsCard.reps === 1) interval = 6;
  else                          interval = Math.round(srsCard.interval * srsCard.ease);

  const easeDeltas = { 2: -0.15, 3: 0, 4: 0.1 };
  const newEase = Math.max(1.3, srsCard.ease + (easeDeltas[rating] || 0));

  if (rating === 2) interval = Math.max(1, Math.round(interval * 1.2));
  if (rating === 4) interval = Math.round(interval * 1.3);

  return { interval, ease: newEase, due: addDays(interval), reps: newReps };
}

function intervalLabel(srsCard, rating) {
  const next = calcNextReview(srsCard, rating);
  const n = next.interval;
  if (n === 0 || n === 1) return 'morgen';
  if (n < 7)  return `${n} Tage`;
  if (n < 30) return `${Math.round(n / 7)} Wo.`;
  return `${Math.round(n / 30)} Mon.`;
}

// ===== SESSION BUILDING =====
function allItems(deck) {
  const items = [];
  if (deck === 'kanji'   || deck === 'all') KANJI.forEach(k => items.push({ item: k, type: 'kanji' }));
  if (deck === 'vocab'   || deck === 'all') VOCAB.forEach(v => items.push({ item: v, type: 'vocab' }));
  if (deck === 'grammar' || deck === 'all') GRAMMAR.forEach(g => items.push({ item: g, type: 'grammar' }));
  if (deck === 'basics'  || deck === 'all') BASICS.forEach(b => items.push({ item: b, type: 'vocab' }));
  return items;
}

function getDueCards(deck, direction) {
  const today = todayStr();
  const dirs = direction === 'both' ? ['fwd', 'rev'] : [direction === 'jp-de' ? 'fwd' : 'rev'];
  const cards = [];

  allItems(deck).forEach(({ item, type }) => {
    dirs.forEach(dir => {
      const id = `${item.id}-${dir}`;
      const srsCard = getSRSCard(id);
      if (srsCard.due <= today) {
        cards.push({ item, type, dir, id, srsCard });
      }
    });
  });

  return shuffle(cards);
}

function countDue(deck, direction) {
  return getDueCards(deck, direction).length;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== SCREEN NAVIGATION =====
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${name}`).classList.add('active');
}

// ===== HOME SCREEN =====
function renderHome() {
  showScreen('home');

  const decks = ['kanji', 'vocab', 'grammar', 'basics', 'all'];
  decks.forEach(deck => {
    const due = countDue(deck, state.direction);
    const el = document.getElementById(`due-${deck}`);
    if (el) el.textContent = due;
  });

  // Update totals dynamically
  document.getElementById('total-kanji').textContent   = `/ ${KANJI.length}`;
  document.getElementById('total-vocab').textContent    = `/ ${VOCAB.length}`;
  document.getElementById('total-grammar').textContent  = `/ ${GRAMMAR.length}`;
  document.getElementById('total-basics').textContent   = `/ ${BASICS.length}`;
  document.getElementById('total-all').textContent      = '';
}

// ===== SESSION START =====
function startSession(deck, direction) {
  const cards = getDueCards(deck, direction);
  if (cards.length === 0) {
    alert(`Keine fälligen Karten für dieses Deck (${direction === 'jp-de' ? 'JP→DE' : direction === 'de-jp' ? 'DE→JP' : 'Beide'}). Gut gemacht!`);
    return;
  }

  state.deck = deck;
  state.session = cards;
  state.sessionIdx = 0;
  state.flipped = false;
  state.stats = { nochmal: 0, richtig: 0 };
  state.lastDeck = deck;

  const deckLabels = { kanji: 'KANJI', vocab: 'VOKABELN', grammar: 'GRAMMATIK', basics: 'ALLTAG', all: 'ALLES' };
  document.getElementById('session-deck-label').textContent = deckLabels[deck] || deck.toUpperCase();

  showScreen('session');
  if (state.mode === 'mc') {
    renderMCCard();
  } else if (state.mode === 'situation') {
    renderSituationCard();
  } else if (state.mode === 'verwendung') {
    renderVerwendungCard();
  } else {
    renderCard();
  }
}

// ===== CARD RENDERING =====
function renderCard() {
  const card = state.session[state.sessionIdx];
  const front = document.getElementById('card-front');
  const back  = document.getElementById('card-back');
  const inner = document.getElementById('card-inner');
  const wrap  = document.getElementById('card-wrap');

  // Reset flip
  inner.classList.remove('flipped');
  state.flipped = false;

  // Animate card entry
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth; // reflow
  flashcard.classList.add('card-enter');

  // Progress
  const total = state.session.length;
  const idx   = state.sessionIdx;
  document.getElementById('session-progress').textContent = `${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${(idx / total) * 100}%`;

  // Render front & back
  const dirLabel = card.dir === 'fwd' ? 'JP → DE' : 'DE → JP';

  if (card.type === 'kanji') {
    renderKanjiCard(card, front, back, dirLabel);
  } else if (card.type === 'vocab') {
    renderVocabCard(card, front, back, dirLabel);
  } else {
    renderGrammarCard(card, front, back, dirLabel);
  }

  // Show flip button, hide ratings and other mode elements
  document.getElementById('flip-btn').style.display = '';
  document.getElementById('rating-wrap').style.display = 'none';
  document.getElementById('mc-choices').style.display = 'none';
  document.getElementById('tiles-wrap').style.display = 'none';
}

function renderKanjiCard(card, front, back, dirLabel) {
  const k = card.item;
  const onStr  = k.on.length  ? k.on.join('、')  : '—';
  const kunStr = k.kun.length ? k.kun.join('、') : '—';
  const kanjiSpeakText = k.char.replace(/'/g, "\\'");
  const kanjiSentencesHtml = k.sentences && k.sentences.length
    ? `<div class="dialogue-box">${k.sentences.map(s => `
        <div class="dialogue-line">
          <div class="dialogue-line-top">
            <div class="dialogue-jp">${escHtml(s.jp)}</div>
            <button class="btn-speak-example" onclick="event.stopPropagation();speakJapanese('${s.jp.replace(/'/g, "\\'")}')">🔊</button>
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
          <button class="btn-speak-word" onclick="speakJapanese('${kanjiSpeakText}')">🔊</button>
        </div>
      </div>
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
          <button class="btn-speak-word" onclick="speakJapanese('${kanjiSpeakText}')">🔊</button>
        </div>
      </div>
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

  const vocabSpeakText = (v.reading || v.word).replace(/'/g, "\\'");
  const vocabExamplesHtml = v.examples && v.examples.length
    ? `<div class="dialogue-box">${v.examples.map(ex => `
        <div class="dialogue-line">
          <div class="dialogue-line-top">
            <div class="dialogue-jp">${escHtml(ex.jp)}</div>
            <button class="btn-speak-example" onclick="event.stopPropagation();speakJapanese('${ex.jp.replace(/'/g, "\\'")}')">🔊</button>
          </div>
          ${ex.reading ? `<div class="dialogue-reading">${escHtml(ex.reading)}</div>` : ''}
          <div class="dialogue-de">${escHtml(ex.de)}</div>
        </div>`).join('')}</div>`
    : '';

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
          <button class="btn-speak-word" onclick="speakJapanese('${vocabSpeakText}')">🔊</button>
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
      </div>` : ''}`;
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
          <button class="btn-speak-word" onclick="speakJapanese('${vocabSpeakText}')">🔊</button>
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
      </div>` : ''}`;
  }
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
  const wrap  = document.getElementById('card-wrap');

  // Reset state
  inner.classList.remove('flipped');
  state.flipped = false;

  // Animate entry
  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth;
  flashcard.classList.add('card-enter');

  // Progress
  const total = state.session.length;
  const idx   = state.sessionIdx;
  document.getElementById('session-progress').textContent = `${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${(idx / total) * 100}%`;

  // Render question on front only (no flip)
  const dirLabel = card.dir === 'fwd' ? 'JP → DE' : 'DE → JP';
  if (card.type === 'kanji') {
    renderKanjiCard(card, front, back, dirLabel);
  } else if (card.type === 'vocab') {
    renderVocabCard(card, front, back, dirLabel);
  } else {
    renderGrammarCard(card, front, back, dirLabel);
  }

  // Hide flip button and SRS buttons, show MC choices
  document.getElementById('flip-btn').style.display = 'none';
  document.getElementById('rating-wrap').style.display = 'none';
  document.getElementById('tiles-wrap').style.display = 'none';

  const { choices, correct, readings } = generateChoices(card);
  const mcEl = document.getElementById('mc-choices');
  mcEl.style.display = '';
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
  const mcEl = document.getElementById('mc-choices');
  const isCorrect = clickedBtn.dataset.choice === correct;

  // Lock all buttons
  mcEl.querySelectorAll('.mc-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === correct) {
      btn.classList.add('correct');
    } else if (btn === clickedBtn && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  if (isCorrect) {
    const currentCard = state.session[state.sessionIdx];
    if (currentCard && currentCard.type !== 'grammar') speakJapanese(getJapaneseText(currentCard));
  }

  const rating = isCorrect ? 3 : 1;  // Gut or Nochmal
  const delay  = isCorrect ? 1200 : 1600;

  setTimeout(() => {
    mcEl.style.display = 'none';
    rateCard(rating);
  }, delay);
}

// ===== SITUATION MODE =====
function generateSituationChoices(card) {
  const pool = GRAMMAR.filter(g => g.id !== card.item.id);
  const correct = stripPatternHint(card.item.pattern);
  const distractors = shuffle([...pool]).slice(0, 3).map(g => stripPatternHint(g.pattern));
  return { choices: shuffle([correct, ...distractors]), correct };
}

function renderSituationCard() {
  const card = state.session[state.sessionIdx];
  const front = document.getElementById('card-front');
  const back  = document.getElementById('card-back');
  const inner = document.getElementById('card-inner');

  inner.classList.remove('flipped');
  state.flipped = false;

  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth;
  flashcard.classList.add('card-enter');

  const total = state.session.length;
  const idx   = state.sessionIdx;
  document.getElementById('session-progress').textContent = `${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${(idx / total) * 100}%`;

  const g = card.item;
  // Non-grammar cards have no situation — fall back to regular flashcard
  if (card.type !== 'grammar') {
    renderCard();
    return;
  }
  const situation = g.situation || g.explanation.split('.')[0];

  front.innerHTML = `
    <div class="card-type-label">Grammatik — Situation</div>
    <div class="situation-prompt">${escHtml(situation)}</div>`;

  // Back: full grammar reveal (same as DE→JP flashcard back)
  back.innerHTML = `
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

  document.getElementById('flip-btn').style.display = 'none';
  document.getElementById('rating-wrap').style.display = 'none';

  const tokens = tokenizePattern(g.pattern);
  const useTiles = tokens.length >= 2;
  const subMode = (!useTiles || Math.random() < 0.6) ? 'mc' : 'tiles';

  const mcEl = document.getElementById('mc-choices');
  const tilesWrap = document.getElementById('tiles-wrap');
  mcEl.style.display = 'none';
  tilesWrap.style.display = 'none';

  if (subMode === 'mc') {
    const { choices, correct } = generateSituationChoices(card);
    mcEl.style.display = '';
    mcEl.innerHTML = choices.map((c, i) =>
      `<button class="mc-btn" data-choice="${escHtml(c)}" data-correct="${escHtml(correct)}">
        <span class="mc-num">${i + 1}</span>
        <span class="mc-text"><span class="mc-word">${escHtml(c)}</span></span>
      </button>`
    ).join('');
    mcEl.querySelectorAll('.mc-btn').forEach(btn => {
      btn.addEventListener('click', () => handleSituationMCAnswer(btn, correct));
    });
  } else {
    tilesWrap.style.display = '';
    renderTiles(tokens, g.pattern);
  }
}

function handleSituationMCAnswer(clickedBtn, correct) {
  const mcEl = document.getElementById('mc-choices');
  const isCorrect = clickedBtn.dataset.choice === correct;

  mcEl.querySelectorAll('.mc-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.choice === correct) btn.classList.add('correct');
    else if (btn === clickedBtn && !isCorrect) btn.classList.add('wrong');
  });

  setTimeout(() => {
    mcEl.style.display = 'none';
    // Flip to reveal
    document.getElementById('card-inner').classList.add('flipped');
    state.flipped = true;
    const card = state.session[state.sessionIdx];
    const ratingWrap = document.getElementById('rating-wrap');
    ratingWrap.style.display = '';
    [1, 3].forEach(r => {
      const el = document.getElementById(`int-${r}`);
      if (el) el.textContent = intervalLabel(card.srsCard, r);
    });
  }, isCorrect ? 1000 : 1500);
}

// ===== VERWENDUNG MODE =====
// Front: deutsche Verwendungs-Situation. Choices: 4 reine JP-Muster (ohne deutschen Hinweis).
function generateVerwendungChoices(card) {
  const pool = GRAMMAR.filter(g => g.id !== card.item.id);
  const correct = stripPatternHint(card.item.pattern);
  const distractors = shuffle([...pool]).slice(0, 3).map(g => stripPatternHint(g.pattern));
  return { choices: shuffle([correct, ...distractors]), correct };
}

function renderVerwendungCard() {
  const card = state.session[state.sessionIdx];
  const front = document.getElementById('card-front');
  const back  = document.getElementById('card-back');
  const inner = document.getElementById('card-inner');

  inner.classList.remove('flipped');
  state.flipped = false;

  const flashcard = document.getElementById('flashcard');
  flashcard.classList.remove('card-enter');
  void flashcard.offsetWidth;
  flashcard.classList.add('card-enter');

  const total = state.session.length;
  const idx   = state.sessionIdx;
  document.getElementById('session-progress').textContent = `${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${(idx / total) * 100}%`;

  // Non-grammar cards have no situation — fall back to regular flashcard
  if (card.type !== 'grammar') {
    renderCard();
    return;
  }

  const g = card.item;
  const situation = g.situation || cleanExplanation(g.explanation);

  front.innerHTML = `
    <div class="card-type-label">Grammatik — Verwendung</div>
    <div class="situation-prompt">${escHtml(situation)}</div>`;

  back.innerHTML = `
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

  document.getElementById('flip-btn').style.display = 'none';
  document.getElementById('rating-wrap').style.display = 'none';
  document.getElementById('tiles-wrap').style.display = 'none';

  const { choices, correct } = generateVerwendungChoices(card);
  const mcEl = document.getElementById('mc-choices');
  mcEl.style.display = '';
  mcEl.innerHTML = choices.map((c, i) =>
    `<button class="mc-btn" data-choice="${escHtml(c)}" data-correct="${escHtml(correct)}">
      <span class="mc-num">${i + 1}</span>
      <span class="mc-text"><span class="mc-word">${escHtml(c)}</span></span>
    </button>`
  ).join('');
  mcEl.querySelectorAll('.mc-btn').forEach(btn => {
    btn.addEventListener('click', () => handleSituationMCAnswer(btn, correct));
  });
}

function tokenizePattern(pattern) {
  return (pattern.match(/(〜[^〜]+|[^〜]+)/g) || [pattern]).filter(t => t.length > 0);
}

function renderTiles(tokens, correctPattern) {
  const target = document.getElementById('tiles-target');
  const source = document.getElementById('tiles-source');
  target.innerHTML = '';
  source.innerHTML = '';
  target.className = '';

  const shuffled = shuffle([...tokens]);
  shuffled.forEach((token, i) => {
    const btn = document.createElement('button');
    btn.className = 'tile';
    btn.textContent = token;
    btn.dataset.token = token;
    btn.dataset.idx = i;
    btn.addEventListener('click', () => moveTile(btn, source, target, correctPattern));
    source.appendChild(btn);
  });
}

function moveTile(btn, source, target, correctPattern) {
  if (target.classList.contains('correct') || target.classList.contains('wrong')) return;

  if (btn.parentElement === source) {
    target.appendChild(btn);
  } else {
    source.appendChild(btn);
  }

  const placed = [...target.querySelectorAll('.tile')];
  const tokens = tokenizePattern(correctPattern);
  if (placed.length === tokens.length) {
    handleTileAnswer(placed.map(b => b.dataset.token).join(''), correctPattern);
  }
}

function handleTileAnswer(assembled, correct) {
  const normalize = s => s.trim().replace(/〜/g, '').replace(/\s+/g, '').toLowerCase();
  const isCorrect = normalize(assembled) === normalize(correct);

  const target = document.getElementById('tiles-target');
  target.classList.add(isCorrect ? 'correct' : 'wrong');

  // On wrong: reset tiles after short pause so user can retry
  if (!isCorrect) {
    setTimeout(() => {
      const source = document.getElementById('tiles-source');
      target.classList.remove('wrong');
      [...target.querySelectorAll('.tile')].forEach(t => source.appendChild(t));
    }, 900);
    return;
  }

  setTimeout(() => {
    document.getElementById('tiles-wrap').style.display = 'none';
    document.getElementById('card-inner').classList.add('flipped');
    state.flipped = true;
    const card = state.session[state.sessionIdx];
    const ratingWrap = document.getElementById('rating-wrap');
    ratingWrap.style.display = '';
    [1, 3].forEach(r => {
      const el = document.getElementById(`int-${r}`);
      if (el) el.textContent = intervalLabel(card.srsCard, r);
    });
  }, 800);
}

// ===== FLIP =====
function flipCard() {
  if (state.flipped) return;
  state.flipped = true;

  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('flip-btn').style.display = 'none';

  const currentCard = state.session[state.sessionIdx];
  if (currentCard && currentCard.type !== 'grammar') speakJapanese(getJapaneseText(currentCard));

  // Show rating buttons with interval previews
  const card = state.session[state.sessionIdx];
  const ratingWrap = document.getElementById('rating-wrap');
  ratingWrap.style.display = '';

  [1, 3].forEach(r => {
    const el = document.getElementById(`int-${r}`);
    if (el) el.textContent = intervalLabel(card.srsCard, r);
  });
}

// ===== RATE & ADVANCE =====
function rateCard(rating) {
  const card = state.session[state.sessionIdx];
  const next = calcNextReview(card.srsCard, rating);

  state.srs[card.id] = next;
  saveSRS();

  const key = rating === 1 ? 'nochmal' : 'richtig';
  if (key) state.stats[key]++;

  // If "Nochmal", shuffle card into rest of deck (min 5 cards away)
  if (rating === 1) {
    const requeue = state.session.splice(state.sessionIdx, 1)[0];
    const remaining = state.session.length - state.sessionIdx;
    const minOffset = 5;
    if (remaining <= minOffset) {
      state.session.push(requeue);
    } else {
      const insertAt = state.sessionIdx + minOffset + Math.floor(Math.random() * (remaining - minOffset + 1));
      state.session.splice(insertAt, 0, requeue);
    }
  } else {
    state.sessionIdx++;
  }

  if (state.sessionIdx >= state.session.length) {
    renderDone();
  } else if (state.mode === 'mc') {
    renderMCCard();
  } else if (state.mode === 'situation') {
    renderSituationCard();
  } else if (state.mode === 'verwendung') {
    renderVerwendungCard();
  } else {
    renderCard();
  }
}

// ===== DONE SCREEN =====
function renderDone() {
  const s = state.stats;

  const statsEl = document.getElementById('done-stats');
  statsEl.innerHTML = `
  <div class="done-stat">
    <span class="done-stat-num" style="color:var(--btn-nochmal)">${s.nochmal}</span>
    <span class="done-stat-label">Nochmal</span>
  </div>
  <div class="done-stat">
    <span class="done-stat-num" style="color:var(--btn-gut)">${s.richtig}</span>
    <span class="done-stat-label">Richtig</span>
  </div>`;

  showScreen('done');
}

// ===== TEXT-TO-SPEECH =====
function getJapaneseText(card) {
  const { item, type } = card;
  if (type === 'kanji')   return item.speak || item.kun[0] || item.on[0];
  if (type === 'grammar') return item.pattern;
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
function hasKanji(str) {
  return /[一-鿿㐀-䶿]/.test(str);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function audioButtonHtml() {
  return `<div class="back-audio-wrap"><button class="back-speak-btn" id="back-speak-btn" title="Nochmal vorlesen">🔊 Nochmal hören</button></div>`;
}

function collapsibleDialogue(label, innerHtml, speakText) {
  const id = `dlg-${Math.random().toString(36).slice(2, 7)}`;
  const speakBtn = speakText
    ? `<button class="btn-speak-dialogue" onclick="event.stopPropagation();speakJapanese('${speakText.replace(/'/g, "\\'")}')">🔊 Anhören</button>`
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
      ${speakBtn}
    </div>
    <div class="dialogue-collapsible" id="${id}">
      ${innerHtml}
    </div>`;
}

// ===== LIST MODE =====
let listSearchQuery = '';
let pendingExpandKey = '';

const TAB_LABELS = { kanji: 'Kanji', vocab: 'Vokabeln', grammar: 'Grammatik', adjektive: 'Adjektive', ausdruecke: 'Ausdrücke' };

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
              <button class="btn-speak-example" onclick="event.stopPropagation();speakJapanese('${s.jp.replace(/'/g, "\\'")}')">🔊</button>
            </div>
            ${s.reading ? `<div class="sentence-reading">${escHtml(s.reading)}</div>` : ''}
            <div class="list-detail-de">${escHtml(s.de)}</div>`).join('<hr style="border:none;border-top:1px solid var(--border);margin:6px 0">')}
         </div>` : '';
    return `<span class="list-detail-reading-label">On'yomi</span>
      <div class="list-detail-readings"><span class="list-detail-reading-item">${escHtml(onStr)}</span></div>
      <span class="list-detail-reading-label">Kun'yomi</span>
      <div class="list-detail-readings"><span class="list-detail-reading-item">${escHtml(kunStr)}</span></div>
      <div class="list-detail-text">${k.meaning.map(m => escHtml(m)).join(', ')}</div>
      ${examplesHtml}${sentHtml}`;
  }
  if (tab === 'grammar') {
    const readingHtml = item.reading
      ? `<div class="list-detail-reading">${escHtml(item.reading)}</div>` : '';
    const exReadingHtml = item.example_reading
      ? `<div class="sentence-reading">${escHtml(item.example_reading)}</div>` : '';
    const exHtml = `<div class="list-detail-example">
      <div class="list-detail-example-row">
        <div class="list-detail-jp">${escHtml(item.example_jp)}</div>
        <button class="btn-speak-example" onclick="event.stopPropagation();speakJapanese('${item.example_jp.replace(/'/g, "\\'")}')" aria-label="Anhören">🔊</button>
      </div>
      ${exReadingHtml}
      <div class="list-detail-de">${escHtml(item.example_de)}</div>
    </div>`;
    return `${readingHtml}<div class="list-detail-text">${escHtml(item.explanation)}</div>${exHtml}`;
  }
  // vocab / adjektive / ausdruecke
  const readingHtml = item.reading && item.reading !== item.word
    ? `<div class="list-detail-reading">${escHtml(item.reading)}</div>` : '';
  const ex = item.examples && item.examples[0];
  const exHtml = ex ? `<div class="list-detail-example">
    <div class="list-detail-example-row">
      <div class="list-detail-jp">${escHtml(ex.jp)}</div>
      <button class="btn-speak-example" onclick="event.stopPropagation();speakJapanese('${ex.jp.replace(/'/g, "\\'")}')">🔊</button>
    </div>
    ${ex.reading ? `<div class="sentence-reading">${escHtml(ex.reading)}</div>` : ''}
    <div class="list-detail-de">${escHtml(ex.de)}</div>
  </div>` : '';
  return `${readingHtml}<div class="list-detail-text">${escHtml(item.meaning)}</div>${exHtml}`;
}

function getItemsForTab(tab) {
  if (tab === 'kanji')     return KANJI;
  if (tab === 'vocab')     return VOCAB.filter(isVocabMain);
  if (tab === 'grammar')   return GRAMMAR;
  if (tab === 'adjektive') return [...BASICS, ...VOCAB].filter(isAltag);
  return [...BASICS, ...VOCAB].filter(isNutzwort);
}

function matchesSearch(item, q) {
  return [item.word, item.reading, item.meaning, item.char, item.pattern, item.explanation]
    .concat(Array.isArray(item.meaning) ? item.meaning : [])
    .some(f => f && String(f).toLowerCase().includes(q));
}

function renderListRow(item, tab, i, clickHandler, extraAttrs, badgeHtml) {
  const itemKey = escHtml(item.id || item.char || item.word || item.pattern || '');
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
        <button class="btn-speak-list" onclick="event.stopPropagation();speakJapanese('${k.char.replace(/'/g, "\\'")}')">🔊</button>
        ${badge}<span class="list-chevron">▼</span>
      </div>
      <div class="list-row-detail" data-tab="${escHtml(tab)}" data-idx="${i}">
        ${renderListDetail(item, tab)}
      </div>
    </div>`;
  }

  const jp = item.word || item.pattern || '';
  const showReading = item.reading && item.reading !== jp;
  let de = item.meaning || '';
  if (!de && item.pattern) {
    const m = item.pattern.match(/\(([^)]+)\)\s*$/);
    de = m ? m[1] : (item.explanation ? item.explanation.split('.')[0] : '');
  } else if (!de) {
    de = item.explanation ? item.explanation.split('.')[0] : '';
  }
  const speakText = tab !== 'grammar' ? (item.reading || item.word || item.pattern || '') : '';
  const speakBtn = speakText
    ? `<button class="btn-speak-list" onclick="event.stopPropagation();speakJapanese('${speakText.replace(/'/g, "\\'")}')">🔊</button>`
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
      ${speakBtn}${badge}<span class="list-chevron">▼</span>
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

  ['kanji', 'vocab', 'grammar', 'adjektive', 'ausdruecke'].forEach(tab => {
    getItemsForTab(tab)
      .filter(item => matchesSearch(item, q))
      .forEach((item, i) => {
        const badge = `<span class="list-tab-badge">${TAB_LABELS[tab]}</span>`;
        rows.push(renderListRow(item, tab, i, 'switchToTabAndExpand(this)', `data-source-tab="${tab}"`, badge));
      });
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

// ===== EVENTS =====
function initEvents() {
  // Deck cards open start-modal
  document.querySelectorAll('.deck-card').forEach(card => {
    card.addEventListener('click', () => {
      openStartModal(card.dataset.deck);
    });
  });

  // Start modal: close (×, backdrop, Esc)
  document.getElementById('start-modal-close').addEventListener('click', closeStartModal);
  document.getElementById('start-modal').addEventListener('click', e => {
    if (e.target.id === 'start-modal') closeStartModal();
  });

  // Start modal: direction toggle
  document.querySelectorAll('#start-modal .dir-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#start-modal .dir-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.direction = btn.dataset.dir;
    });
  });

  // Start modal: Start button
  document.getElementById('modal-start-btn').addEventListener('click', () => {
    const deck = state.pendingDeck;
    if (!deck) return;
    saveModalPrefs(deck, state.mode, state.direction);
    closeStartModal();
    startSession(deck, state.direction);
  });

  // Flip button
  document.getElementById('flip-btn').addEventListener('click', flipCard);

  // Flashcard click to flip
  document.getElementById('flashcard').addEventListener('click', () => {
    if (!state.flipped) flipCard();
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

  // Liste button
  document.getElementById('liste-btn').addEventListener('click', showListScreen);

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

  // Reset button
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('Sicher? Der gesamte Lernfortschritt wird gelöscht.')) {
      localStorage.removeItem(SRS_KEY);
      loadSRS();
      renderHome();
    }
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
        const mcBtns = document.querySelectorAll('.mc-btn:not([disabled])');
        if (e.key === '1' && mcBtns[0]) mcBtns[0].click();
        if (e.key === '2' && mcBtns[1]) mcBtns[1].click();
        if (e.key === '3' && mcBtns[2]) mcBtns[2].click();
        if (e.key === '4' && mcBtns[3]) mcBtns[3].click();
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
  loadSRS();
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
