'use strict';

// Maps a vocab/basics `pos` string to a deck category.
// Order matters: compound labels (e.g. "Verb (Gruppe 1) / Adjektiv") resolve to the
// first match, so Verb is checked before Adjektiv before Nomen before Adverb. This
// keeps "na-Adjektiv/Adverb" → adjektive and "Nomen/Adverb" → nomen, while a pure
// "Adverb" → adverbien.
function posCategory(pos) {
  if (!pos) return 'sonstiges';
  if (pos.includes('Verb')) return 'verben';
  if (pos.includes('Adjektiv')) return 'adjektive';
  if (pos.startsWith('Nomen')) return 'nomen';
  if (pos.includes('Adverb')) return 'adverbien';
  return 'sonstiges';
}

if (typeof module !== 'undefined' && module.exports) module.exports = posCategory;
