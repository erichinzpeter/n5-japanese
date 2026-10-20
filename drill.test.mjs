import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import drill from './drill.js';

const KAU     = { id: 'v174', word: '買う', reading: 'かう', meaning: 'kaufen', pos: 'Verb (Godan, う)' };
const TABERU  = { id: 'x1', word: '食べる', reading: 'たべる', pos: 'Verb (Ichidan)' };
const BENKYOU = { id: 'x2', word: '勉強する', reading: 'べんきょうする', pos: 'Verb (する-Verb)' };
const KURU    = { id: 'x3', word: '来る', reading: 'くる', pos: 'Verb (unregelmäßig)' };
const IKU     = { id: 'x4', word: '行く', reading: 'いく', pos: 'Verb (Godan, く)' };
const ARU     = { id: 'x5', word: 'ある', reading: 'ある', pos: 'Verb (Godan, る)*' };
const TAKAI   = { id: 'x6', word: '高い', reading: 'たかい', pos: 'i-Adjektiv' };
const II      = { id: 'x7', word: 'いい', reading: 'いい', pos: 'i-Adjektiv (unregelmäßig)' };
const SHIZUKA = { id: 'x8', word: '静か', reading: 'しずか', pos: 'na-Adjektiv' };
const ANZEN   = { id: 'x9', word: '安全な', reading: 'あんぜんな', pos: 'na-Adjektiv' };
const HAYAI   = { id: 'x10', word: '速い／早い', reading: 'はやい', pos: 'Adjektiv-i' };

const field = (item, key) => drill.drillForms(item).fields.find(f => f.key === key);
const words = item => Object.fromEntries(drill.drillForms(item).fields.map(f => [f.key, f.word]));
const readings = item => Object.fromEntries(drill.drillForms(item).fields.map(f => [f.key, f.reading]));

test('Verb: vorgegeben ist die ます-Form', () => {
  assert.deepEqual(drill.drillForms(KAU).given, { word: '買います', reading: 'かいます' });
});

test('Verb: alle zehn Felder für 買う', () => {
  assert.deepEqual(words(KAU), {
    plain: '買う', nai: '買わない', ta: '買った', nakatta: '買わなかった',
    masen: '買いません', mashita: '買いました', masendeshita: '買いませんでした',
    te: '買って', tai: '買いたい', mashou: '買いましょう',
  });
});

test('Verb: Ichidan', () => {
  const w = words(TABERU);
  assert.equal(w.nakatta, '食べなかった');
  assert.equal(w.masen, '食べません');
  assert.equal(w.tai, '食べたい');
});

test('Verb: する-Kompositum', () => {
  assert.deepEqual(drill.drillForms(BENKYOU).given, { word: '勉強します', reading: 'べんきょうします' });
  assert.equal(readings(BENKYOU).nakatta, 'べんきょうしなかった');
  assert.equal(words(BENKYOU).plain, '勉強する');
});

test('Verb: 来る', () => {
  assert.deepEqual(drill.drillForms(KURU).given, { word: '来ます', reading: 'きます' });
  assert.equal(readings(KURU).nai, 'こない');
  assert.equal(readings(KURU).nakatta, 'こなかった');
});

test('Verb: 行く und ある', () => {
  assert.equal(words(IKU).te, '行って');
  assert.equal(words(ARU).nai, 'ない');
  assert.equal(words(ARU).nakatta, 'なかった');
  assert.equal(words(ARU).masen, 'ありません');
});

test('Verb: Labels', () => {
  assert.equal(field(KAU, 'masen').label, 'höflich · Verneinung');
  assert.equal(field(KAU, 'plain').label, 'einfach · Gegenwart');
  assert.equal(field(KAU, 'te').label, 'て-Form');
  assert.equal(field(KAU, 'te').col, null);
});

test('i-Adjektiv: alle neun Felder für 高い', () => {
  assert.deepEqual(drill.drillForms(TAKAI).given, { word: '高いです', reading: 'たかいです' });
  assert.deepEqual(words(TAKAI), {
    plain: '高い', nai: '高くない', ta: '高かった', nakatta: '高くなかった',
    politeNeg: '高くないです', politePast: '高かったです', politeNegPast: '高くなかったです',
    te: '高くて', adverb: '高く',
  });
});

test('i-Adjektiv: いい konjugiert auf よ', () => {
  assert.deepEqual(drill.drillForms(II).given, { word: 'いいです', reading: 'いいです' });
  assert.equal(words(II).nai, 'よくない');
  assert.equal(words(II).politeNeg, 'よくないです');
});

test('na-Adjektiv: alle neun Felder für 静か', () => {
  assert.deepEqual(drill.drillForms(SHIZUKA).given, { word: '静かです', reading: 'しずかです' });
  assert.deepEqual(words(SHIZUKA), {
    plain: '静かだ', nai: '静かじゃない', ta: '静かだった', nakatta: '静かじゃなかった',
    politeNeg: '静かじゃありません', politePast: '静かでした', politeNegPast: '静かじゃありませんでした',
    te: '静かで', na: '静かな',
  });
});

test('na-Adjektiv: mit な gespeichert', () => {
  assert.deepEqual(drill.drillForms(ANZEN).given, { word: '安全です', reading: 'あんぜんです' });
  assert.equal(words(ANZEN).plain, '安全だ');
});

test('Nomen ergibt keine Felder', () => {
  assert.equal(drill.drillForms({ id: 'n', word: '本', reading: 'ほん', pos: 'Nomen' }), null);
});

test('checkDrillAnswer: Hiragana, Kanji, Katakana, Leerzeichen', () => {
  const te = field(KAU, 'te');
  assert.equal(drill.checkDrillAnswer('かって', te), true);
  assert.equal(drill.checkDrillAnswer('買って', te), true);
  assert.equal(drill.checkDrillAnswer('カッテ', te), true);
  assert.equal(drill.checkDrillAnswer(' かって　', te), true);
});

test('checkDrillAnswer: falsch und leer', () => {
  const te = field(KAU, 'te');
  assert.equal(drill.checkDrillAnswer('かいて', te), false);
  assert.equal(drill.checkDrillAnswer('', te), false);
  assert.equal(drill.checkDrillAnswer('   ', te), false);
});

test('checkDrillAnswer: Varianten', () => {
  assert.equal(drill.checkDrillAnswer('静か', field(SHIZUKA, 'plain')), true);
  assert.equal(drill.checkDrillAnswer('しずかではない', field(SHIZUKA, 'nai')), true);
  assert.equal(drill.checkDrillAnswer('静かじゃないです', field(SHIZUKA, 'politeNeg')), true);
  assert.equal(drill.checkDrillAnswer('高くありません', field(TAKAI, 'politeNeg')), true);
  assert.equal(drill.checkDrillAnswer('たかくありませんでした', field(TAKAI, 'politeNegPast')), true);
});

test('checkDrillAnswer: jede Schreibweise eines Doppeleintrags', () => {
  const nai = field(HAYAI, 'nai');
  assert.equal(drill.checkDrillAnswer('早くない', nai), true);
  assert.equal(drill.checkDrillAnswer('速くない', nai), true);
  assert.equal(drill.checkDrillAnswer('はやくない', nai), true);
});

test('drillSrsId', () => {
  assert.equal(drill.drillSrsId(KAU, 'te'), 'v174-drill-te');
});

test('jedes Verb und Adjektiv aus den Daten ergibt vollständige Felder', () => {
  const load = (file, name) =>
    new Function(readFileSync(new URL(file, import.meta.url), 'utf8') + `; return ${name};`)();
  const items = [...load('./data/vocab.js', 'VOCAB'), ...load('./data/basics.js', 'BASICS')];
  const conj = items.filter(v => /Verb|Adjektiv/.test(v.pos));
  assert.ok(conj.length > 200, `nur ${conj.length} Einträge gefunden`);
  for (const v of conj) {
    const f = drill.drillForms(v);
    assert.ok(f, `${v.word}: keine Formen`);
    assert.ok(f.given.word && f.given.reading, `${v.word}: vorgegebene Form leer`);
    if (f.kind === 'verb') assert.match(f.given.reading, /ます$/, `${v.word}: ${f.given.reading}`);
    for (const fld of f.fields) {
      assert.ok(fld.word && fld.reading, `${v.word} ${fld.key}: leer`);
      assert.doesNotMatch(fld.word + fld.reading, /undefined/, `${v.word} ${fld.key}`);
      assert.ok(drill.checkDrillAnswer(fld.reading.split('／')[0], fld), `${v.word} ${fld.key}: eigene Lesung abgelehnt`);
    }
  }
});
