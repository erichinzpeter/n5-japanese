import { test } from 'node:test';
import assert from 'node:assert/strict';
import cmp from './compare.js';
import { readFileSync } from 'node:fs';
import drill from './drill.js';

const YORI = { id: 'cmp01', pattern: 'yori', de: 'Der Zug ist schneller als der Bus.', lines: [
  { jp: '電車はバス{より}{{速い}}です。', reading: 'でんしゃはバス{より}{{はやい}}です。' },
] };
const DOCHIRA = { id: 'cmp28', pattern: 'dochira', de: 'A: Bus oder Zug? B: Der Zug.', lines: [
  { jp: 'A: バスと電車、{どちら|どっち}が{{速い}}ですか。', reading: 'A: バスとでんしゃ、{どちら|どっち}が{{はやい}}ですか。' },
  { jp: 'B: 電車{のほうが}{{速い}}です。', reading: 'B: でんしゃ{のほうが}{{はやい}}です。' },
] };

test('parseCompareText: Text, Muster- und Adjektiv-Lücke', () => {
  assert.deepEqual(cmp.parseCompareText('電車はバス{より}{{速い}}です。'), [
    { text: '電車はバス' },
    { kind: 'pattern', answers: ['より'] },
    { kind: 'adj', answers: ['速い'] },
    { text: 'です。' },
  ]);
  assert.deepEqual(cmp.parseCompareText('{どちら|どっち}が')[0], { kind: 'pattern', answers: ['どちら', 'どっち'] });
});

test('compareStage: Box 1–2 und neu → 1, ab Box 3 → 2', () => {
  assert.equal(cmp.compareStage(undefined), 1);
  assert.equal(cmp.compareStage({ box: 1 }), 1);
  assert.equal(cmp.compareStage({ box: 2 }), 1);
  assert.equal(cmp.compareStage({ box: 3 }), 2);
  assert.equal(cmp.compareStage({ box: 5 }), 2);
});

test('compareCard Stufe 1: nur Muster-Lücken, Adjektiv als Text', () => {
  const c = cmp.compareCard(YORI, 1);
  assert.equal(c.gaps.length, 1);
  assert.deepEqual(c.gaps[0], { key: 'g0', kind: 'pattern', label: 'より', word: 'より', reading: 'より', variants: [] });
  assert.deepEqual(c.lines[0], [{ text: '電車はバス' }, { gap: 0 }, { text: '速い' }, { text: 'です。' }]);
});

test('compareCard Stufe 2: Adjektiv wird zur Lücke', () => {
  const c = cmp.compareCard(YORI, 2);
  assert.deepEqual(c.gaps.map(g => [g.kind, g.word, g.reading, g.label]),
    [['pattern', 'より', 'より', 'より'], ['adj', '速い', 'はやい', 'Adjektiv']]);
  assert.equal(c.stage, 2);
});

test('compareCard: Lücken über mehrere Zeilen, Varianten', () => {
  const c = cmp.compareCard(DOCHIRA, 1);
  assert.deepEqual(c.gaps.map(g => g.word), ['どちら', 'のほうが']);
  assert.deepEqual(c.gaps[0].variants, [{ word: 'どっち', reading: 'どっち' }]);
  assert.deepEqual(c.lines[1][1], { gap: 1 });
});

test('compareCard: の方が zählt für のほうが', () => {
  const [, nohouga] = cmp.compareCard(DOCHIRA, 2).gaps.filter(g => g.kind === 'pattern');
  assert.ok(drill.checkDrillAnswer('の方が', nohouga));
  assert.ok(drill.checkDrillAnswer('のほうが', nohouga));
});

test('compareCard Stufe 2: Lücken in Zeilenreihenfolge über beide Zeilen', () => {
  const c = cmp.compareCard(DOCHIRA, 2);
  assert.deepEqual(c.gaps.map(g => [g.key, g.kind, g.word]),
    [['g0', 'pattern', 'どちら'], ['g1', 'adj', '速い'], ['g2', 'pattern', 'のほうが'], ['g3', 'adj', '速い']]);
  assert.deepEqual(c.lines[1], [{ text: 'B: 電車' }, { gap: 2 }, { gap: 3 }, { text: 'です。' }]);
});

test('compareFull: Volltext ohne Marker, erste Antwort', () => {
  assert.deepEqual(cmp.compareFull(DOCHIRA), [
    { word: 'A: バスと電車、どちらが速いですか。', reading: 'A: バスとでんしゃ、どちらがはやいですか。' },
    { word: 'B: 電車のほうが速いです。', reading: 'B: でんしゃのほうがはやいです。' },
  ]);
});

test('Antwortprüfung über checkDrillAnswer', () => {
  const [, adj] = cmp.compareCard(YORI, 2).gaps;
  assert.ok(drill.checkDrillAnswer('はやい', adj));
  assert.ok(drill.checkDrillAnswer('速い', adj));
  assert.ok(!drill.checkDrillAnswer('はやかった', adj));
  const [dochira] = cmp.compareCard(DOCHIRA, 1).gaps;
  assert.ok(drill.checkDrillAnswer('どっち', dochira));
  assert.ok(drill.checkDrillAnswer('ドチラ', dochira));
  assert.ok(!drill.checkDrillAnswer('', dochira));
  const ichiban = cmp.compareCard({ id: 'x', pattern: 'ichiban', de: '', lines: [
    { jp: '{一番}{{高い}}', reading: '{いちばん}{{たかい}}' }] }, 1).gaps[0];
  assert.ok(drill.checkDrillAnswer('いちばん', ichiban));
  assert.ok(drill.checkDrillAnswer('一番', ichiban));
});

const KUTE = { id: 'x1', pattern: 'kute', de: 'Der Laden ist billig und lecker.', lines: [
  { jp: 'この店は{{安^くて}}おいしい', reading: 'このみせは{{やす^くて}}おいしい' },
] };

test('parseCompareText: {{Stamm^Endung}}', () => {
  assert.deepEqual(cmp.parseCompareText('この店は{{安^くて}}おいしい')[1],
    { kind: 'adj', answers: ['安くて'], stem: '安', ending: 'くて' });
  assert.deepEqual(cmp.parseCompareText('{{速い}}')[0], { kind: 'adj', answers: ['速い'] });
});

test('compareCard Stufe 1: Stamm als Text, nur die Endung ist Lücke', () => {
  const c = cmp.compareCard(KUTE, 1);
  assert.deepEqual(c.gaps, [{ key: 'g0', kind: 'ending', label: 'くて', word: 'くて', reading: 'くて', variants: [] }]);
  assert.deepEqual(c.lines[0], [{ text: 'この店は' }, { text: '安' }, { gap: 0 }, { text: 'おいしい' }]);
});

test('compareCard Stufe 2: ganze Form als Lücke', () => {
  const c = cmp.compareCard(KUTE, 2);
  assert.deepEqual(c.gaps, [{ key: 'g0', kind: 'adj', label: '〜くて', word: '安くて', reading: 'やすくて', variants: [] }]);
});

test('compareFull entfernt ^', () => {
  assert.deepEqual(cmp.compareFull(KUTE), [{ word: 'この店は安くておいしい', reading: 'このみせはやすくておいしい' }]);
});

test('Antwortprüfung bei Endungs-Lücken', () => {
  const [g2] = cmp.compareCard(KUTE, 2).gaps;
  assert.ok(drill.checkDrillAnswer('やすくて', g2));
  assert.ok(drill.checkDrillAnswer('安くて', g2));
  const [g1] = cmp.compareCard(KUTE, 1).gaps;
  assert.ok(drill.checkDrillAnswer('くて', g1));
  assert.ok(!drill.checkDrillAnswer('くで', g1));
});

const load = (file, name) => new Function(readFileSync(new URL(file, import.meta.url), 'utf8') + `; return ${name};`)();
const COMPARISONS = load('./data/comparisons.js', 'COMPARISONS');
const ADJ_SENTENCES = load('./data/adjsentences.js', 'ADJ_SENTENCES');
const VERB_SENTENCES = load('./data/verbsentences.js', 'VERB_SENTENCES');

test('alle Lückensätze sind gültig (gemeinsame Regeln)', () => {
  const all = [...COMPARISONS, ...ADJ_SENTENCES, ...VERB_SENTENCES];
  assert.equal(new Set(all.map(e => e.id)).size, all.length, 'doppelte IDs');
  const shape = text => cmp.parseCompareText(text).map(p =>
    p.text !== undefined ? 'text' : `${p.kind}${p.stem !== undefined ? '^' : ''}${p.answers.length}`);
  for (const e of all) {
    assert.ok(cmp.COMPARE_PATTERNS[e.pattern], `${e.id}: pattern ${e.pattern}`);
    assert.ok(e.de, `${e.id}: de fehlt`);
    for (const l of e.lines) assert.deepEqual(shape(l.reading), shape(l.jp), `${e.id}: jp/reading-Lücken verschieden`);
    assert.ok(cmp.compareCard(e, 1).gaps.length >= 1, `${e.id}: Stufe 1 ohne Lücke`);
    for (const l of cmp.compareFull(e)) assert.doesNotMatch(l.word + l.reading, /[{}|^]/, `${e.id}: Marker im Volltext`);
    for (const stage of [1, 2])
      for (const g of cmp.compareCard(e, stage).gaps) assert.ok(drill.checkDrillAnswer(g.reading, g), `${e.id}: eigene Lesung abgelehnt (Stufe ${stage})`);
  }
});

test('COMPARISONS: Muster- und Adjektiv-Lücke, Zählung', () => {
  assert.equal(COMPARISONS.length, 40);
  for (const e of COMPARISONS) {
    const kinds = cmp.compareCard(e, 2).gaps.map(g => g.kind);
    assert.ok(kinds.includes('pattern') && kinds.includes('adj'), `${e.id}: braucht Muster- und Adjektiv-Lücke`);
  }
  const count = p => COMPARISONS.filter(e => e.pattern === p).length;
  assert.deepEqual([count('yori'), count('ichiban'), count('dochira')], [15, 12, 13]);
});

test('ADJ_SENTENCES: 40 Einträge, je eine ^-Lücke, Zählung', () => {
  assert.equal(ADJ_SENTENCES.length, 40);
  for (const e of ADJ_SENTENCES) {
    const n = e.lines.flatMap(l => cmp.parseCompareText(l.jp)).filter(p => p.stem !== undefined).length;
    assert.equal(n, 1, `${e.id}: genau eine ^-Lücke`);
  }
  const count = p => ADJ_SENTENCES.filter(e => e.pattern === p).length;
  assert.deepEqual([count('kute'), count('adverb'), count('naru')], [14, 13, 13]);
});

test('VERB_SENTENCES: 62 Einträge, Formlücken in beiden Stufen, Zählung', () => {
  assert.equal(VERB_SENTENCES.length, 62);
  for (const e of VERB_SENTENCES) {
    assert.ok(cmp.compareCard(e, 1).gaps.length >= 1, `${e.id}: Stufe 1 ohne Lücke`);
    assert.ok(cmp.compareCard(e, 2).gaps.some(g => g.kind === 'adj'), `${e.id}: Stufe 2 ohne Formlücke`);
  }
  const count = p => VERB_SENTENCES.filter(e => e.pattern === p).length;
  assert.deepEqual(['hougaii', 'koto', 'tari', 'bakari', 'order', 'teiru', 'temoii', 'naide', 'kleidung'].map(count),
    [10, 6, 5, 4, 6, 6, 7, 6, 12]);
});

test('Formlücken-Label: Verbform bei Verb-Mustern, Adjektiv bei Vergleichen', () => {
  const hou = VERB_SENTENCES.find(e => e.pattern === 'hougaii' && e.lines.some(l => l.jp.includes('{{飲んだ}}')));
  assert.ok(hou, 'hougaii-Eintrag mit {{飲んだ}}');
  assert.equal(cmp.compareCard(hou, 2).gaps.find(g => g.word === '飲んだ').label, 'Verbform');
  assert.equal(cmp.compareCard(YORI, 2).gaps[1].label, 'Adjektiv');
  for (const k of ['hougaii', 'koto', 'tari', 'bakari', 'order', 'teiru', 'temoii', 'naide'])
    assert.equal(cmp.COMPARE_PATTERNS[k].form, 'Verbform');
});

test('Kleidung: Stufe 1 fragt das Verb, Stufe 2 auch das Kleidungsstück', () => {
  const e = VERB_SENTENCES.find(x => x.pattern === 'kleidung' && x.lines[0].jp.includes('{{帽子}}'));
  assert.ok(e, 'kleidung-Eintrag mit {{帽子}}');
  assert.deepEqual(cmp.compareCard(e, 1).gaps.map(g => g.kind), ['pattern']);
  const [noun, verb] = cmp.compareCard(e, 2).gaps;
  assert.equal(noun.label, 'Kleidungsstück');
  assert.ok(drill.checkDrillAnswer('ぼうし', noun));
  assert.ok(drill.checkDrillAnswer('かぶります', verb));
  assert.ok(!drill.checkDrillAnswer('きます', verb));
});
