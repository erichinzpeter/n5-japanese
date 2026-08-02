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

function blankAt(text, index, length) {
  return text.slice(0, index) + GAP + text.slice(index + length);
}

// Die Lesungszeile stützt den Rest des Satzes; ungelückt würde sie die Antwort
// verraten. Ist die Form dort nicht auffindbar, entfällt die Zeile ganz.
function blankReading(readingLine, formReading) {
  if (!readingLine || !formReading) return null;
  const at = readingLine.indexOf(formReading);
  if (at < 0) return null;
  return blankAt(readingLine, at, formReading.length);
}

const KANJI_CHAR = /[㐀-鿿]/;

// Ein einzelnes Kanji steckt oft in einem längeren Wort (車 in 電車). Steht direkt
// daneben ein weiteres Kanji, würde die Lücke ein anderes Wort zerschneiden.
function isCleanHit(sentence, at, word) {
  if (word.length > 1) return true;
  const before = sentence[at - 1] || '';
  const after = sentence[at + word.length] || '';
  return !KANJI_CHAR.test(before) && !KANJI_CHAR.test(after);
}

// null heißt: keine brauchbare Lücke — die Karte wird normal gerendert.
function buildCloze(item, type) {
  const sentences = type === 'kanji' ? (item.sentences || []) : (item.examples || []);
  const forms = surfaceForms(item, type);
  for (const sentence of sentences) {
    for (const form of forms) {
      const at = sentence.jp.indexOf(form.word);
      if (at < 0 || !isCleanHit(sentence.jp, at, form.word)) continue;
      const reading = blankReading(sentence.reading, form.reading);
      return {
        text: blankAt(sentence.jp, at, form.word.length),
        reading,
        answer: form.word,
        answerReading: reading ? form.reading : null,
        de: sentence.de,
      };
    }
  }
  return null;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { surfaceForms, buildCloze };
}
