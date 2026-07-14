#!/usr/bin/env node
// Enumerates every word-level text the app can hand to speakJapanese() and
// writes them to tools/speak-texts.json for tools/generate-audio.py.
// Word-level = kanji readings, vocab/basics readings, conjugation forms.
// Sentences (examples, dialogues, grammar) stay on live TTS on purpose: the
// Android cache collision (see ANDROID-TTS-FINDINGS.md) only hits short texts.
//
// Usage: node tools/export-speak-texts.cjs   (from n5-app/)

const fs = require('fs');
const path = require('path');
const conjugate = require(path.join(__dirname, '..', 'conjugate.js'));

const loadData = (file, name) => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'data', file), 'utf8');
  return eval(`${src};${name}`);
};

const KANJI = loadData('kanji.js', 'KANJI');
const VOCAB = loadData('vocab.js', 'VOCAB');
const BASICS = loadData('basics.js', 'BASICS');

const texts = new Set();

// mirrors kanjiReading() in app.js
KANJI.forEach(k => texts.add(k.speak || k.kun[0] || k.on[0]));

// mirrors getJapaneseText() / speakText for vocab + basics
[...VOCAB, ...BASICS].forEach(v => texts.add(v.reading || v.word));

// mirrors conjugation cards: card.target.reading
VOCAB.forEach(v => {
  const c = conjugate(v.word, v.reading, v.pos);
  if (c && c.forms) c.forms.forEach(f => texts.add(f.reading));
});

texts.delete('');
const sorted = [...texts].sort();
const out = path.join(__dirname, 'speak-texts.json');
fs.writeFileSync(out, JSON.stringify(sorted, null, 0));
console.log(`${sorted.length} unique texts → ${out}`);
