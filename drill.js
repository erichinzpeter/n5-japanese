'use strict';

// Durchkonjugieren: baut aus einem Verb oder Adjektiv die Felder des Tipp-Drills und
// prüft eine getippte Antwort. Vorgegeben ist immer die höfliche Gegenwart (買います,
// 高いです, 静かです); alle anderen Formen tippt man selbst.
// Loaded as a plain <script> (browser globals) and imported in drill.test.mjs (Node).

// Eigener Name statt `conjugate` (TDZ, siehe cloze.js) und statt `conjugateFn` (den
// deklariert cloze.js schon im gemeinsamen Script-Scope). <script src="drill.js"> muss
// in index.html NACH conjugate.js stehen.
const drillConjugate = (typeof module !== 'undefined' && module.exports)
  ? require('./conjugate.js')
  : conjugate;

// Hängt `suffix` an jede Schreibweise an: 速い／早い + です → 速いです／早いです.
function drillPlus(form, suffix) {
  const add = text => text.split('／').map(t => t + suffix).join('／');
  return { word: add(form.word), reading: add(form.reading) };
}

// Tauscht die Endung jeder Schreibweise: 買います, ます → ません ergibt 買いません.
function drillSwap(form, from, to) {
  const swap = text => text.split('／').map(t => t.slice(0, -from.length) + to).join('／');
  return { word: swap(form.word), reading: swap(form.reading) };
}

// row: Zeile in der Tabelle (bzw. Name der Zusatzform), col: 'einfach' | 'höflich' | null.
// variants: gleichwertige Antworten, die als richtig zählen, aber nicht angezeigt werden.
function drillField(key, row, col, form, variants = []) {
  return {
    key, row, col,
    label: col ? `${col} · ${row}` : row,
    word: form.word, reading: form.reading,
    variants,
  };
}

function drillVerb(c, byLabel) {
  const dict = c.forms[0];
  const masu = byLabel('ます-Form'), nai = byLabel('ない-Form');
  return {
    kind: c.kind, group: c.group,
    given: { word: masu.word, reading: masu.reading },
    fields: [
      drillField('plain',        'Gegenwart',        'einfach', dict),
      drillField('nai',          'Verneinung',       'einfach', nai),
      drillField('ta',           'Vergangenheit',    'einfach', byLabel('た-Form')),
      drillField('nakatta',      'Verg.-Verneinung', 'einfach', drillSwap(nai, 'ない', 'なかった')),
      drillField('masen',        'Verneinung',       'höflich', drillSwap(masu, 'ます', 'ません')),
      drillField('mashita',      'Vergangenheit',    'höflich', drillSwap(masu, 'ます', 'ました')),
      drillField('masendeshita', 'Verg.-Verneinung', 'höflich', drillSwap(masu, 'ます', 'ませんでした')),
      drillField('te',           'て-Form',          null,      byLabel('て-Form')),
      byLabel('ています-Form') && drillField('teimasu', 'ています-Form', null, byLabel('ています-Form')),
      drillField('tai',          'たい-Form',        null,      drillSwap(masu, 'ます', 'たい')),
      drillField('mashou',       'ましょう-Form',    null,      drillSwap(masu, 'ます', 'ましょう')),
    ].filter(Boolean),   // ある und いる haben keine ています-Form
  };
}

function drillIAdjective(c, byLabel) {
  const base = c.forms[0], adverb = byLabel('Adverb');
  const nai = byLabel('Verneinung'), ta = byLabel('Vergangenheit'), nakatta = byLabel('Verg.-Verneinung');
  return {
    kind: c.kind, group: c.group,
    given: drillPlus(base, 'です'),
    fields: [
      drillField('plain',         'Gegenwart',        'einfach', base),
      drillField('nai',           'Verneinung',       'einfach', nai),
      drillField('ta',            'Vergangenheit',    'einfach', ta),
      drillField('nakatta',       'Verg.-Verneinung', 'einfach', nakatta),
      drillField('politeNeg',     'Verneinung',       'höflich', drillPlus(nai, 'です'),
        [drillPlus(adverb, 'ありません')]),
      drillField('politePast',    'Vergangenheit',    'höflich', drillPlus(ta, 'です')),
      drillField('politeNegPast', 'Verg.-Verneinung', 'höflich', drillPlus(nakatta, 'です'),
        [drillPlus(adverb, 'ありませんでした')]),
      drillField('te',            'て-Form',          null,      byLabel('て-Form')),
      drillField('adverb',        'Adverb',           null,      adverb),
    ],
  };
}

function drillNaAdjective(c) {
  const stem = c.forms[0];
  const p = suffix => drillPlus(stem, suffix);
  return {
    kind: c.kind, group: c.group,
    given: p('です'),
    fields: [
      drillField('plain',         'Gegenwart',        'einfach', p('だ'), [stem]),
      drillField('nai',           'Verneinung',       'einfach', p('じゃない'), [p('ではない')]),
      drillField('ta',            'Vergangenheit',    'einfach', p('だった')),
      drillField('nakatta',       'Verg.-Verneinung', 'einfach', p('じゃなかった'), [p('ではなかった')]),
      drillField('politeNeg',     'Verneinung',       'höflich', p('じゃありません'),
        [p('ではありません'), p('じゃないです'), p('ではないです')]),
      drillField('politePast',    'Vergangenheit',    'höflich', p('でした')),
      drillField('politeNegPast', 'Verg.-Verneinung', 'höflich', p('じゃありませんでした'),
        [p('ではありませんでした'), p('じゃなかったです'), p('ではなかったです')]),
      drillField('te',            'て-Form',          null,      p('で')),
      drillField('adverb',        'Adverb',           null,      p('に')),
      drillField('na',            'vor Nomen',        null,      p('な')),
    ],
  };
}

// null: das Wort lässt sich nicht konjugieren (Nomen, Adverb, …).
function drillForms(item) {
  const c = drillConjugate(item.word, item.reading, item.pos);
  if (!c) return null;
  const byLabel = label => c.forms.find(f => f.label === label);
  if (c.kind === 'verb') return drillVerb(c, byLabel);
  if (c.kind === 'i-adj') return drillIAdjective(c, byLabel);
  return drillNaAdjective(c);
}

// NFKC zuerst: faltet Halbbreite (ｶｯﾃ → カッテ) und Vollbreite (！ → !, Leerzeichen) auf
// eine Form, wie sie Handy- und IME-Eingaben liefern. Dann Leerzeichen und Satzzeichen
// raus und Katakana → Hiragana: カッテ, かって、 und かって sind dieselbe Antwort.
function drillNormalize(text) {
  return text.normalize('NFKC').replace(/[\s。、.,!?]/g, '')
    .replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

// Richtig ist jede Schreibweise der Lösung oder einer Variante, als Kanji oder als Lesung.
function checkDrillAnswer(input, field) {
  const answer = drillNormalize(input || '');
  if (!answer) return false;
  return [field, ...field.variants].some(f =>
    [...f.word.split('／'), ...f.reading.split('／')].some(t => drillNormalize(t) === answer));
}

// Eine SRS-Lernkurve pro Wort und Form.
function drillSrsId(item, key) {
  return `${item.id}-drill-${key}`;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { drillForms, checkDrillAnswer, drillSrsId };
}
