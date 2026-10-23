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
  // Zwei Schreibweisen in einem Eintrag (速い／早い, いい／良い): jede einzeln
  // konjugieren und die Formen wieder mit ／ zusammensetzen.
  if (word.includes('／')) return conjugateAlternatives(word, reading, pos);
  if (pos.includes('Verb')) return conjugateVerb(word, reading, pos);
  // na before i: "na-Adjektiv" must not be caught by an "Adjektiv" check, and
  // "i-Adjektiv" is a distinct prefix. data/basics.js schreibt "Adjektiv-na" / "Adjektiv-i".
  if (pos.includes('na-Adjektiv') || pos.includes('Adjektiv-na')) return conjugateNaAdjective(word, reading);
  if (pos.includes('i-Adjektiv') || pos.includes('Adjektiv-i')) return conjugateIAdjective(word, reading, pos);
  return null;
}

// Gleiche Formen werden zusammengelegt: いい／良い → よくない (nicht よくない／よくない).
// Fehlt eine Lesung pro Schreibweise (速い／早い → はやい), gilt die erste für alle.
function conjugateAlternatives(word, reading, pos) {
  const words = word.split('／');
  const readings = reading.split('／');
  const parts = words.map((w, i) => conjugate(w, readings[i] || readings[0], pos));
  if (parts.some(p => !p)) return null;
  const join = list => [...new Set(list)].join('／');
  return {
    ...parts[0],
    forms: parts[0].forms.map((f, i) => ({
      label: f.label,
      word: join(parts.map(p => p.forms[i].word)),
      reading: join(parts.map(p => p.forms[i].reading)),
    })),
  };
}

// ています-Form (Verlaufsform): て-Form + います, direkt hinter der て-Form. ある und いる
// bekommen keine: あっています heißt „stimmt / passt“, いています sagt niemand.
function conjugateVerb(word, reading, pos) {
  const c = conjugateVerbBase(word, reading, pos);
  if (reading === 'ある' || reading === 'いる') return c;
  const i = c.forms.findIndex(f => f.label === 'て-Form');
  const te = c.forms[i];
  c.forms.splice(i + 1, 0, { label: 'ています-Form', word: te.word + 'います', reading: te.reading + 'います' });
  return c;
}

function conjugateVerbBase(word, reading, pos) {
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

  // 来る und Komposita (持ってくる): nur das くる am Ende wird konjugiert. Steht 来 als
  // Kanji da, bleibt es stehen und nur die Lesung wechselt den Stammvokal.
  if (reading.endsWith('くる') && (reading === 'くる' || pos.includes('unregelmäßig'))) {
    const wPre = word.slice(0, -2), rPre = reading.slice(0, -2);
    const kanji = word.endsWith('来る');
    const f = (label, kanjiForm, kana) =>
      ({ label, word: wPre + (kanji ? kanjiForm : kana), reading: rPre + kana });
    return {
      kind: 'verb', group: 3,
      forms: [
        dict,
        f('ます-Form', '来ます', 'きます'),
        f('て-Form',   '来て',   'きて'),
        f('た-Form',   '来た',   'きた'),
        f('ない-Form', '来ない', 'こない'),
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

  // ある verneint ohne Stamm: ない, nicht あらない.
  const nai = reading === 'ある'
    ? { word: 'ない', reading: 'ない' }
    : { word: wStem + GODAN_A[k] + 'ない', reading: rStem + GODAN_A[k] + 'ない' };

  return {
    kind: 'verb', group: 1,
    forms: [
      dict,
      { label: 'ます-Form', word: wStem + GODAN_I[k] + 'ます', reading: rStem + GODAN_I[k] + 'ます' },
      { label: 'て-Form',   word: wStem + te,                  reading: rStem + te },
      { label: 'た-Form',   word: wStem + ta,                  reading: rStem + ta },
      { label: 'ない-Form', ...nai },
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
  // na-Adjektiv entries store the stem without な — bis auf ein paar Einträge (安全な,
  // 暇な, …). Das な gehört nicht zum Stamm und wird abgeschnitten.
  if (word.endsWith('な') && reading.endsWith('な')) {
    word = word.slice(0, -1);
    reading = reading.slice(0, -1);
  }
  const f = (label, suffix) => ({ label, word: word + suffix, reading: reading + suffix });
  return {
    kind: 'na-adj', group: null,
    forms: [
      { label: 'Grundform', word, reading },
      f('Verneinung',       'じゃない'),
      f('Vergangenheit',    'だった'),
      f('Verg.-Verneinung', 'じゃなかった'),
      f('て-Form',          'で'),
      f('Adverb',           'に'),
    ],
  };
}

// Nur die ます-Form. Der ます-Modus des Verben-Decks zeigt Verben in der höflichen
// Form statt in der Wörterbuchform und braucht genau diese eine Form.
function masuForm(item) {
  const c = conjugate(item.word, item.reading, item.pos);
  if (!c || c.kind !== 'verb') return null;
  return c.forms.find(f => f.label === 'ます-Form') || null;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = conjugate;
  module.exports.masuForm = masuForm;   // bestehende `require('./conjugate.js')`-Call-Sites bleiben intakt
}
