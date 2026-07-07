import { test } from 'node:test';
import assert from 'node:assert/strict';
import srs from './srs.js';

test('addDays advances within a month', () => {
  assert.equal(srs.addDays('2026-06-04', 4), '2026-06-08');
});

test('addDays crosses a month boundary', () => {
  assert.equal(srs.addDays('2026-06-29', 4), '2026-07-03');
});

test('todayStr returns YYYY-MM-DD', () => {
  assert.match(srs.todayStr(), /^\d{4}-\d{2}-\d{2}$/);
});

test('isDueOn true when due is on or before today', () => {
  assert.equal(srs.isDueOn({ due: '2026-06-03' }, '2026-06-04'), true);
  assert.equal(srs.isDueOn({ due: '2026-06-04' }, '2026-06-04'), true);
});

test('isDueOn false when due is after today', () => {
  assert.equal(srs.isDueOn({ due: '2026-06-05' }, '2026-06-04'), false);
});

test('isDueOn false for a missing entry', () => {
  assert.equal(srs.isDueOn(null, '2026-06-04'), false);
});

test('rate: new card known -> box 2, due +2d', () => {
  const s = srs.rate({ v: 1, cards: {} }, 'k-1-fwd', true, '2026-06-04');
  assert.deepEqual(s.cards['k-1-fwd'], { box: 2, seen: '2026-06-04', due: '2026-06-06' });
});

test('rate: new card not known -> box 1, due +1d', () => {
  const s = srs.rate({ v: 1, cards: {} }, 'k-1-fwd', false, '2026-06-04');
  assert.deepEqual(s.cards['k-1-fwd'], { box: 1, seen: '2026-06-04', due: '2026-06-05' });
});

test('rate: box 3 known -> box 4, due +7d', () => {
  const s = srs.rate({ v: 1, cards: { x: { box: 3, seen: '2026-06-01', due: '2026-06-04' } } }, 'x', true, '2026-06-04');
  assert.deepEqual(s.cards.x, { box: 4, seen: '2026-06-04', due: '2026-06-11' });
});

test('rate: box 3 not known -> box 2 (demote one step), due +2d', () => {
  const s = srs.rate({ v: 1, cards: { x: { box: 3, seen: '2026-06-01', due: '2026-06-04' } } }, 'x', false, '2026-06-04');
  assert.deepEqual(s.cards.x, { box: 2, seen: '2026-06-04', due: '2026-06-06' });
});

test('rate: box 5 known stays box 5 (cap), due +14d', () => {
  const s = srs.rate({ v: 1, cards: { x: { box: 5, seen: '2026-06-01', due: '2026-06-04' } } }, 'x', true, '2026-06-04');
  assert.equal(s.cards.x.box, 5);
  assert.equal(s.cards.x.due, '2026-06-18');
});

test('rate: box 1 not known stays box 1 (floor), due +1d', () => {
  const s = srs.rate({ v: 1, cards: { x: { box: 1, seen: '2026-06-01', due: '2026-06-04' } } }, 'x', false, '2026-06-04');
  assert.equal(s.cards.x.box, 1);
  assert.equal(s.cards.x.due, '2026-06-05');
});

// Helper: make N cards with ids c0..c{N-1}
function cards(n) {
  return Array.from({ length: n }, (_, i) => ({ id: 'c' + i, type: 'kanji' }));
}

test('buildQueue: all-new pool caps new cards at NEW_PER_ROUND', () => {
  const q = srs.buildQueue(cards(50), { v: 1, cards: {} }, '2026-06-04', 20);
  assert.equal(q.length, 10);
});

test('buildQueue: full due backlog fills with due only, no new', () => {
  const state = { v: 1, cards: {} };
  for (let i = 0; i < 25; i++) state.cards['c' + i] = { box: 1, seen: '2026-06-01', due: '2026-06-02' };
  const q = srs.buildQueue(cards(40), state, '2026-06-04', 20);
  assert.equal(q.length, 20);
  assert.ok(q.every(c => state.cards[c.id]), 'every queued card is a due (seen) card');
});

test('buildQueue: few due tops up with capped new', () => {
  const state = { v: 1, cards: {} };
  for (let i = 0; i < 5; i++) state.cards['c' + i] = { box: 1, seen: '2026-06-01', due: '2026-06-02' };
  const q = srs.buildQueue(cards(55), state, '2026-06-04', 20);
  assert.equal(q.length, 15); // 5 due + 10 new (cap)
});

test('buildQueue: due cards ordered weakest-first (lower box, then older due)', () => {
  const state = { v: 1, cards: {
    a: { box: 3, seen: '', due: '2026-06-01' },
    b: { box: 1, seen: '', due: '2026-06-03' },
    c: { box: 1, seen: '', due: '2026-06-02' },
  } };
  const pool = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const q = srs.buildQueue(pool, state, '2026-06-04', 20);
  assert.deepEqual(q.map(x => x.id), ['c', 'b', 'a']); // box1 older-due, box1 newer-due, box3
});

test('buildQueue: short round tops up with not-yet-due reviews, soonest due first', () => {
  const state = { v: 1, cards: {} };
  // 5 due today, 10 seen but due later (staggered), rest of the pool is fresh.
  for (let i = 0; i < 5; i++) state.cards['c' + i] = { box: 1, seen: '2026-06-01', due: '2026-06-02' };
  for (let i = 5; i < 15; i++) state.cards['c' + i] = { box: 2, seen: '2026-06-03', due: '2026-06-' + String(i + 1).padStart(2, '0') };
  const q = srs.buildQueue(cards(23), state, '2026-06-04', 30);
  assert.equal(q.length, 23); // 5 due + 8 fresh + 10 pulled-forward reviews
  const pulled = q.slice(13).map(c => c.id);
  assert.deepEqual(pulled, ['c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14']);
});

test('buildQueue: nothing due and nothing new returns empty', () => {
  const state = { v: 1, cards: {
    a: { box: 2, seen: '', due: '2026-06-10' },
  } };
  const q = srs.buildQueue([{ id: 'a' }], state, '2026-06-04', 20);
  assert.deepEqual(q, []);
});

// Minimal localStorage stub for Node (the app uses the real one in the browser).
function withLocalStorage(value, fn) {
  const store = { [srs.SRS_KEY]: value };
  globalThis.localStorage = {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = v; },
  };
  try { return fn(store); } finally { delete globalThis.localStorage; }
}

test('loadSRS returns empty state when nothing stored', () => {
  withLocalStorage(null, () => {
    assert.deepEqual(srs.loadSRS(), { v: 1, cards: {} });
  });
});

test('loadSRS returns empty state on corrupt JSON (no throw)', () => {
  withLocalStorage('{not valid json', () => {
    assert.deepEqual(srs.loadSRS(), { v: 1, cards: {} });
  });
});

test('loadSRS returns empty state when no localStorage exists', () => {
  assert.deepEqual(srs.loadSRS(), { v: 1, cards: {} });
});

test('saveSRS round-trips through loadSRS', () => {
  withLocalStorage(null, () => {
    srs.saveSRS({ v: 1, cards: { x: { box: 2, seen: '2026-06-04', due: '2026-06-06' } } });
    assert.equal(srs.loadSRS().cards.x.box, 2);
  });
});
