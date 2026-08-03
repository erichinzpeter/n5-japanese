import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
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

test('surfaceForms führt die Wörterbuchform zuerst', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.equal(words[0], '読む');
});

const HANASU = {
  word: '話す', reading: 'はなす', meaning: 'sprechen', pos: 'Verb (Godan, す)',
  examples: [{ jp: '日本語で話してください。', reading: 'にほんごではなしてください。', de: 'Bitte sprechen Sie Japanisch.' }],
};

// 話し (ます-Stamm) ist kürzer als 話して (て-Form) und würde ohne Längensortierung
// vor ihr gewinnen — Karte '日本語で＿てください。' mit answer '話し' wäre falsch.
test('buildCloze wählt unter mehreren passenden Formen die längste', () => {
  assert.equal(cloze.buildCloze(HANASU, 'vocab').text, '日本語で＿ください。');
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

const KIREI = {
  word: 'きれい', reading: 'きれい', meaning: 'schön', pos: 'na-Adjektiv',
  examples: [{ jp: 'この花はきれいです。', reading: 'このはなはきれいです。', de: 'Diese Blume ist schön.' }],
};

// きれいで ist länger als きれい und passt zufällig in きれいです hinein — ohne
// Wörterbuchform-Priorität würde die Flexionsform gewinnen und Unsinn ergeben.
test('buildCloze gapt bei na-Adjektiven die Wörterbuchform, nicht eine längere Flexionsform', () => {
  assert.equal(cloze.buildCloze(KIREI, 'vocab').text, 'この花は＿です。');
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

test('buildCloze überspringt einen Satz, der bereits eine Lücke enthält', () => {
  const alreadyGapped = {
    word: '本', reading: 'ほん', meaning: 'Buch', pos: 'Nomen',
    examples: [{ jp: '机の上に＿があります。', reading: 'つくえのうえにほんがあります。', de: 'Auf dem Tisch liegt ein Buch.' }],
  };
  assert.equal(cloze.buildCloze(alreadyGapped, 'vocab'), null);
});

const ICHI = {
  char: '一', meaning: ['eins'], speak: 'いち', on: ['いち'], kun: ['ひと'],
  sentences: [{ jp: 'りんごを一つください。', reading: 'りんごをひとつください。', de: 'Geben Sie mir bitte einen Apfel.' }],
};

test('Kanji-Karte lässt den Satz vollständig', () => {
  assert.equal(cloze.buildCloze(ICHI, 'kanji').text, 'りんごを一つください。');
});

test('Kanji-Karte lückt die Lesungszeile', () => {
  assert.equal(cloze.buildCloze(ICHI, 'kanji').reading, 'りんごを＿つください。');
});

test('Kanji-Karte fragt nach der Lesung', () => {
  assert.equal(cloze.buildCloze(ICHI, 'kanji').answer, 'ひと');
});

const COMPOUND_ONLY = {
  char: '気', meaning: ['Geist'], speak: 'き', on: ['き'], kun: [],
  sentences: [{ jp: '今日は元気ですか。', reading: 'きょうはげんきですか。', de: 'Geht es dir heute gut?' }],
};

test('Kanji-Karte lückt auch die Lesung innerhalb eines Compounds', () => {
  assert.equal(cloze.buildCloze(COMPOUND_ONLY, 'kanji').reading, 'きょうはげん＿ですか。');
});

const TWO_SENTENCES = {
  char: '気', meaning: ['Geist'], speak: 'き', on: ['き'], kun: [],
  sentences: [
    { jp: '明日の天気が気になります。', reading: 'あしたのてんきがきになります。', de: 'Das Wetter von morgen beschäftigt mich.' },
    { jp: '今日は元気ですか。', reading: 'きょうはげんきですか。', de: 'Geht es dir heute gut?' },
  ],
};

// Im ersten Satz steht 気 zweimal — die ungelückte zweite Stelle würde die Antwort
// in der Kana-Zeile verraten. Der Satz mit nur einem Vorkommen gewinnt deshalb.
test('Satz mit einfachem Vorkommen schlägt den mit doppeltem', () => {
  assert.equal(cloze.buildCloze(TWO_SENTENCES, 'kanji').text, '今日は元気ですか。');
});

const NO_READING_LINE = {
  char: '一', meaning: ['eins'], speak: 'いち', on: ['いち'], kun: ['ひと'],
  sentences: [{ jp: 'りんごを一つください。', de: 'Geben Sie mir bitte einen Apfel.' }],
};

test('ohne Lesungszeile gibt es keine Kanji-Lücke', () => {
  assert.equal(cloze.buildCloze(NO_READING_LINE, 'kanji'), null);
});

const load = (file, name) => new Function(
  readFileSync(new URL(file, import.meta.url), 'utf8') + `; return ${name};`
)();

const VOCAB = load('./data/vocab.js', 'VOCAB');
const KANJI = load('./data/kanji.js', 'KANJI');

function countWithCloze(items, type) {
  return items.filter(item => cloze.buildCloze(item, type) !== null).length;
}

// Ist-Wert aktuell 1010 — die Schwelle liegt bewusst darunter, damit harmlose
// Datenpflege an data/vocab.js den Test nicht bei jeder kleinen Änderung reißt.
test('mindestens 1000 der Vokabeln liefern einen Lückensatz', () => {
  const count = countWithCloze(VOCAB, 'vocab');
  assert.ok(count >= 1000, `nur ${count} von ${VOCAB.length} Vokabeln`);
});

test('alle Kanji liefern einen Lückensatz', () => {
  assert.equal(countWithCloze(KANJI, 'kanji'), KANJI.length);
});
