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
};

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

  back.innerHTML += audioButtonHtml();
  document.getElementById('back-speak-btn').addEventListener('click', () => {
    const card = state.session[state.sessionIdx];
    if (card) speakJapanese(getJapaneseText(card));
  });

  // Show flip button, hide ratings
  document.getElementById('flip-btn').style.display = '';
  const ratingWrap = document.getElementById('rating-wrap');
  ratingWrap.style.display = 'none';
}

function renderKanjiCard(card, front, back, dirLabel) {
  const k = card.item;
  const onStr  = k.on.length  ? k.on.join('、')  : '—';
  const kunStr = k.kun.length ? k.kun.join('、') : '—';

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
        <div class="back-main">${k.char}</div>
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
        <div class="dialogue-box">${k.sentences.map(s => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(s.jp)}</div>
            <div class="dialogue-de">${escHtml(s.de)}</div>
          </div>`).join('')}
        </div>
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
        <div class="back-main">${k.char}</div>
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
        <div class="dialogue-box">${k.sentences.map(s => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(s.jp)}</div>
            <div class="dialogue-de">${escHtml(s.de)}</div>
          </div>`).join('')}
        </div>
      </div>` : ''}`;
  }
}

function renderVocabCard(card, front, back, dirLabel) {
  const v = card.item;
  const showReading = v.word !== v.reading;

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
        <div class="back-main" style="font-size:32px">${v.word}</div>
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
        <div class="dialogue-box">${v.examples.map(ex => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(ex.jp)}</div>
            <div class="dialogue-de">${escHtml(ex.de)}</div>
          </div>`).join('')}
        </div>
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
        <div class="back-main" style="font-size:36px">${v.word}</div>
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
        <div class="dialogue-box">${v.examples.map(ex => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(ex.jp)}</div>
            <div class="dialogue-de">${escHtml(ex.de)}</div>
          </div>`).join('')}
        </div>
      </div>` : ''}`;
  }
}

function renderGrammarCard(card, front, back, dirLabel) {
  const g = card.item;

  if (card.dir === 'fwd') {
    // JP → DE: front = Grammar pattern
    front.innerHTML = `
      <div class="card-type-label">Grammatik</div>
      <div class="card-pattern-main">${escHtml(g.pattern)}</div>
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
        <div class="back-example-de">${escHtml(g.example_de)}</div>
      </div>
      ${g.dialogue ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Dialog</span>
        <div class="dialogue-box">${g.dialogue.map(l => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(l.jp)}</div>
            <div class="dialogue-de">${escHtml(l.de)}</div>
          </div>`).join('')}
        </div>
      </div>` : ''}`;
  } else {
    // DE → JP: front = German explanation
    front.innerHTML = `
      <div class="card-type-label">Grammatik — Erklärung</div>
      <div class="card-german-main" style="font-size:22px;font-style:normal">${escHtml(g.explanation.split('.')[0])}</div>
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
        <div class="back-example-de">${escHtml(g.example_de)}</div>
      </div>
      ${g.dialogue ? `
      <div class="back-divider"></div>
      <div class="back-section">
        <span class="back-label">Dialog</span>
        <div class="dialogue-box">${g.dialogue.map(l => `
          <div class="dialogue-line">
            <div class="dialogue-jp">${escHtml(l.jp)}</div>
            <div class="dialogue-de">${escHtml(l.de)}</div>
          </div>`).join('')}
        </div>
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
      correct = item.word;
      getLabel = v => v.word;
    }
  } else {
    // grammar
    pool = GRAMMAR.filter(g => g.id !== item.id);
    if (dir === 'fwd') {
      correct = item.explanation.split('.')[0];
      getLabel = g => g.explanation.split('.')[0];
    } else {
      correct = item.pattern;
      getLabel = g => g.pattern;
    }
  }

  const shuffled = shuffle([...pool]).slice(0, 3);
  const distractors = shuffled.map(getLabel);
  const choices = shuffle([correct, ...distractors]);
  return { choices, correct };
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

  const { choices, correct } = generateChoices(card);
  const mcEl = document.getElementById('mc-choices');
  mcEl.style.display = '';
  mcEl.innerHTML = choices.map((c, i) => `
    <button class="mc-btn" data-choice="${escHtml(c)}" data-correct="${escHtml(correct)}">
      <span class="mc-num">${i + 1}</span>
      <span class="mc-text">${escHtml(c)}</span>
    </button>`).join('');

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
    if (currentCard) speakJapanese(getJapaneseText(currentCard));
  }

  const rating = isCorrect ? 3 : 1;  // Gut or Nochmal
  const delay  = isCorrect ? 1200 : 1600;

  setTimeout(() => {
    mcEl.style.display = 'none';
    rateCard(rating);
  }, delay);
}

// ===== FLIP =====
function flipCard() {
  if (state.flipped) return;
  state.flipped = true;

  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('flip-btn').style.display = 'none';

  const currentCard = state.session[state.sessionIdx];
  if (currentCard) speakJapanese(getJapaneseText(currentCard));

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

  // If "Nochmal", re-queue the card near the end
  if (rating === 1) {
    const requeue = state.session.splice(state.sessionIdx, 1)[0];
    const insertAt = Math.min(state.sessionIdx + 3 + Math.floor(Math.random() * 3), state.session.length);
    state.session.splice(insertAt, 0, requeue);
  } else {
    state.sessionIdx++;
  }

  if (state.sessionIdx >= state.session.length) {
    renderDone();
  } else if (state.mode === 'mc') {
    renderMCCard();
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
  if (type === 'kanji')   return item.char;
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

// ===== EVENTS =====
function initEvents() {
  // Mode toggle
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode;
    });
  });

  // Direction toggle
  document.querySelectorAll('.dir-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dir-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.direction = btn.dataset.dir;
      renderHome();
    });
  });

  // Deck cards
  document.querySelectorAll('.deck-card').forEach(card => {
    card.addEventListener('click', () => {
      startSession(card.dataset.deck, state.direction);
    });
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
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
