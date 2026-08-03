import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import furigana from './furigana.js';

const { readingSpan } = furigana;

function span(jp, reading, char, item) {
  const hit = readingSpan(jp, reading, char, item);
  return hit ? reading.slice(hit.at, hit.at + hit.length) : null;
}

test('alleinstehendes Zeichen zwischen zwei Kana-Ankern', () => {
  assert.equal(span('日本語が話せますか。', 'にほんごがはなせますか。', '話', { on: ['わ'], kun: ['はなす'] }), 'はな');
});

test('Zeichen am Satzanfang', () => {
  assert.equal(span('本を読みます。', 'ほんをよみます。', '本', { on: ['ほん'], kun: ['もと'] }), 'ほん');
});

test('Compound: erstes Zeichen', () => {
  assert.equal(span('三月に会います。', 'さんがつにあいます。', '三', { on: ['さん'], kun: ['み'] }), 'さん');
});

test('Compound: zweites Zeichen mit Rendaku', () => {
  assert.equal(span('三月に会います。', 'さんがつにあいます。', '月', { on: ['げつ', 'がつ'], kun: ['つき'] }), 'がつ');
});

test('Compound mit Gemination', () => {
  assert.equal(span('毎日学校へ行きます。', 'まいにちがっこうへいきます。', '学', { on: ['がく'], kun: ['まなぶ'] }), 'がっ');
});

test('Katakana im Satz stört die Ausrichtung nicht', () => {
  assert.equal(span('私はドイツ人です。', 'わたしはどいつじんです。', '私', { on: ['し'], kun: ['わたし'] }), 'わたし');
});

test('mehrfach vorkommendes Zeichen trifft das erste Vorkommen', () => {
  const jp = '毎日日本語を勉強します。';
  const reading = 'まいにちにほんごをべんきょうします。';
  assert.equal(span(jp, reading, '日', { on: ['にち', 'じつ'], kun: ['ひ', 'か'] }), 'にち');
});

test('Jukujikun ohne passende Zeichen-Lesung ergibt keine Spanne', () => {
  assert.equal(span('今日は暑いです。', 'きょうはあついです。', '日', { on: ['にち', 'じつ'], kun: ['ひ', 'か'] }), null);
});

test('Zeichen fehlt im Satz', () => {
  assert.equal(span('本を読みます。', 'ほんをよみます。', '水', { on: ['すい'], kun: ['みず'] }), null);
});

test('Lesungszeile passt nicht zum Satz', () => {
  assert.equal(span('本を読みます。', 'まったくanderes。', '本', { on: ['ほん'], kun: ['もと'] }), null);
});

test('Spanne zeigt auf die Stelle in der Lesungszeile', () => {
  const hit = readingSpan('日本語が話せますか。', 'にほんごがはなせますか。', '話', { on: ['わ'], kun: ['はなす'] });
  assert.deepEqual(hit, { at: 5, length: 2 });
});

const KANJI = new Function(
  readFileSync(new URL('./data/kanji.js', import.meta.url), 'utf8') + '; return KANJI;'
)();

function hasSpan(k) {
  return (k.sentences || []).some(s => s.reading && readingSpan(s.jp, s.reading, k.char, k) !== null);
}

test('jedes Kanji hat einen Beispielsatz mit auflösbarer Lesung', () => {
  const missing = KANJI.filter(k => !hasSpan(k)).map(k => k.char);
  assert.deepEqual(missing, []);
});
