'use strict';

// Leitner spaced-repetition scheduler. Pure logic + thin localStorage wrappers.
// Loaded as a plain <script> (browser globals) and imported in srs.test.mjs (Node).

const SRS_KEY = 'n5_srs';
const BOX_DAYS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 };
const MAX_BOX = 5;
const NEW_PER_ROUND = 10;

// ===== DATE HELPERS (local date, day granularity) =====
function pad2(n) { return String(n).padStart(2, '0'); }

function ymd(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function todayStr() {
  return ymd(new Date());
}

function addDays(isoStr, n) {
  const [y, m, d] = isoStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d); // local midnight, no UTC drift
  dt.setDate(dt.getDate() + n);
  return ymd(dt);
}

// ISO date strings compare lexically, so string <= is a valid date comparison.
function isDueOn(entry, today) {
  return !!entry && entry.due <= today;
}

// ===== CORE: rate one card =====
// Absent entry is treated as a Box 1 baseline, then this rating is applied.
function rate(state, id, knewIt, today) {
  const cur = state.cards[id];
  let box = cur ? cur.box : 1;
  box = knewIt ? Math.min(MAX_BOX, box + 1) : Math.max(1, box - 1);
  state.cards[id] = { box, seen: today, due: addDays(today, BOX_DAYS[box]) };
  return state;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SRS_KEY, BOX_DAYS, MAX_BOX, NEW_PER_ROUND, todayStr, addDays, isDueOn, rate };
}
