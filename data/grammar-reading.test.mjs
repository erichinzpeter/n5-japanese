// One-off test (no framework per project rules): every cloze sentence that
// contains kanji must carry a kana `reading` so learners can read it, and the
// reading's gap count must match the text (otherwise the furigana line desyncs).
import { readFileSync } from 'node:fs';

const GRAMMAR = new Function(readFileSync(new URL('./grammar.js', import.meta.url), 'utf8') + '; return GRAMMAR;')();

const kanji = /[一-龯]/;
const kanaOnly = /^[぀-ゟ゠-ヿー、。＿ ]+$/;  // hiragana, katakana, punctuation, gap
const gaps = s => (s.match(/＿/g) || []).length;

let failures = 0;
const fail = m => { failures++; console.log('FAIL ' + m); };

let items = 0;
for (const g of GRAMMAR) {
  for (const it of g.cloze.items) {
    items++;
    if (kanji.test(it.text) && !it.reading) fail(`${g.id} "${it.text}": kanji sentence has no reading`);
    if (!it.reading) continue;
    if (!kanaOnly.test(it.reading)) fail(`${g.id} "${it.text}": reading "${it.reading}" is not kana-only`);
    if (gaps(it.text) !== gaps(it.reading)) fail(`${g.id} "${it.text}": gap count differs from reading`);
  }
}

console.log(failures === 0 ? `PASS (${items} cloze items checked)` : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
