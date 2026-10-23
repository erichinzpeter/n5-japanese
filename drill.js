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
// Godan-Tabellen aus conjugate.js (im Browser globale Konstanten desselben Script-Scopes).
const drillGodan = (typeof module !== 'undefined' && module.exports)
  ? require('./conjugate.js').GODAN
  : { I: GODAN_I, A: GODAN_A };

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
function drillFirst(text) {
  return text.split('／')[0];
}

// rule: Bildungsweg ohne Fuß; der Fuß „ · Grundform → Lösung“ kommt hier dran.
function drillField(key, row, col, form, variants = [], rule = '', base = null) {
  return {
    key, row, col,
    label: col ? `${col} · ${row}` : row,
    word: form.word, reading: form.reading,
    variants,
    rule: base ? `${rule} · ${drillFirst(base.word)} → ${drillFirst(form.word)}` : rule,
  };
}

// Regeln, die für alle Verbgruppen gleich sind.
const DRILL_VERB_COMMON_RULES = {
  nakatta: 'ない-Form, ない → なかった',
  masen: 'ます → ません',
  mashita: 'ます → ました',
  masendeshita: 'ます → ませんでした',
  teimasu: 'て-Form + います',
  tai: 'ます-Stamm + たい',
  mashou: 'ます → ましょう',
};
const DRILL_GODAN_TE_HINT = {
  'う': 'う・つ・る → って', 'つ': 'う・つ・る → って', 'る': 'う・つ・る → って',
  'む': 'む・ぶ・ぬ → んで', 'ぶ': 'む・ぶ・ぬ → んで', 'ぬ': 'む・ぶ・ぬ → んで',
  'く': 'く → いて', 'ぐ': 'ぐ → いで', 'す': 'す → して',
};
const DRILL_GODAN_TA_HINT = {
  'う': 'う・つ・る → った', 'つ': 'う・つ・る → った', 'る': 'う・つ・る → った',
  'む': 'む・ぶ・ぬ → んだ', 'ぶ': 'む・ぶ・ぬ → んだ', 'ぬ': 'む・ぶ・ぬ → んだ',
  'く': 'く → いた', 'ぐ': 'ぐ → いだ', 'す': 'す → した',
};
const DRILL_I_ROW = 'いきしちにひみりぎじびぴ';
const DRILL_E_ROW = 'えけせてねへめれげぜべぺ';

// Bildungsweg eines Verbs. ctx: { group, reading (erste Lesung), word (erste Schreibweise) }.
function drillVerbRule(key, ctx) {
  const { group, reading, word } = ctx;
  if (group === 3) {
    if (reading.endsWith('する')) {
      const t = { plain: 'unregelmäßig: します → する', nai: 'unregelmäßig: する → しない', ta: 'する → した', te: 'する → して' }[key];
      if (t) return t;
    } else {
      const t = { plain: 'unregelmäßig: きます → くる', nai: 'Vokal wechselt: くる → こない', ta: 'くる → きた', te: 'くる → きて' }[key];
      if (t) return t;
    }
  } else if (group === 2) {
    const t = { plain: 'ます weg + る', nai: 'る weg + ない', ta: 'る weg + た', te: 'る weg + て' }[key];
    if (t) return t;
  } else {
    const k = reading.slice(-1);
    const iku = reading === 'いく';
    switch (key) {
      case 'plain': return `ます-Stamm: i-Laut → u-Laut (${drillGodan.I[k]} → ${k})`;
      case 'nai':
        if (reading === 'ある') return 'Ausnahme: ある → ない';
        return k === 'う' ? 'う → わない (nicht あない)' : `u-Laut → a-Laut + ない (${k} → ${drillGodan.A[k]}ない)`;
      case 'ta': return iku ? `Ausnahme: ${word} → ${word.slice(0, -1)}った (nicht ${word.slice(0, -1)}いた)` : DRILL_GODAN_TA_HINT[k];
      case 'te': return iku ? `Ausnahme: ${word} → ${word.slice(0, -1)}って (nicht ${word.slice(0, -1)}いて)` : DRILL_GODAN_TE_HINT[k];
    }
  }
  return DRILL_VERB_COMMON_RULES[key];
}

// Gruppen-Erklärung eines Verbs (vor dem Tippen).
function drillVerbNote(c, item) {
  const reading = drillFirst(item.reading);
  let note;
  if (c.group === 3) {
    note = reading.endsWith('する')
      ? 'Gruppe 3 (unregelmäßig): する und alle 〜する-Verben.'
      : 'Gruppe 3 (unregelmäßig): 来る wechselt den Vokal (き / こ).';
  } else if (c.group === 2) {
    note = 'Gruppe 2 (Ichidan): endet auf -iru/-eru – る fällt einfach weg.';
  } else if (reading.endsWith('る') && (DRILL_I_ROW + DRILL_E_ROW).includes(reading.slice(-2, -1))) {
    note = 'Gruppe 1 (Godan) – Ausnahme: endet auf -iru/-eru wie Gruppe 2, konjugiert aber wie Gruppe 1.';
  } else {
    note = `Gruppe 1 (Godan): der letzte u-Laut (${reading.slice(-1)}) wechselt die Reihe.`;
  }
  if (reading === 'ある') note += ' Ausnahme: verneint ない (nicht あらない).';
  if (reading === 'いく') note += ' Ausnahme: て/た-Form 行って / 行った.';
  return note;
}

function drillIsIi(item) {
  const w = drillFirst(item.word);
  return item.pos.includes('unregelmäßig') || w === 'いい' || w === '良い' || drillFirst(item.reading) === 'いい';
}

const DRILL_I_ADJ_RULES = {
  plain: 'です weg', nai: 'い → くない', ta: 'い → かった', nakatta: 'い → くなかった',
  politeNeg: 'くない + です', politePast: 'かった + です', politeNegPast: 'くなかった + です',
  te: 'い → くて', adverb: 'い → く',
};
const DRILL_NA_ADJ_RULES = {
  plain: 'です → だ', nai: 'Stamm + じゃない', ta: 'Stamm + だった', nakatta: 'Stamm + じゃなかった',
  politeNeg: 'Stamm + じゃありません', politePast: 'Stamm + でした',
  politeNegPast: 'Stamm + じゃありませんでした', te: 'Stamm + で', adverb: 'Stamm + に', na: 'Stamm + な',
};

function drillVerb(c, byLabel, item) {
  const dict = c.forms[0];
  const masu = byLabel('ます-Form'), nai = byLabel('ない-Form');
  const ctx = { group: c.group, reading: drillFirst(item.reading), word: drillFirst(dict.word) };
  // Grundform = die Form, auf der die Regel arbeitet.
  const baseFor = { plain: masu, masen: masu, mashita: masu, masendeshita: masu, mashou: masu, tai: masu,
    nakatta: nai, teimasu: byLabel('て-Form') };
  const f = (key, row, col, form) => drillField(key, row, col, form, [], drillVerbRule(key, ctx), baseFor[key] || dict);
  return {
    kind: c.kind, group: c.group,
    groupNote: drillVerbNote(c, item),
    given: { word: masu.word, reading: masu.reading },
    fields: [
      f('plain',        'Gegenwart',        'einfach', dict),
      f('nai',          'Verneinung',       'einfach', nai),
      f('ta',           'Vergangenheit',    'einfach', byLabel('た-Form')),
      f('nakatta',      'Verg.-Verneinung', 'einfach', drillSwap(nai, 'ない', 'なかった')),
      f('masen',        'Verneinung',       'höflich', drillSwap(masu, 'ます', 'ません')),
      f('mashita',      'Vergangenheit',    'höflich', drillSwap(masu, 'ます', 'ました')),
      f('masendeshita', 'Verg.-Verneinung', 'höflich', drillSwap(masu, 'ます', 'ませんでした')),
      f('te',           'て-Form',          null,      byLabel('て-Form')),
      byLabel('ています-Form') && f('teimasu', 'ています-Form', null, byLabel('ています-Form')),
      f('tai',          'たい-Form',        null,      drillSwap(masu, 'ます', 'たい')),
      f('mashou',       'ましょう-Form',    null,      drillSwap(masu, 'ます', 'ましょう')),
    ].filter(Boolean),   // ある und いる haben keine ています-Form
  };
}

function drillIAdjective(c, byLabel, item) {
  const base = c.forms[0], adverb = byLabel('Adverb');
  const nai = byLabel('Verneinung'), ta = byLabel('Vergangenheit'), nakatta = byLabel('Verg.-Verneinung');
  const isIi = drillIsIi(item);
  const prefix = isIi ? 'Ausnahme いい → よ: ' : '';
  const given = drillPlus(base, 'です');
  const baseFor = { plain: given, politeNeg: nai, politePast: ta, politeNegPast: nakatta };
  const f = (key, row, col, form, variants) => drillField(key, row, col, form, variants,
    key === 'plain' ? DRILL_I_ADJ_RULES.plain : prefix + DRILL_I_ADJ_RULES[key], baseFor[key] || base);
  return {
    kind: c.kind, group: c.group,
    groupNote: isIi
      ? 'i-Adjektiv – Ausnahme: いい konjugiert über よい (よくない, よかった).'
      : 'i-Adjektiv: い fällt weg, dann くない / かった / くて / く.',
    given: drillPlus(base, 'です'),
    fields: [
      f('plain',         'Gegenwart',        'einfach', base),
      f('nai',           'Verneinung',       'einfach', nai),
      f('ta',            'Vergangenheit',    'einfach', ta),
      f('nakatta',       'Verg.-Verneinung', 'einfach', nakatta),
      f('politeNeg',     'Verneinung',       'höflich', drillPlus(nai, 'です'),
        [drillPlus(adverb, 'ありません')]),
      f('politePast',    'Vergangenheit',    'höflich', drillPlus(ta, 'です')),
      f('politeNegPast', 'Verg.-Verneinung', 'höflich', drillPlus(nakatta, 'です'),
        [drillPlus(adverb, 'ありませんでした')]),
      f('te',            'て-Form',          null,      byLabel('て-Form')),
      f('adverb',        'Adverb',           null,      adverb),
    ],
  };
}

function drillNaAdjective(c) {
  const stem = c.forms[0];
  const p = suffix => drillPlus(stem, suffix);
  const f = (key, row, col, form, variants) =>
    drillField(key, row, col, form, variants, DRILL_NA_ADJ_RULES[key], key === 'plain' ? p('です') : stem);
  const iEnding = drillFirst(stem.reading).endsWith('い');
  return {
    kind: c.kind, group: c.group,
    groupNote: iEnding
      ? 'na-Adjektiv – Ausnahme: endet auf い, ist aber kein i-Adjektiv.'
      : 'na-Adjektiv: Stamm + じゃない / だった / で / に / な.',
    given: p('です'),
    fields: [
      f('plain',         'Gegenwart',        'einfach', p('だ'), [stem]),
      f('nai',           'Verneinung',       'einfach', p('じゃない'), [p('ではない')]),
      f('ta',            'Vergangenheit',    'einfach', p('だった')),
      f('nakatta',       'Verg.-Verneinung', 'einfach', p('じゃなかった'), [p('ではなかった')]),
      f('politeNeg',     'Verneinung',       'höflich', p('じゃありません'),
        [p('ではありません'), p('じゃないです'), p('ではないです')]),
      f('politePast',    'Vergangenheit',    'höflich', p('でした')),
      f('politeNegPast', 'Verg.-Verneinung', 'höflich', p('じゃありませんでした'),
        [p('ではありませんでした'), p('じゃなかったです'), p('ではなかったです')]),
      f('te',            'て-Form',          null,      p('で')),
      f('adverb',        'Adverb',           null,      p('に')),
      f('na',            'vor Nomen',        null,      p('な')),
    ],
  };
}

// null: das Wort lässt sich nicht konjugieren (Nomen, Adverb, …).
function drillForms(item) {
  const c = drillConjugate(item.word, item.reading, item.pos);
  if (!c) return null;
  const byLabel = label => c.forms.find(f => f.label === label);
  if (c.kind === 'verb') return drillVerb(c, byLabel, item);
  if (c.kind === 'i-adj') return drillIAdjective(c, byLabel, item);
  return drillNaAdjective(c);
}

// Kacheln im Startdialog: jede Kachel schaltet eine oder mehrere Drill-Felder.
const DRILL_FORM_GROUPS = {
  verb: [
    { id: 'plain',   label: 'Wörterbuchform', keys: ['plain'] },
    { id: 'nai',     label: 'ない',            keys: ['nai'] },
    { id: 'ta',      label: 'た',              keys: ['ta'] },
    { id: 'nakatta', label: 'なかった',        keys: ['nakatta'] },
    { id: 'polite',  label: 'ません · ました',  keys: ['masen', 'mashita', 'masendeshita'] },
    { id: 'te',      label: 'て',              keys: ['te'] },
    { id: 'teimasu', label: 'ています',        keys: ['teimasu'] },
    { id: 'tai',     label: 'たい',            keys: ['tai'] },
    { id: 'mashou',  label: 'ましょう',        keys: ['mashou'] },
  ],
  adj: [
    { id: 'plain',   label: 'Grundform',        keys: ['plain'] },
    { id: 'nai',     label: 'Verneinung',       keys: ['nai'] },
    { id: 'ta',      label: 'Vergangenheit',    keys: ['ta'] },
    { id: 'nakatta', label: 'Verg.-Verneinung', keys: ['nakatta'] },
    { id: 'polite',  label: 'höflich',          keys: ['politeNeg', 'politePast', 'politeNegPast'] },
    { id: 'te',      label: 'て / で',           keys: ['te'] },
    { id: 'adverb',  label: 'Adverb く / に',    keys: ['adverb'] },
    { id: 'na',      label: 'な vor Nomen',      keys: ['na'] },
  ],
};

// Wie drillForms, aber nur mit den Feldern der gewählten Gruppen. null/leer = alle.
// null: kein Feld übrig (Wort fällt aus dem Pool). full: alle Felder des Worts dabei.
function drillFormsFor(item, groupIds) {
  const forms = drillForms(item);
  if (!forms) return null;
  const groups = DRILL_FORM_GROUPS[forms.kind === 'verb' ? 'verb' : 'adj'];
  const picked = groupIds && groupIds.length ? groups.filter(g => groupIds.includes(g.id)) : groups;
  const keys = new Set(picked.flatMap(g => g.keys));
  const fields = forms.fields.filter(f => keys.has(f.key));
  if (!fields.length) return null;
  return { ...forms, fields, full: fields.length === forms.fields.length };
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
  module.exports = { drillForms, drillFormsFor, DRILL_FORM_GROUPS, checkDrillAnswer, drillSrsId };
}
