'use strict';

// Baut aus dem Beispielsatz einer Karte einen Lückensatz für die Wiedervorlage.
// Das Ergebnis hat dieselbe Form wie ein GRAMMAR-Cloze-Item, damit
// renderClozeText() in app.js unverändert damit arbeitet.
// Loaded as a plain <script> (browser globals) and imported in cloze.test.mjs (Node).

const conjugateFn = (typeof module !== 'undefined' && module.exports)
  ? require('./conjugate.js')
  : conjugate;

const GAP = '＿';

// Oberflächenformen, in denen das Wort im Satz stehen kann — längste zuerst,
// damit 読みます vor 読み greift und die Lücke nicht mitten im Wort landet.
function surfaceForms(item, type) {
  if (type === 'kanji') return [{ word: item.char, reading: null }];

  const candidates = [{ word: item.word, reading: item.reading }];
  const conjugated = conjugateFn(item.word, item.reading, item.pos);
  if (conjugated && conjugated.forms) {
    for (const form of conjugated.forms) {
      candidates.push({ word: form.word, reading: form.reading });
      // Sätze stehen oft in der Vergangenheit (借りました) oder Verneinung
      // (動きません) — beide beginnen mit dem ます-Stamm.
      if (form.label === 'ます-Form' && form.word.endsWith('ます')) {
        candidates.push({ word: form.word.slice(0, -2), reading: form.reading.slice(0, -2) });
      }
    }
  }

  const seen = new Set();
  const unique = [];
  for (const candidate of candidates) {
    if (!candidate.word || seen.has(candidate.word)) continue;
    seen.add(candidate.word);
    unique.push(candidate);
  }
  unique.sort((a, b) => b.word.length - a.word.length);
  return unique;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { surfaceForms };
}
