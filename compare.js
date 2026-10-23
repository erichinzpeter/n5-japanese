'use strict';

// Vergleiche: Lückensätze für より / のほうが, 一番 und どちら. Baut aus einem Eintrag aus
// data/comparisons.js die Lücken passend zur Stufe. Geprüft wird mit checkDrillAnswer
// (drill.js) — die Lücken haben dasselbe Feldformat wie die Drill-Felder.
// Loaded as a plain <script> (browser globals) and imported in compare.test.mjs (Node).

const COMPARE_PATTERNS = {
  yori:    { label: 'より / のほうが', hint: 'より steht beim Vergleichsmaßstab („als B“), のほうが beim Favoriten.' },
  ichiban: { label: '一番',           hint: '〜の中で grenzt die Gruppe ein, 一番 steht direkt vor dem Adjektiv.' },
  dochira: { label: 'どちら',         hint: 'Gefragt wird mit どちらが, geantwortet mit のほうが.' },
  kute:    { label: '〜くて / 〜で',     hint: 'Verbinden: i-Adjektiv い → くて (いい → よくて), na-Adjektiv und Nomen + で.' },
  adverb:  { label: '〜く / 〜に',       hint: 'Vor einem Verb: i-Adjektiv い → く (いい → よく), na-Adjektiv + に.' },
  naru:    { label: '〜くなる / 〜になる', hint: 'Veränderung: i-Adjektiv い → くなる, na-Adjektiv und Nomen + になる.' },
  hougaii: { label: '〜たほうがいい / 〜ないほうがいい', hint: 'Rat: た-Form + ほうがいい. Rat dagegen: ない-Form + ほうがいい (nicht なかった).', form: 'Verbform' },
  koto:    { label: '〜たことがあります', hint: 'Erfahrung: た-Form + ことがあります. Noch nie: た-Form + ことがありません.', form: 'Verbform' },
  tari:    { label: '〜たり〜たりします', hint: 'Beispielhafte Aufzählung: jede Handlung in der た-Form + り (飲んだり), am Ende します.', form: 'Verbform' },
  bakari:  { label: '〜たばかりです', hint: 'Gerade eben: た-Form + ばかりです.', form: 'Verbform' },
  order:   { label: '前に / てから / 後で', hint: 'Wörterbuchform + 前に („bevor“), て-Form + から („erst …, dann“), た-Form + 後で („nachdem“).', form: 'Verbform' },
  teiru:   { label: '〜ています', hint: 'Gerade dabei oder Dauerzustand: て-Form + います (住んでいます, 働いています).', form: 'Verbform' },
  temoii:  { label: '〜てもいい / 〜てはいけません', hint: 'Erlaubnis: て-Form + もいいです. Verbot: て-Form + はいけません.', form: 'Verbform' },
  naide:   { label: '〜ないでください', hint: 'Bitte nicht: ない-Form + でください.', form: 'Verbform' },
  kleidung: { label: '着る / はく / かぶる / かける', hint: 'Oberkörper (シャツ, セーター, コート): 着る. Hose, Rock, Schuhe, Socken: はく. Hut, Mütze: かぶる. Brille: かける. Ausziehen: 脱ぐ.', form: 'Kleidungsstück' },
};

// {…} = Muster-Lücke (beide Stufen), {{…}} = Form-Lücke (Adjektiv/Verb, nur Stufe 2), | trennt
// gleichwertige Antworten — die erste ist die angezeigte Lösung. {{Stamm^Endung}} = Adjektiv-
// Lücke, die in Stufe 1 nur die Endung abfragt (Deck „Adjektive im Satz“, ohne |-Varianten).
const COMPARE_GAP = /\{\{([^}]+)\}\}|\{([^}]+)\}/g;

function parseCompareText(text) {
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(COMPARE_GAP)) {
    if (m.index > last) parts.push({ text: text.slice(last, m.index) });
    if (m[1] && m[1].includes('^')) {
      const [stem, ending] = m[1].split('^');
      parts.push({ kind: 'adj', answers: [stem + ending], stem, ending });
    } else parts.push({ kind: m[1] ? 'adj' : 'pattern', answers: (m[1] || m[2]).split('|') });
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
}

// Neu oder Box 1–2: nur die Muster-Lücken. Ab Box 3 fehlt auch die Form (Adjektiv, Verb).
function compareStage(srsEntry) {
  return srsEntry && srsEntry.box >= 3 ? 2 : 1;
}

// lines: pro Zeile eine Folge aus { text } und { gap: Index in gaps }. jp und reading
// tragen dieselben Lücken an denselben Stellen (prüft compare.test.mjs für alle Daten).
function compareCard(entry, stage) {
  const gaps = [];
  const lines = entry.lines.map(line => {
    const readingParts = parseCompareText(line.reading);
    return parseCompareText(line.jp).flatMap((p, i) => {
      if (p.text !== undefined) return [p];
      const rp = readingParts[i];
      if (p.stem !== undefined) {
        const word = stage < 2 ? p.ending : p.answers[0];
        gaps.push({
          key: `g${gaps.length}`, kind: stage < 2 ? 'ending' : 'adj',
          label: stage < 2 ? p.ending : '〜' + p.ending,
          word, reading: stage < 2 ? rp.ending : rp.answers[0], variants: [],
        });
        return stage < 2 ? [{ text: p.stem }, { gap: gaps.length - 1 }] : [{ gap: gaps.length - 1 }];
      }
      if (p.kind === 'adj' && stage < 2) return [{ text: p.answers[0] }];
      const alts = p.answers.map((word, k) => ({ word, reading: rp.answers[k] }));
      // のほうが schreiben viele (und manche IMEs) als の方が — gilt ebenfalls als richtig.
      if (alts[0].word === 'のほうが') alts.push({ word: 'の方が', reading: 'のほうが' });
      gaps.push({
        key: `g${gaps.length}`, kind: p.kind,
        label: p.kind === 'adj' ? (COMPARE_PATTERNS[entry.pattern].form || 'Adjektiv') : alts[0].word,
        word: alts[0].word, reading: alts[0].reading, variants: alts.slice(1),
      });
      return [{ gap: gaps.length - 1 }];
    });
  });
  return { id: entry.id, pattern: entry.pattern, de: entry.de, stage, lines, gaps };
}

// Vollständige Zeilen (Kanji und Lesung) ohne Marker, für Lösung und Aussprache.
function compareFull(entry) {
  const fill = text => text.replace(COMPARE_GAP, (_, adj, pat) => (adj || pat).replace('^', '').split('|')[0]);
  return entry.lines.map(l => ({ word: fill(l.jp), reading: fill(l.reading) }));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPARE_PATTERNS, parseCompareText, compareStage, compareCard, compareFull };
}
