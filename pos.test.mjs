// One-off test (no framework per project rules): posCategory must bucket every
// vocab/basics `pos` string into exactly one deck category.
import { readFileSync } from 'node:fs';
const posCategory = new Function(
  readFileSync(new URL('./pos.js', import.meta.url), 'utf8') + '; return posCategory;'
)();

let failures = 0;
function check(input, expected) {
  const got = posCategory(input);
  if (got !== expected) {
    console.error(`FAIL: posCategory(${JSON.stringify(input)}) = ${got}, expected ${expected}`);
    failures++;
  } else {
    console.log(`ok: ${JSON.stringify(input)} -> ${got}`);
  }
}

check('Nomen', 'nomen');
check('Nomen/Adverb', 'nomen');
check('Verb (Godan, く)', 'verben');
check('Verb (Godan, る)*', 'verben');
check('Verb (Ichidan)', 'verben');
check('Verb (Gruppe 1) / Adjektiv', 'verben'); // Verb wins over Adjektiv
check('i-Adjektiv', 'adjektive');
check('i-Adjektiv (unregelmäßig)', 'adjektive');
check('na-Adjektiv', 'adjektive');
check('Adjektiv-i', 'adjektive');
check('na-Adjektiv/Adverb', 'adjektive');
check('Ausdruck', 'sonstiges');
check('Adverb', 'sonstiges');
check('Fragewort', 'sonstiges');
check('Partikel', 'sonstiges');
check('Konjunktion', 'sonstiges');
check(undefined, 'sonstiges');

if (failures) { console.error(`\n${failures} test(s) failed`); process.exit(1); }
console.log('\nAll pos tests passed');
