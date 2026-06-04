// Pure, DOM-free Japanese conjugation engine.
//
// conjugate(word, reading, pos) computes the standard N5 conjugation forms from
// a dictionary surface form, its kana reading, and a part-of-speech string from
// data/vocab.js. Returns null for non-conjugable pos.
//
// Transforms apply in parallel to `word` and `reading`: the trailing kana is the
// okurigana, so slicing the last character and appending a suffix works for both
// kanji+okurigana words and kana-only words. Irregulars (来る) need a separate
// reading transform because the kanji hides a vowel change.

// final u-row kana -> i-row (ます stem) and a-row (ない stem)
const GODAN_I = { 'う':'い', 'く':'き', 'ぐ':'ぎ', 'す':'し', 'つ':'ち', 'ぬ':'に', 'ぶ':'び', 'む':'み', 'る':'り' };
const GODAN_A = { 'う':'わ', 'く':'か', 'ぐ':'が', 'す':'さ', 'つ':'た', 'ぬ':'な', 'ぶ':'ば', 'む':'ま', 'る':'ら' };
// final u-row kana -> て-form / た-form stem (euphonic change, onbin)
const GODAN_TE = { 'う':'って', 'つ':'って', 'る':'って', 'む':'んで', 'ぶ':'んで', 'ぬ':'んで', 'く':'いて', 'ぐ':'いで', 'す':'して' };
const GODAN_TA = { 'う':'った', 'つ':'った', 'る':'った', 'む':'んだ', 'ぶ':'んだ', 'ぬ':'んだ', 'く':'いた', 'ぐ':'いだ', 'す':'した' };

function conjugate(word, reading, pos) {
  if (pos.includes('Verb')) return conjugateVerb(word, reading, pos);
  // na before i: "na-Adjektiv" must not be caught by an "Adjektiv" check, and
  // "i-Adjektiv" is a distinct prefix.
  if (pos.includes('na-Adjektiv')) return conjugateNaAdjective(word, reading);
  if (pos.includes('i-Adjektiv')) return conjugateIAdjective(word, reading, pos);
  return null;
}

function conjugateVerb(word, reading, pos) {
  const dict = { label: 'Wörterbuchform', word, reading };

  // する and compound する-verbs (勉強する): conjugate the trailing する.
  if (pos.includes('する-Verb') || (word.endsWith('する') && reading.endsWith('する'))) {
    const w = word.slice(0, -2), r = reading.slice(0, -2);
    return {
      kind: 'verb', group: 3,
      forms: [
        dict,
        { label: 'ます-Form', word: w + 'します',  reading: r + 'します' },
        { label: 'て-Form',   word: w + 'して',    reading: r + 'して' },
        { label: 'た-Form',   word: w + 'した',    reading: r + 'した' },
        { label: 'ない-Form', word: w + 'しない',  reading: r + 'しない' },
      ],
    };
  }

  // 来る: word keeps the 来 kanji, reading changes the stem vowel.
  if (reading === 'くる') {
    return {
      kind: 'verb', group: 3,
      forms: [
        dict,
        { label: 'ます-Form', word: '来ます', reading: 'きます' },
        { label: 'て-Form',   word: '来て',   reading: 'きて' },
        { label: 'た-Form',   word: '来た',   reading: 'きた' },
        { label: 'ない-Form', word: '来ない', reading: 'こない' },
      ],
    };
  }

  if (pos.includes('Ichidan')) {
    const apply = s => ({ word: word.slice(0, -1) + s, reading: reading.slice(0, -1) + s });
    return {
      kind: 'verb', group: 2,
      forms: [
        dict,
        { label: 'ます-Form', ...apply('ます') },
        { label: 'て-Form',   ...apply('て') },
        { label: 'た-Form',   ...apply('た') },
        { label: 'ない-Form', ...apply('ない') },
      ],
    };
  }

  // Godan. Transform keys off the final kana of the reading (always u-row kana),
  // applied in parallel to word and reading.
  const k = reading.slice(-1);
  const wStem = word.slice(0, -1), rStem = reading.slice(0, -1);

  // 行く is the lone te/ta irregular among Godan く verbs: 行って, not 行いて.
  const isIku = reading === 'いく';
  const te = isIku ? 'って' : GODAN_TE[k];
  const ta = isIku ? 'った' : GODAN_TA[k];

  return {
    kind: 'verb', group: 1,
    forms: [
      dict,
      { label: 'ます-Form', word: wStem + GODAN_I[k] + 'ます', reading: rStem + GODAN_I[k] + 'ます' },
      { label: 'て-Form',   word: wStem + te,                  reading: rStem + te },
      { label: 'た-Form',   word: wStem + ta,                  reading: rStem + ta },
      { label: 'ない-Form', word: wStem + GODAN_A[k] + 'ない', reading: rStem + GODAN_A[k] + 'ない' },
    ],
  };
}

function conjugateIAdjective(word, reading, pos) {
  // いい / 良い conjugates on a fixed よ-stem (よくない, よかった, …), independent of which
  // spelling the entry stores — including the display-pair entry "いい / 良い".
  const isIi = pos.includes('unregelmäßig') || word === 'いい' || word === '良い' || reading === 'いい';
  const wStem = isIi ? 'よ' : word.slice(0, -1);
  const rStem = isIi ? 'よ' : reading.slice(0, -1);
  const f = (label, suffix) => ({ label, word: wStem + suffix, reading: rStem + suffix });

  return {
    kind: 'i-adj', group: null,
    forms: [
      { label: 'Grundform', word, reading },
      f('Verneinung',       'くない'),
      f('Vergangenheit',    'かった'),
      f('Verg.-Verneinung', 'くなかった'),
      f('て-Form',          'くて'),
      f('Adverb',           'く'),
    ],
  };
}

function conjugateNaAdjective(word, reading) {
  // na-Adjektiv entries store the stem without な; suffixes attach to the stem.
  const f = (label, suffix) => ({ label, word: word + suffix, reading: reading + suffix });
  return {
    kind: 'na-adj', group: null,
    forms: [
      { label: 'Grundform', word, reading },
      f('Verneinung',       'じゃない'),
      f('Vergangenheit',    'だった'),
      f('Verg.-Verneinung', 'じゃなかった'),
      f('て-Form',          'で'),
    ],
  };
}

if (typeof module !== 'undefined' && module.exports) module.exports = conjugate;
