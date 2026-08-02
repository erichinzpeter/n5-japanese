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
  // Dictionary form first — sonst gewinnt bei na-Adjektiven oft eine zufällig
  // längere Flexionsform (きれいで passt in きれいです hinein, meint aber etwas anderes).
  unique.sort((a, b) => {
    if (a.word === item.word) return -1;
    if (b.word === item.word) return 1;
    return b.word.length - a.word.length;
  });
  return unique;
}

function blankAt(text, index, length) {
  return text.slice(0, index) + GAP + text.slice(index + length);
}

// Die Lesungszeile stützt den Rest des Satzes; ungelückt würde sie die Antwort
// verraten. Kommt die Form mehrfach vor (天気/気 teilen sich das き), ist die
// Position nicht mehr eindeutig — dann entfällt die Zeile ganz statt falsch zu lücken.
function blankReading(readingLine, formReading) {
  if (!readingLine || !formReading) return null;
  const hits = findOccurrences(readingLine, formReading);
  if (hits.length !== 1) return null;
  return blankAt(readingLine, hits[0], formReading.length);
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

// Alle Fundstellen von word in text — ein Satz kann dieselbe Form mehrfach
// enthalten (天気 und alleinstehendes 気 im selben Satz), und nur eine davon
// muss sauber sein.
function findOccurrences(text, word) {
  const indices = [];
  let from = 0;
  for (let at = text.indexOf(word, from); at >= 0; at = text.indexOf(word, from)) {
    indices.push(at);
    from = at + 1;
  }
  return indices;
}

// Erste saubere Fundstelle über alle Sätze und Formen hinweg.
function findCleanHit(sentences, forms) {
  for (const sentence of sentences) {
    for (const form of forms) {
      for (const at of findOccurrences(sentence.jp, form.word)) {
        if (isCleanHit(sentence.jp, at, form.word)) return { sentence, form, at };
      }
    }
  }
  return null;
}

// Erste Fundstelle überhaupt, unabhängig von isCleanHit.
function findAnyHit(sentences, forms) {
  for (const sentence of sentences) {
    for (const form of forms) {
      const at = sentence.jp.indexOf(form.word);
      if (at >= 0) return { sentence, form, at };
    }
  }
  return null;
}

// Kanji-Karten kennen keine Form-Lesung-Paarung. Nur bei genau einem Treffer ist
// klar, welche Stelle der Lesungszeile zum Zeichen gehört.
function kanjiReadingHit(readingLine, item) {
  if (!readingLine) return null;
  const readings = [...(item.on || []), ...(item.kun || [])];
  const hits = readings.filter(reading => readingLine.includes(reading));
  return hits.length === 1 ? hits[0] : null;
}

// null heißt: keine brauchbare Lücke — die Karte wird normal gerendert.
// Bei Vokabeln muss die Lücke sauber sein (sonst würde ein anderes Wort im Satz
// zerschnitten). Bei Kanji-Karten ist das Zeichen selbst die gefragte Einheit —
// ein Compound-Treffer ist dort eine legitime Frage und dient als Rückfalloption.
function buildCloze(item, type) {
  const rawSentences = type === 'kanji' ? (item.sentences || []) : (item.examples || []);
  // String.replace('＿', ...) in renderClozeText() resolves only the first gap —
  // a sentence that already contains one would break the single-gap contract.
  const sentences = rawSentences.filter(sentence => !sentence.jp.includes(GAP));
  const forms = surfaceForms(item, type);
  const hit = findCleanHit(sentences, forms) || (type === 'kanji' ? findAnyHit(sentences, forms) : null);
  if (!hit) return null;

  const { sentence, form, at } = hit;
  // Kommt das Zeichen im Satz mehrfach vor (学 in 大学 UND in 学んでいます — mit
  // zwei verschiedenen Lesungen), ist ohne Furigana-Zuordnung nicht entscheidbar,
  // welche Lesung zur gelückten Stelle gehört. Dann lieber keine Lesungszeile.
  const formReading = type === 'kanji'
    ? (findOccurrences(sentence.jp, form.word).length === 1 ? kanjiReadingHit(sentence.reading, item) : null)
    : form.reading;
  const reading = blankReading(sentence.reading, formReading);
  return {
    text: blankAt(sentence.jp, at, form.word.length),
    reading,
    answer: form.word,
    answerReading: reading ? formReading : null,
    de: sentence.de,
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { surfaceForms, buildCloze };
}
