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
console.log(failures === 0 ? `PASS grammar examples (${GRAMMAR.length} patterns)` : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
