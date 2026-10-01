import { test } from 'node:test';
import assert from 'node:assert/strict';
import core from './talk-core.js';

const FULL = {
  correct: false,
  corrected: 'きのう友だちと映画を見ました。',
  corrected_reading: 'きのうともだちとえいがをみました。',
  explanation: 'Vergangenheit: 見ます → 見ました.',
  reply: 'いいですね！どんな映画を見ましたか。',
  reply_reading: 'いいですね！どんなえいがをみましたか。',
  reply_translation: 'Schön! Was für einen Film hast du gesehen?',
};

test('pickQuestions liefert n verschiedene Fragen', () => {
  const qs = core.pickQuestions(5, () => 0.5);
  assert.equal(qs.length, 5);
  assert.equal(new Set(qs.map(q => q.ja)).size, 5);
});

test('jede Frage hat Kana-Lesung und Übersetzungen', () => {
  for (const q of core.QUESTIONS) {
    assert.ok(q.ja && q.kana && q.de && q.en, q.ja);
    assert.match(q.kana, /^[぀-ヿ、。！？\s]+$/, `kana nur Kana: ${q.kana}`);
  }
});

test('buildMessages: System-Prompt nennt die Erklärsprache', () => {
  const de = core.buildMessages({ question: 'Q', answer: 'A', lang: 'de' });
  const en = core.buildMessages({ question: 'Q', answer: 'A', lang: 'en' });
  assert.match(de[0].content, /in German/);
  assert.match(en[0].content, /in English/);
});

test('buildMessages: nur die letzten zwei Runden als Kontext', () => {
  const history = [1, 2, 3].map(i => ({ question: `F${i}`, answer: `A${i}` }));
  const [, user] = core.buildMessages({ question: 'F4', answer: 'A4', history, lang: 'de' });
  assert.doesNotMatch(user.content, /F1/);
  assert.match(user.content, /F2[\s\S]*F3/);
  assert.match(user.content, /Your question: F4\nLearner's answer: A4$/);
});

test('extractJson: nackt, in Code-Fence, nach <think> und mit Vorrede', () => {
  const json = JSON.stringify(FULL);
  assert.deepEqual(core.extractJson(json), FULL);
  assert.deepEqual(core.extractJson('```json\n' + json + '\n```'), FULL);
  assert.deepEqual(core.extractJson('<think>{"x":1}</think>\n' + json), FULL);
  assert.deepEqual(core.extractJson('Hier ist das Ergebnis: ' + json + ' Viel Erfolg!'), FULL);
});

test('extractJson: geschweifte Klammern in Strings stören nicht', () => {
  assert.deepEqual(core.extractJson('{"a":"}{","b":1}'), { a: '}{', b: 1 });
});

test('extractJson: kaputtes oder fehlendes JSON → null', () => {
  assert.equal(core.extractJson('keine Ahnung'), null);
  assert.equal(core.extractJson('{"a": '), null);
});

test('parseFeedback: echte Korrektur bleibt Korrektur', () => {
  const fb = core.parseFeedback(JSON.stringify(FULL), 'きのう友だちと映画を見ます');
  assert.equal(fb.correct, false);
  assert.equal(fb.corrected, FULL.corrected);
  assert.equal(fb.correctedReading, FULL.corrected_reading);
  assert.equal(fb.replyTranslation, FULL.reply_translation);
});

test('parseFeedback: „falsch" mit identischem Satz ist richtig', () => {
  const fb = core.parseFeedback({ ...FULL, corrected: 'すしです。' }, 'すしです');
  assert.equal(fb.correct, true);
  assert.equal(fb.explanation, '');
});

test('parseFeedback: bei „richtig" zählt die Eingabe, nicht eine Umschreibung', () => {
  const fb = core.parseFeedback({ ...FULL, correct: true, corrected: 'きのう友達と映画を見ました。' },
    'きのう友だちと映画を見ました');
  assert.equal(fb.correct, true);
  assert.equal(fb.corrected, 'きのう友だちと映画を見ました');
  assert.equal(fb.explanation, '');
});

test('parseFeedback: ohne corrected wird die Eingabe übernommen', () => {
  const fb = core.parseFeedback({ correct: true, reply: 'そうですか。' }, 'ねました');
  assert.equal(fb.corrected, 'ねました');
  assert.equal(fb.reply, 'そうですか。');
});

test('parseFeedback: unbrauchbare Ausgabe → null', () => {
  assert.equal(core.parseFeedback('Entschuldigung, ich verstehe nicht.', 'x'), null);
  assert.equal(core.parseFeedback('{"correct": true}', 'x'), null);
});

test('sameSentence ignoriert Satzzeichen und Leerzeichen, nicht aber ー', () => {
  assert.ok(core.sameSentence('はい、そうです。', 'はい そうです'));
  assert.ok(!core.sameSentence('コーヒー', 'コヒ'));
});

test('hasJapanese: Romaji zählen nicht', () => {
  assert.ok(core.hasJapanese('すしです'));
  assert.ok(core.hasJapanese('今日'));
  assert.ok(!core.hasJapanese('Nishi ni'));
});

test('plausibleReading: Kanji in der Lesung oder fremder Satz → verworfen', () => {
  assert.ok(core.plausibleReading('ベルリンに住んでいます', 'べるりんにすんでいます') === false, 'Katakana muss Katakana bleiben');
  assert.ok(core.plausibleReading('ベルリンに住んでいます', 'ベルリンにすんでいます'));
  assert.ok(!core.plausibleReading('今日は晴れて', 'きょうは晴れて'));
  assert.ok(!core.plausibleReading('どんな場所に住んでいますか。', 'どんなえいがをみましたか。'));
  assert.ok(core.plausibleReading('どんな場所に住んでいますか。', 'どんなばしょにすんでいますか。'));
});

test('parseFeedback: unplausible Lesungen und Romaji-Korrekturen werden entfernt', () => {
  const fb = core.parseFeedback({
    correct: false,
    corrected: 'Nishi ni shi ni wa shimasu.',
    corrected_reading: 'Nishi ni shi ni wa shimasu.',
    explanation: 'x',
    reply: 'いいですね！どんな場所に住んでいますか。',
    reply_reading: 'いいですね！どんなえいがをみましたか。',
    reply_translation: 'y',
  }, 'にしに');
  assert.equal(fb.corrected, 'にしに');
  assert.equal(fb.correct, true);
  assert.equal(fb.replyReading, '');
});

test('systemPrompt enthält keine Beispielantwort mehr (Nachplappern)', () => {
  assert.doesNotMatch(core.systemPrompt('de'), /映画/);
});
