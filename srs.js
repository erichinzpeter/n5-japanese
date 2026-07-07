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

// ===== SELECTION: build one round =====
// Local helper (NOT named `shuffle` — app.js already declares a global `shuffle`
// and both files share one script scope).
function shuffleQueue(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// deckCards: [{ id, ... }] candidates. srsState: loadSRS() result.
// Due cards first (weakest-first), then new cards capped at NEW_PER_ROUND,
// then not-yet-due reviews pulled forward so the round reaches its full size.
function buildQueue(deckCards, srsState, today, roundSize) {
  const due = [];
  const fresh = [];
  const later = [];
  for (const card of deckCards) {
    const entry = srsState.cards[card.id];
    if (!entry) fresh.push(card);
    else if (isDueOn(entry, today)) due.push({ card, entry });
    else later.push({ card, entry });
  }
  due.sort((a, b) =>
    a.entry.box - b.entry.box ||
    (a.entry.due < b.entry.due ? -1 : a.entry.due > b.entry.due ? 1 : 0)
  );
  const queue = due.slice(0, roundSize).map(d => d.card);
  let slots = roundSize - queue.length;
  if (slots > 0 && fresh.length > 0) {
    const take = Math.min(slots, NEW_PER_ROUND, fresh.length);
    queue.push(...shuffleQueue(fresh).slice(0, take));
    slots -= take;
  }
  if (queue.length > 0 && slots > 0 && later.length > 0) {
    // The user picked the round size; a visibly short round reads as a bug.
    // Pull the reviews due soonest forward instead of adding more new cards.
    // An entirely empty queue stays empty — that's the "done for today" signal.
    later.sort((a, b) => (a.entry.due < b.entry.due ? -1 : a.entry.due > b.entry.due ? 1 : 0));
    queue.push(...later.slice(0, slots).map(l => l.card));
  }
  return queue;
}

// ===== STORAGE (browser-only, never throws) =====
function loadSRS() {
  try {
    if (typeof localStorage === 'undefined') return { v: 1, cards: {} };
    const raw = localStorage.getItem(SRS_KEY);
    if (!raw) return { v: 1, cards: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || typeof parsed.cards !== 'object') {
      return { v: 1, cards: {} };
    }
    return parsed;
  } catch (e) {
    return { v: 1, cards: {} };
  }
}

function saveSRS(state) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(SRS_KEY, JSON.stringify(state));
    }
  } catch (e) {
    // quota exceeded / private mode — ignore; app degrades to random rounds
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SRS_KEY, BOX_DAYS, MAX_BOX, NEW_PER_ROUND,
    todayStr, addDays, isDueOn, rate, buildQueue, loadSRS, saveSRS,
  };
}
