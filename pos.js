'use strict';

// Maps a vocab/basics `pos` string to a deck category.
// Order matters: compound labels (e.g. "Verb (Gruppe 1) / Adjektiv") resolve to the
// first match, so Verb is checked before Adjektiv before Nomen.
function posCategory(pos) {
  if (!pos) return 'sonstiges';
  if (pos.includes('Verb')) return 'verben';
  if (pos.includes('Adjektiv')) return 'adjektive';
  if (pos.startsWith('Nomen')) return 'nomen';
  return 'sonstiges';
}

if (typeof module !== 'undefined' && module.exports) module.exports = posCategory;
