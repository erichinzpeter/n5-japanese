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
