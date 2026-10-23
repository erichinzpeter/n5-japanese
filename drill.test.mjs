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

test('Verb: alle elf Felder für 買う', () => {
  assert.deepEqual(words(KAU), {
    plain: '買う', nai: '買わない', ta: '買った', nakatta: '買わなかった',
    masen: '買いません', mashita: '買いました', masendeshita: '買いませんでした',
    te: '買って', teimasu: '買っています', tai: '買いたい', mashou: '買いましょう',
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
  assert.equal(words(ARU).teimasu, undefined);
});

test('Verb: ています-Form', () => {
  assert.equal(readings(KURU).teimasu, 'きています');
  assert.equal(words(IKU).teimasu, '行っています');
  assert.equal(words(BENKYOU).teimasu, '勉強しています');
  assert.equal(field(KAU, 'teimasu').label, 'ています-Form');
  assert.equal(field(KAU, 'teimasu').col, null);
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

test('na-Adjektiv: alle zehn Felder für 静か', () => {
  assert.deepEqual(drill.drillForms(SHIZUKA).given, { word: '静かです', reading: 'しずかです' });
  assert.deepEqual(words(SHIZUKA), {
    plain: '静かだ', nai: '静かじゃない', ta: '静かだった', nakatta: '静かじゃなかった',
    politeNeg: '静かじゃありません', politePast: '静かでした', politeNegPast: '静かじゃありませんでした',
    te: '静かで', adverb: '静かに', na: '静かな',
  });
});

test('na-Adjektiv: Adverb auf に', () => {
  assert.equal(words(SHIZUKA).adverb, '静かに');
  assert.equal(words(ANZEN).adverb, '安全に');
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

test('checkDrillAnswer: Halbbreite und Satzzeichen', () => {
  const te = field(KAU, 'te');
  assert.equal(drill.checkDrillAnswer('ｶｯﾃ', te), true);
  assert.equal(drill.checkDrillAnswer('かって、', te), true);
  assert.equal(drill.checkDrillAnswer('かって！', te), true);
  assert.equal(drill.checkDrillAnswer('しずかで.', field(SHIZUKA, 'te')), true);
});

test('checkDrillAnswer: andere Form wird abgelehnt', () => {
  assert.equal(drill.checkDrillAnswer('静かだった', field(SHIZUKA, 'plain')), false);
  assert.equal(drill.checkDrillAnswer('買った', field(KAU, 'te')), false);
});

test('i-Adjektiv: いい／良い', () => {
  const ii = { id: 'x11', word: 'いい／良い', reading: 'いい／よい', pos: 'Adjektiv-i' };
  assert.equal(drill.drillForms(ii).given.word, 'いいです／良いです');
  assert.equal(field(ii, 'plain').word, 'いい／良い');
  assert.equal(drill.checkDrillAnswer('いい', field(ii, 'plain')), true);
  assert.equal(drill.checkDrillAnswer('良い', field(ii, 'plain')), true);
});

test('na-Adjektiv: pos Adjektiv-na', () => {
  const t = { id: 'b055', word: '大切', reading: 'たいせつ', pos: 'Adjektiv-na' };
  assert.equal(drill.drillForms(t).given.word, '大切です');
  assert.equal(words(t).nai, '大切じゃない');
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

// Endungen je Form, damit falsche, aber nicht leere Formen auffallen.
const SHAPES = {
  verb: {
    masen: /ません$/, mashita: /ました$/, masendeshita: /ませんでした$/, tai: /たい$/,
    mashou: /ましょう$/, nai: /ない$/, nakatta: /なかった$/, te: /[てで]$/, teimasu: /[てで]います$/, ta: /[ただ]$/,
  },
  'i-adj': {
    nai: /くない$/, nakatta: /くなかった$/, ta: /かった$/, te: /くて$/, adverb: /く$/,
    politeNeg: /です$/, politePast: /です$/, politeNegPast: /です$/,
  },
  'na-adj': { plain: /だ$/, na: /な$/, te: /で$/, adverb: /に$/, politePast: /でした$/ },
};

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
      const shape = SHAPES[f.kind]?.[fld.key];
      if (shape) for (const r of fld.reading.split('／')) assert.match(r, shape, `${v.word} ${fld.key}: ${r}`);
      assert.ok(drill.checkDrillAnswer(fld.reading.split('／')[0], fld), `${v.word} ${fld.key}: eigene Lesung abgelehnt`);
    }
  }
});
