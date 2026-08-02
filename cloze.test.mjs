import { test } from 'node:test';
import assert from 'node:assert/strict';
import cloze from './cloze.js';

const YOMU = { word: '読む', reading: 'よむ', meaning: 'lesen', pos: 'Verb (Godan, む)' };

test('surfaceForms enthält die Wörterbuchform', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.ok(words.includes('読む'));
});

test('surfaceForms enthält die ます-Form', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.ok(words.includes('読みます'));
});

test('surfaceForms enthält den ます-Stamm', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.ok(words.includes('読み'));
});

test('surfaceForms führt die längste Form zuerst', () => {
  const words = cloze.surfaceForms(YOMU, 'vocab').map(f => f.word);
  assert.equal(words[0].length, Math.max(...words.map(w => w.length)));
});

test('surfaceForms liefert zu jeder Form die Lesung', () => {
  const masu = cloze.surfaceForms(YOMU, 'vocab').find(f => f.word === '読みます');
  assert.equal(masu.reading, 'よみます');
});

test('surfaceForms für ein Nomen liefert nur die Wörterbuchform', () => {
  const noun = { word: '本', reading: 'ほん', pos: 'Nomen' };
  assert.deepEqual(cloze.surfaceForms(noun, 'vocab'), [{ word: '本', reading: 'ほん' }]);
});
