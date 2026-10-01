'use strict';

// Sprechtraining (Prototyp): Fragen, Prompt und Auswertung der KI-Antwort.
// Kein DOM, keine KI-Engine — die hängen in talk.js. Loaded as a plain <script>
// (browser globals) and imported in talk-core.test.mjs (Node).

// Einstiegsfragen auf N5-Niveau. `kana` steht immer daneben, weil die Frage
// vorgelesen UND gelesen werden soll; die KI stellt danach eigene Folgefragen.
const QUESTIONS = [
  { ja: '今日はどうでしたか。',           kana: 'きょうはどうでしたか。',               de: 'Wie war dein Tag heute?',                 en: 'How was your day today?' },
  { ja: '今日は何をしましたか。',         kana: 'きょうはなにをしましたか。',           de: 'Was hast du heute gemacht?',              en: 'What did you do today?' },
  { ja: '今朝、何を食べましたか。',       kana: 'けさ、なにをたべましたか。',           de: 'Was hast du heute Morgen gegessen?',      en: 'What did you eat this morning?' },
  { ja: 'きのうの夜、何をしましたか。',   kana: 'きのうのよる、なにをしましたか。',     de: 'Was hast du gestern Abend gemacht?',      en: 'What did you do last night?' },
  { ja: '週末は何をしますか。',           kana: 'しゅうまつはなにをしますか。',         de: 'Was machst du am Wochenende?',            en: 'What will you do on the weekend?' },
  { ja: '今日は何時に起きましたか。',     kana: 'きょうはなんじにおきましたか。',       de: 'Um wie viel Uhr bist du heute aufgestanden?', en: 'What time did you get up today?' },
  { ja: '趣味は何ですか。',               kana: 'しゅみはなんですか。',                 de: 'Was ist dein Hobby?',                     en: 'What is your hobby?' },
  { ja: '好きな食べ物は何ですか。',       kana: 'すきなたべものはなんですか。',         de: 'Was isst du gern?',                       en: 'What is your favourite food?' },
  { ja: 'どこに住んでいますか。',         kana: 'どこにすんでいますか。',               de: 'Wo wohnst du?',                           en: 'Where do you live?' },
  { ja: '今日の天気はどうですか。',       kana: 'きょうのてんきはどうですか。',         de: 'Wie ist das Wetter heute?',               en: 'How is the weather today?' },
  { ja: 'この前の日曜日はどこへ行きましたか。', kana: 'このまえのにちようびはどこへいきましたか。', de: 'Wo warst du letzten Sonntag?', en: 'Where did you go last Sunday?' },
  { ja: '家族は何人ですか。',             kana: 'かぞくはなんにんですか。',             de: 'Wie viele Personen hat deine Familie?',   en: 'How many people are in your family?' },
];

// Fisher-Yates auf einer Kopie; `rand` injizierbar, damit Tests deterministisch sind.
function pickQuestions(n, rand = Math.random) {
  const pool = QUESTIONS.slice();
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}

// Schema für Engines mit erzwungener JSON-Ausgabe (WebLLM, Chrome Prompt API).
// Kleine Modelle halten sich deutlich zuverlässiger an ein Grammatik-Korsett als
// an eine Beschreibung im Prompt.
const FEEDBACK_SCHEMA = {
  type: 'object',
  properties: {
    correct:           { type: 'boolean' },
    corrected:         { type: 'string' },
    corrected_reading: { type: 'string' },
    explanation:       { type: 'string' },
    reply:             { type: 'string' },
    reply_reading:     { type: 'string' },
    reply_translation: { type: 'string' },
  },
  required: ['correct', 'corrected', 'corrected_reading', 'explanation', 'reply', 'reply_reading', 'reply_translation'],
};

const LANG_NAME = { de: 'German', en: 'English' };

// Bewusst ohne Beispielantwort: das 0.8B-Modell hat ein Beispiel im Prompt
// wortwörtlich nachgeplappert (immer dieselbe Folgefrage, dieselbe Erklärung,
// sogar die Lesung des Beispielsatzes). Das Format erzwingt ohnehin das Schema.
function systemPrompt(lang) {
  const name = LANG_NAME[lang] || LANG_NAME.en;
  return [
    'You are a friendly Japanese conversation partner and teacher for a beginner (JLPT N5).',
    'The learner answers your question by speaking; their answer was transcribed by speech recognition.',
    '',
    'Judge ONLY grammar, particles, verb/adjective forms, tense and word choice.',
    'Do NOT count as mistakes: missing punctuation, spaces, kanji vs. kana spelling, or casual vs. polite style.',
    'Short answers are fine in Japanese (e.g. 「すしです。」 is a correct answer). Most beginner answers are correct — do not invent mistakes.',
    'NEVER change what the learner says: keep their facts, places, food, weather and opinions exactly. Only fix the grammar.',
    '',
    'Reply with one JSON object:',
    '- correct: true if the answer has no real mistake.',
    '- corrected: the learner\'s answer with only the mistakes fixed, in Japanese script (never romaji). If correct, copy the answer unchanged.',
    '- corrected_reading: "corrected" written only in hiragana/katakana.',
    `- explanation: if not correct, one short sentence in ${name} naming the mistake and the fix. Empty string if correct.`,
    '- reply: your answer in very simple Japanese (JLPT N5, polite です/ます form) to what the learner actually said: react in one short sentence, then ask ONE simple follow-up question about the same topic.',
    '- reply_reading: "reply" written only in hiragana/katakana.',
    `- reply_translation: "reply" translated into ${name}.`,
  ].join('\n');
}

// Stateless pro Runde: der bisherige Verlauf geht als Klartext mit, nicht als
// Chat-Historie mit JSON-Antworten — das hält den Kontext (4k Tokens) klein.
function buildMessages({ question, answer, history = [], lang = 'de' }) {
  const recent = history.slice(-2)
    .map(h => `You: ${h.question}\nLearner: ${h.answer}`)
    .join('\n');
  const user = [
    recent ? `Conversation so far:\n${recent}\n` : '',
    `Your question: ${question}`,
    `Learner's answer: ${answer}`,
  ].join('\n').trim();
  return [
    { role: 'system', content: systemPrompt(lang) },
    { role: 'user', content: user },
  ];
}

// Satzvergleich ohne Satzzeichen, Leerzeichen und Kana-Varianten der Interpunktion —
// kleine Modelle „korrigieren" oft zu exakt demselben Satz und setzen dabei
// correct=false. Solche Scheinkorrekturen werden hier als richtig gewertet.
function normalizeSentence(s) {
  return String(s || '')
    .normalize('NFKC')
    .replace(/[\s。、．，,.!！?？「」『』"'〜~]/g, '')
    .toLowerCase();
}

function sameSentence(a, b) {
  return normalizeSentence(a) === normalizeSentence(b);
}

// Holt das erste JSON-Objekt aus der Modellausgabe. Ohne Grammatik-Zwang (oder
// wenn das Modell trotzdem plaudert) kommen Code-Fences, <think>-Blöcke oder
// Vorreden vor; die werden übersprungen.
function extractJson(text) {
  const cleaned = String(text || '')
    .replace(/<think>[\s\S]*?<\/think>/g, '')
    .replace(/```(?:json)?/gi, '');
  const start = cleaned.indexOf('{');
  if (start < 0) return null;
  let depth = 0, inStr = false, esc = false;
  for (let i = start; i < cleaned.length; i++) {
    const c = cleaned[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === '"') inStr = false;
      continue;
    }
    if (c === '"') inStr = true;
    else if (c === '{') depth++;
    else if (c === '}' && --depth === 0) {
      try { return JSON.parse(cleaned.slice(start, i + 1)); } catch (e) { return null; }
    }
  }
  return null;
}

const str = v => (typeof v === 'string' ? v.trim() : '');

const KANA = /[\u3041-\u3096\u30a1-\u30fa\u30fc]/;
const JAPANESE = /[\u3041-\u3096\u30a1-\u30fa\u30fc\u4e00-\u9fff\u3005]/;
const KANJI = /[\u4e00-\u9fff\u3005]/;

// Enthält der Text überhaupt japanische Schrift? (Romaji-Antworten → nein)
function hasJapanese(s) {
  return JAPANESE.test(String(s || ''));
}

// Kleine Modelle liefern oft Lesungen mit Kanji darin oder die Lesung eines
// ganz anderen Satzes. Plausibel ist eine Lesung nur, wenn sie kanjifrei ist und
// alle Kana des Satzes in derselben Reihenfolge enthält (Kanji-Stellen dürfen
// beliebig gelesen werden).
function plausibleReading(text, reading) {
  const r = String(reading || '');
  if (!r || KANJI.test(r) || !KANA.test(r)) return false;
  const want = [...String(text || '')].filter(c => KANA.test(c));
  let i = 0;
  for (const c of r) if (i < want.length && c === want[i]) i++;
  return i === want.length;
}

// Rohausgabe → einheitliches Feedback-Objekt, oder null wenn unbrauchbar.
// `answer` ist die Eingabe des Lernenden; damit wird die Scheinkorrektur erkannt.
function parseFeedback(text, answer) {
  const raw = typeof text === 'object' && text !== null ? text : extractJson(text);
  if (!raw || typeof raw !== 'object') return null;
  const fb = {
    correct:          raw.correct === true || raw.correct === 'true',
    corrected:        str(raw.corrected),
    correctedReading: str(raw.corrected_reading),
    explanation:      str(raw.explanation),
    reply:            str(raw.reply),
    replyReading:     str(raw.reply_reading),
    replyTranslation: str(raw.reply_translation),
  };
  if (!fb.reply && !fb.corrected) return null;
  if (!hasJapanese(fb.reply)) { fb.reply = ''; fb.replyReading = ''; fb.replyTranslation = ''; }
  if (!fb.corrected || !hasJapanese(fb.corrected)) fb.corrected = str(answer);
  if (!plausibleReading(fb.corrected, fb.correctedReading)) fb.correctedReading = '';
  if (!plausibleReading(fb.reply, fb.replyReading)) fb.replyReading = '';
  // Modell sagt „falsch", liefert aber denselben Satz → richtig.
  if (!fb.correct && sameSentence(fb.corrected, answer)) fb.correct = true;
  // Bei „richtig" zählt die Eingabe. Eine abweichende `corrected` ist dann meist
  // nur eine andere Schreibung (友達/友だち) und würde als Scheinfehler verwirren.
  if (fb.correct) {
    fb.corrected = str(answer);
    fb.correctedReading = '';
    fb.explanation = '';
  }
  return fb;
}

// Ein Namensraum statt vieler Globals — talk.js greift über talkCore.* zu.
const talkCore = {
  QUESTIONS, FEEDBACK_SCHEMA, pickQuestions, systemPrompt, buildMessages,
  normalizeSentence, sameSentence, extractJson, parseFeedback, hasJapanese, plausibleReading,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = talkCore;
}
