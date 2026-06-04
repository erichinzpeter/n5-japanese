import { readFileSync } from 'node:fs';
const GRAMMAR = new Function(
  readFileSync(new URL('./grammar.js', import.meta.url), 'utf8') + '; return GRAMMAR;'
)();
let failures = 0;
const kana = /^[぀-ヿ ー、。「」]+$/;  // hiragana/katakana + spaces + JP punctuation
for (const g of GRAMMAR) {
  if (!Array.isArray(g.examples) || g.examples.length < 8) {
    failures++; console.log(`FAIL ${g.id} ${g.pattern}: needs >=8 examples, has ${g.examples?.length ?? 0}`);
    continue;
  }
  for (const ex of g.examples) {
    if (!ex.jp || !ex.de) { failures++; console.log(`FAIL ${g.id}: example missing jp/de`); }
    if (!ex.reading || !kana.test(ex.reading)) { failures++; console.log(`FAIL ${g.id}: reading not kana "${ex.reading}"`); }
  }
}
const GAP = '＿';
for (const g of GRAMMAR) {
  const c = g.cloze;
  if (!c || !Array.isArray(c.items) || c.items.length < 3) {
    failures++; console.log(`FAIL ${g.id} ${g.pattern}: cloze.items needs >=3, has ${c?.items?.length ?? 0}`);
    continue;
  }
  if (!Array.isArray(c.distractors) || c.distractors.length < 3) {
    failures++; console.log(`FAIL ${g.id}: cloze.distractors needs >=3`);
  }
  for (const it of c.items) {
    if (!it.text || !it.answer || !it.de) { failures++; console.log(`FAIL ${g.id}: cloze item missing text/answer/de`); continue; }
    const gaps = it.text.split(GAP).length - 1;
    if (gaps !== 1) { failures++; console.log(`FAIL ${g.id}: item must have exactly one ${GAP}: "${it.text}"`); }
    const dis = it.distractors ?? c.distractors;
    if (!Array.isArray(dis) || dis.length < 3) { failures++; console.log(`FAIL ${g.id}: <3 effective distractors for "${it.text}"`); }
    if (dis.includes(it.answer)) { failures++; console.log(`FAIL ${g.id}: distractors contain answer "${it.answer}"`); }
  }
}
console.log(failures === 0 ? `PASS grammar examples (${GRAMMAR.length} patterns)` : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
