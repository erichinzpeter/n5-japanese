'use strict';

// Baut aus dem Beispielsatz einer Karte einen Lückensatz für die Wiedervorlage.
// Das Ergebnis hat dieselbe Form wie ein GRAMMAR-Cloze-Item, damit
// renderClozeText() in app.js unverändert damit arbeitet.
// Loaded as a plain <script> (browser globals) and imported in cloze.test.mjs (Node).

// `conjugateFn`, nicht `conjugate`: eine gleichnamige const würde sich beim Lesen
// von `conjugate` unten selbst referenzieren (TDZ) statt das globale conjugate()
// zu treffen. Im Browser-Zweig bindet das ans globale conjugate() aus
// conjugate.js — <script src="cloze.js"> muss in index.html deshalb NACH
// conjugate.js stehen; kein anderes pure Modul hat diese Kopplung.
const conjugateFn = (typeof module !== 'undefined' && module.exports)
  ? require('./conjugate.js')
  : conjugate;

const furigana = (typeof module !== 'undefined' && module.exports)
  ? require('./furigana.js')
  : { readingSpan, readingVariants };

const GAP = '＿';

// Oberflächenformen, in denen das Wort im Satz stehen kann — längste zuerst,
// damit 読みます vor 読み greift und die Lücke nicht mitten im Wort landet.
function surfaceForms(item) {
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
function isStandaloneHit(text, at, word) {
  if (word.length > 1) return true;
  const before = text[at - 1] || '';
  const after = text[at + word.length] || '';
  return !KANJI_CHAR.test(before) && !KANJI_CHAR.test(after);
}

// Ein Satz kann dieselbe Form mehrfach enthalten (天気 und alleinstehendes 気
// im selben Satz), und nur eine davon muss sauber sein.
function findOccurrences(text, word) {
  const indices = [];
  let from = 0;
  for (let at = text.indexOf(word, from); at >= 0; at = text.indexOf(word, from)) {
    indices.push(at);
    from = at + 1;
  }
  return indices;
}

function findCleanHit(sentences, forms) {
  for (const sentence of sentences) {
    for (const form of forms) {
      for (const at of findOccurrences(sentence.jp, form.word)) {
        if (isStandaloneHit(sentence.jp, at, form.word)) return { sentence, form, at };
      }
    }
  }
  return null;
}

// String.replace('＿', ...) in renderClozeText() löst nur die erste Lücke auf —
// ein Satz, der bereits eine enthält, würde den Ein-Lücken-Vertrag brechen.
function usableSentences(rawSentences) {
  return (rawSentences || []).filter(sentence => !sentence.jp.includes(GAP));
}

// Bei Vokabeln fehlt das Wort und der deutsche Satz stützt die Antwort. Die Lücke muss
// sauber sitzen, sonst würde sie ein anderes Wort im Satz zerschneiden.
function buildWordCloze(item) {
  const sentences = usableSentences(item.examples);
  const hit = findCleanHit(sentences, surfaceForms(item));
  if (!hit) return null;

  const { sentence, form, at } = hit;
  const reading = blankReading(sentence.reading, form.reading);
  return {
    gap: 'word',
    text: blankAt(sentence.jp, at, form.word.length),
    reading,
    answer: form.word,
    answerReading: reading ? form.reading : null,
    de: sentence.de,
  };
}

// Spiegelt kanjiReading() in app.js: die Lesung, die die Karte vorspricht und auf
// die hin sie gelernt wird.
function cardReading(item) {
  return item.speak || (item.kun || [])[0] || (item.on || [])[0] || '';
}

// 者 steht in 若い者 als もの und in 学者 als しゃ — beides richtig, aber gefragt
// gehört die Lesung, die auf der Karte steht. Im Satz erscheint sie oft nur als Stamm
// (読む → 読みます) oder lautlich angepasst (こと → 仕事 ごと), deshalb der Vergleich
// über Lautvarianten und Wortanfang statt auf Gleichheit.
function matchesCardReading(reading, item) {
  const primary = cardReading(item);
  if (!primary) return false;
  return [...furigana.readingVariants(primary)]
    .some(form => form.startsWith(reading) || reading.startsWith(form));
}

// Bei Kanji bleibt der Satz vollständig — wer das Zeichen nicht wusste, soll es
// wiedersehen, nicht aus dem Nichts schreiben. Gefragt ist die Lesung im Kontext.
// Ein zweites, ungelücktes Vorkommen des Zeichens würde die Antwort in der Kana-Zeile
// stehen lassen, deshalb zählt auch das in die Wahl des Satzes hinein.
function buildReadingCloze(item) {
  const candidates = [];
  for (const sentence of usableSentences(item.sentences)) {
    if (!sentence.reading || !sentence.jp.includes(item.char)) continue;
    const span = furigana.readingSpan(sentence.jp, sentence.reading, item.char, item);
    if (!span) continue;
    const answer = sentence.reading.slice(span.at, span.at + span.length);
    const isSingle = findOccurrences(sentence.jp, item.char).length === 1;
    candidates.push({
      sentence, span, answer,
      score: (matchesCardReading(answer, item) ? 2 : 0) + (isSingle ? 1 : 0),
    });
  }
  if (!candidates.length) return null;

  // Stabile Sortierung: bei gleichem Rang gewinnt der erste Beispielsatz.
  candidates.sort((a, b) => b.score - a.score);
  const { sentence, span, answer } = candidates[0];
  return {
    gap: 'reading',
    text: sentence.jp,
    reading: blankAt(sentence.reading, span.at, span.length),
    answer,
    de: sentence.de,
  };
}

// null heißt: keine brauchbare Lücke — die Karte wird normal gerendert.
function buildCloze(item, type) {
  return type === 'kanji' ? buildReadingCloze(item) : buildWordCloze(item);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { surfaceForms, buildCloze };
}
