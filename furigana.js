'use strict';

// Findet die Lesung eines einzelnen Kanji in der Kana-Zeile eines Beispielsatzes.
// Wörterbuch-Lesungen als Teilstring zu suchen reicht dafür nicht: 学ぶ steht im Satz
// als まなんで, und ein mehrfach vorkommendes Zeichen hat mehrere Fundstellen. Statt
// dessen werden Satz und Kana-Zeile positionell ausgerichtet — die Kana im Satz sind
// Anker, was zwischen zwei Ankern liegt, ist die Lesung des Kanji-Blocks dazwischen.
// Loaded as a plain <script> (browser globals) and imported in furigana.test.mjs (Node).

// Nicht KANJI_CHAR: die pure Module teilen sich im Browser einen Script-Scope, und
// cloze.js hat diesen Namen bereits belegt — ein zweites const würde beide Dateien
// mit "already been declared" abschießen.
const KANJI_PATTERN = /[㐀-鿿]/;

// Stimmhafte Anlaute im Compound (三月 → さん+がつ) und ...
const RENDAKU = {
  か: 'が', き: 'ぎ', く: 'ぐ', け: 'げ', こ: 'ご',
  さ: 'ざ', し: 'じ', す: 'ず', せ: 'ぜ', そ: 'ぞ',
  た: 'だ', ち: 'ぢ', つ: 'づ', て: 'で', と: 'ど',
  は: 'ば', ひ: 'び', ふ: 'ぶ', へ: 'べ', ほ: 'ぼ',
};
const HANDAKU = { は: 'ぱ', ひ: 'ぴ', ふ: 'ぷ', へ: 'ぺ', ほ: 'ぽ' };

// Katakana im Satz steht in der Kana-Zeile als Hiragana (ドイツ → どいつ). Die Abbildung
// ist zeichenweise, Positionen in der umgeschriebenen Zeile gelten also unverändert
// für das Original.
function toHiragana(text) {
  return text.replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

// Zerlegt den Satz in abwechselnde Kanji- und Nicht-Kanji-Läufe.
function segments(jp) {
  const out = [];
  for (const ch of jp) {
    const isKanji = KANJI_PATTERN.test(ch);
    const last = out[out.length - 1];
    if (last && last.isKanji === isKanji) last.text += ch;
    else out.push({ text: ch, isKanji });
  }
  return out;
}

// Ein Kanji-Block deckt mindestens ein Kana pro Zeichen ab; alles darüber hinaus ist
// offen und wird durchprobiert. Der Deckel begrenzt nur die Laufzeit — mehr als eine
// Lösung heißt ohnehin "mehrdeutig".
const MAX_ALIGNMENTS = 8;

function alignments(segs, reading) {
  const found = [];
  (function walk(index, at, acc) {
    if (found.length > MAX_ALIGNMENTS) return;
    if (index === segs.length) {
      if (at === reading.length) found.push(acc.slice());
      return;
    }
    const seg = segs[index];
    if (!seg.isKanji) {
      const literal = toHiragana(seg.text);
      if (!reading.startsWith(literal, at)) return;
      walk(index + 1, at + literal.length, acc);
      return;
    }
    const remaining = segs.length - index - 1;
    const maxLength = reading.length - at - remaining;
    for (let length = seg.text.length; length <= maxLength; length++) {
      acc.push({ seg, at, reading: reading.slice(at, at + length) });
      walk(index + 1, at + length, acc);
      acc.pop();
    }
  })(0, 0, []);
  return found;
}

// Lautvarianten einer Wörterbuch-Lesung im Compound: 月 げつ → がつ (Rendaku),
// 学 がく → がっ vor stimmlosem Anlaut (Gemination).
function variants(reading) {
  const forms = new Set([reading]);
  const first = reading[0];
  if (RENDAKU[first]) forms.add(RENDAKU[first] + reading.slice(1));
  if (HANDAKU[first]) forms.add(HANDAKU[first] + reading.slice(1));
  const last = reading[reading.length - 1];
  if ('つちくき'.includes(last)) forms.add(reading.slice(0, -1) + 'っ');
  return forms;
}

// Steht das Zeichen in einem Block mehrerer Kanji (三月), muss dessen Lesung aufgeteilt
// werden. Die Nachbarzeichen belegen je mindestens ein Kana, und am Blockrand liegt die
// Spanne bündig — ohne diese Grenzen träfe な in みなみ ebenso wie das gesuchte みなみ.
function splitCompound(blockText, blockReading, charIndex, readings) {
  const before = charIndex;
  const after = blockText.length - charIndex - 1;
  const spans = new Set();
  for (const base of readings) {
    for (const form of variants(base)) {
      const lastStart = blockReading.length - after - form.length;
      for (let at = before; at <= lastStart; at++) {
        if (before === 0 && at !== 0) break;
        if (after === 0 && at + form.length !== blockReading.length) continue;
        if (blockReading.startsWith(form, at)) spans.add(`${at}:${form.length}`);
      }
    }
  }
  return spans.size === 1 ? [...spans][0] : null;
}

// null heißt: die Lesung des Zeichens ist in diesem Satz nicht eindeutig bestimmbar
// (mehrere gültige Ausrichtungen, oder ein Jukujikun wie 今日, das sich nicht auf seine
// Zeichen aufteilen lässt). Lieber keine Lücke als eine falsch gesetzte.
function readingSpan(jp, reading, char, item) {
  if (!jp || !reading || !jp.includes(char)) return null;
  const hiragana = toHiragana(reading);
  const readings = [...(item.on || []), ...(item.kun || [])].map(toHiragana);
  const spans = new Set();

  for (const alignment of alignments(segments(jp), hiragana)) {
    const block = alignment.find(part => part.seg.isKanji && part.seg.text.includes(char));
    if (!block) continue;
    if (block.seg.text === char) {
      spans.add(`${block.at}:${block.reading.length}`);
      continue;
    }
    const split = splitCompound(block.seg.text, block.reading, block.seg.text.indexOf(char), readings);
    if (!split) continue;
    const [at, length] = split.split(':').map(Number);
    spans.add(`${block.at + at}:${length}`);
  }

  if (spans.size !== 1) return null;
  const [at, length] = [...spans][0].split(':').map(Number);
  return { at, length };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { readingSpan };
}
