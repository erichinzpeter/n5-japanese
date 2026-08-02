import { test } from 'node:test';
import assert from 'node:assert/strict';
import cloze from './cloze.js';

const YOMU = { word: '読む', reading: 'よむ', meaning: 'lesen', pos: 'Verb (Godan, む)' };

test('surfaceForms enthält die Wörterbuchform', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.ok(words.includes('読む'));
});

test('surfaceForms enthält die ます-Form', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.ok(words.includes('読みます'));
});

test('surfaceForms enthält den ます-Stamm', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.ok(words.includes('読み'));
});

test('surfaceForms führt die längste Form zuerst', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.equal(words[0].length, Math.max(...words.map(w => w.length)));
});

test('surfaceForms liefert zu jeder Form die Lesung', () => {
  const masu = cloze.surfaceForms(YOMU, 'vocab').find(f => f.word === '読みます');
  assert.equal(masu.reading, 'よみます');
});

test('surfaceForms für ein Nomen liefert nur die Wörterbuchform', () => {
  const noun = { word: '本', reading: 'ほん', pos: 'Nomen' };
  assert.deepEqual(cloze.surfaceForms(noun, 'vocab'), [{ word: '本', reading: 'ほん' }]);
});

const HON = {
  word: '本', reading: 'ほん', meaning: 'Buch', pos: 'Nomen',
  examples: [{ jp: '机の上に本があります。', reading: 'つくえのうえにほんがあります。', de: 'Auf dem Tisch liegt ein Buch.' }],
};

test('buildCloze ersetzt die Wörterbuchform durch die Lücke', () => {
  assert.equal(cloze.buildCloze(HON, 'vocab').text, '机の上に＿があります。');
});

test('buildCloze gibt die entfernte Form als answer zurück', () => {
  assert.equal(cloze.buildCloze(HON, 'vocab').answer, '本');
});

test('buildCloze übernimmt die deutsche Übersetzung des Satzes', () => {
  assert.equal(cloze.buildCloze(HON, 'vocab').de, 'Auf dem Tisch liegt ein Buch.');
});

const YOMU_CARD = {
  word: '読む', reading: 'よむ', meaning: 'lesen', pos: 'Verb (Godan, む)',
  examples: [{ jp: '毎日新聞を読みます。', reading: 'まいにちしんぶんをよみます。', de: 'Ich lese jeden Tag Zeitung.' }],
};

const KARIRU = {
  word: '借りる', reading: 'かりる', meaning: 'leihen', pos: 'Verb (Ichidan)',
  examples: [{ jp: '図書館で本を借りました。', reading: 'としょかんでほんをかりました。', de: 'Ich habe in der Bibliothek ein Buch geliehen.' }],
};

test('buildCloze trifft die ます-Form im Satz', () => {
  assert.equal(cloze.buildCloze(YOMU_CARD, 'vocab').text, '毎日新聞を＿。');
});

test('answer ist die Oberflächenform, nicht die Wörterbuchform', () => {
  assert.equal(cloze.buildCloze(YOMU_CARD, 'vocab').answer, '読みます');
});

test('buildCloze trifft den ます-Stamm vor ました', () => {
  assert.equal(cloze.buildCloze(KARIRU, 'vocab').text, '図書館で本を＿ました。');
});

const NAI_READING = {
  word: '本', reading: 'ほん', meaning: 'Buch', pos: 'Nomen',
  examples: [{ jp: '机の上に本があります。', de: 'Auf dem Tisch liegt ein Buch.' }],
};

test('reading bekommt die Lücke an derselben Stelle', () => {
  assert.equal(cloze.buildCloze(YOMU_CARD, 'vocab').reading, 'まいにちしんぶんを＿。');
});

test('answerReading ist die Lesung der entfernten Form', () => {
  assert.equal(cloze.buildCloze(YOMU_CARD, 'vocab').answerReading, 'よみます');
});

test('reading ist null, wenn der Satz keine Lesung mitbringt', () => {
  assert.equal(cloze.buildCloze(NAI_READING, 'vocab').reading, null);
});

const KURUMA = {
  word: '車', reading: 'くるま', meaning: 'Auto', pos: 'Nomen',
  examples: [
    { jp: '電車に乗ります。', reading: 'でんしゃにのります。', de: 'Ich steige in den Zug.' },
    { jp: '車で買い物に行きます。', reading: 'くるまでかいものにいきます。', de: 'Ich fahre mit dem Auto einkaufen.' },
  ],
};

const ONLY_COMPOUND = {
  word: '車', reading: 'くるま', meaning: 'Auto', pos: 'Nomen',
  examples: [{ jp: '電車に乗ります。', reading: 'でんしゃにのります。', de: 'Ich steige in den Zug.' }],
};

test('Ein-Zeichen-Treffer im Compound wird übersprungen, der saubere Satz gewinnt', () => {
  assert.equal(cloze.buildCloze(KURUMA, 'vocab').text, '＿で買い物に行きます。');
});

test('buildCloze ist null, wenn nur ein Compound-Treffer existiert', () => {
  assert.equal(cloze.buildCloze(ONLY_COMPOUND, 'vocab'), null);
});

test('buildCloze ist null, wenn das Wort in keinem Satz vorkommt', () => {
  const variant = {
    word: '美味しい', reading: 'おいしい', meaning: 'lecker', pos: 'i-Adjektiv',
    examples: [{ jp: 'このラーメンはとてもおいしいです。', reading: 'このらーめんはとてもおいしいです。', de: 'Diese Ramen sind sehr lecker.' }],
  };
  assert.equal(cloze.buildCloze(variant, 'vocab'), null);
});
