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
