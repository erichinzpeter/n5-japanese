// One-off test (no framework per project rules): jedes Verb im Verben-Deck muss eine
// ます-Form haben, und für deren Lesung muss ein vorproduzierter Clip existieren — der
// ます-Modus spielt diese Dateien direkt, eine fehlende Datei ist eine stumme Karte.
import { readFileSync } from 'node:fs';

const load = (rel, ret) => new Function(
  readFileSync(new URL(rel, import.meta.url), 'utf8') + `; return ${ret};`
)();

const VOCAB       = load('./vocab.js', 'VOCAB');
const BASICS      = load('./basics.js', 'BASICS');
const AUDIO_MAP   = load('./audio-map.js', 'AUDIO_MAP');
const posCategory = load('../pos.js', 'posCategory');
const masuForm    = load('../conjugate.js', 'masuForm');

let failures = 0;
const fail = m => { failures++; console.log('FAIL ' + m); };

const verbs = [...VOCAB, ...BASICS].filter(v => posCategory(v.pos) === 'verben');
if (verbs.length < 150) fail(`nur ${verbs.length} Verben gefunden — Kategorie-Filter kaputt?`);

for (const v of verbs) {
  const m = masuForm(v);
  if (!m) { fail(`${v.id} ${v.word} (${v.pos}): keine ます-Form`); continue; }
  if (!m.word.endsWith('ます')) fail(`${v.id} ${v.word}: ます-Form "${m.word}" endet nicht auf ます`);
  if (!AUDIO_MAP[m.reading]) {
    fail(`${v.id} ${v.word}: kein Audio für "${m.reading}" — tools/export-speak-texts.cjs + tools/generate-audio.py laufen lassen`);
  }
}

console.log(failures === 0 ? `PASS (${verbs.length} Verben, alle ます-Formen mit Audio)` : `${failures} failure(s)`);
process.exit(failures ? 1 : 0);
