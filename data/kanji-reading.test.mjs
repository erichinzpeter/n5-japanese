// One-off test (no framework per project rules): the spoken reading for a
// kanji must be the most-used N5 reading, in kana, never the raw character.
import { readFileSync } from 'node:fs';

const KANJI = new Function(readFileSync(new URL('./kanji.js', import.meta.url), 'utf8') + '; return KANJI;')();

// Mirror of app.js getJapaneseText() kanji branch.
const kanjiReading = k => k.speak || k.kun?.[0] || k.on?.[0];

let failures = 0;
const expect = (char, want) => {
  const got = kanjiReading(KANJI.find(k => k.char === char));
  if (got !== want) { failures++; console.log(`FAIL ${char}: spoken "${got}", expected "${want}"`); }
};

// On-dominant N5 kanji whose kun[0] fallback was a non-N5 verb.
expect('学', 'がく');
expect('語', 'ご');
expect('生', 'せい');

// Every spoken reading must be kana only — never a kanji character.
const kanaOnly = /^[぀-ヿー]+$/;
for (const k of KANJI) {
  const r = kanjiReading(k);
  if (!r || !kanaOnly.test(r)) { failures++; console.log(`FAIL ${k.char}: reading "${r}" is not clean kana`); }
}

console.log(failures === 0 ? `PASS (${KANJI.length} kanji)` : `${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
