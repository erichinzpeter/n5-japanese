// One-off test (no framework per project rules): every VOCAB entry must carry
// a valid difficulty level, and the easy pool must be large enough for MC.
import { readFileSync } from 'node:fs';

const VOCAB  = new Function(readFileSync(new URL('./vocab.js',  import.meta.url), 'utf8') + '; return VOCAB;')();
const BASICS = new Function(readFileSync(new URL('./basics.js', import.meta.url), 'utf8') + '; return BASICS;')();

let failures = 0;
const fail = m => { failures++; console.log('FAIL ' + m); };

for (const v of VOCAB) {
  if (v.level !== 'easy' && v.level !== 'adv') fail(`${v.id} ${v.word}: level="${v.level}"`);
}
const easy = VOCAB.filter(v => v.level === 'easy');
if (easy.length < 1) fail('no easy vocab');
if (easy.length + BASICS.length < 4) fail('easy MC pool < 4 (correct + 3 distractors impossible)');

if (VOCAB.length <= 270) fail(`VOCAB count ${VOCAB.length} not > 270 (new words missing)`);
const kanaOnly = /^[぀-ヿ ー/／ａ-ｚＡ-Ｚ、。]+$/;  // "/" allows alt-reading entries like "いえ / うち"
for (const v of VOCAB) {
  if (!kanaOnly.test(v.reading)) fail(`${v.id} ${v.word}: reading "${v.reading}" is not kana`);
}

console.log(failures === 0 ? `PASS (${VOCAB.length} vocab, ${easy.length} easy)` : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
