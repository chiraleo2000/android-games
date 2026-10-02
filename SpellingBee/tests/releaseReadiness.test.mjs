import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PRIVACY_POLICY_URL } from '../src/config/legal.js';
import { SettingsPanel } from '../src/components/SettingsPanel.js';
import {
  FRESH_START_MESSAGE,
  confirmAndClearAllData,
} from '../src/utils/clearLocalData.js';
import { recordDeviceLog } from '../src/utils/deviceLog.js';
import wordsData from '../src/words-data.json' with { type: 'json' };

function memoryStorage(initial = {}) {
  const data = { ...initial };
  return {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = String(value);
    },
    clear() {
      for (const key of Object.keys(data)) delete data[key];
    },
    dump() {
      return data;
    },
  };
}

test('clear-all-data waits for confirmation, then wipes storage and reports a fresh start', () => {
  const progress = memoryStorage({ score: '12', theme: 'dark' });
  const session = memoryStorage({ draft: 'kept' });
  let startedFresh = false;

  const blocked = confirmAndClearAllData(false, () => {
    startedFresh = true;
  }, [progress, session]);

  assert.equal(blocked.cleared, false);
  assert.equal(blocked.message, '');
  assert.equal(startedFresh, false);
  assert.equal(progress.dump().score, '12');

  const cleared = confirmAndClearAllData(true, () => {
    startedFresh = true;
  }, [progress, session]);

  assert.equal(cleared.cleared, true);
  assert.equal(cleared.message, FRESH_START_MESSAGE);
  assert.equal(startedFresh, true);
  assert.deepEqual(progress.dump(), {});
  assert.deepEqual(session.dump(), {});
});

test('privacy policy link renders and the fresh-start message can be shown', () => {
  const html = renderToStaticMarkup(
    React.createElement(SettingsPanel, {
      onFreshStart() {},
      notice: FRESH_START_MESSAGE,
    })
  );

  assert.match(html, new RegExp(`<a[^>]*href="${PRIVACY_POLICY_URL}"[^>]*>Privacy Policy</a>`));
  assert.match(html, new RegExp(FRESH_START_MESSAGE));
  assert.match(html, /Delete all local data/);
  assert.doesNotMatch(html, /Confirm delete/);
});

test('on-device logs do not store userAgent or typed answers', () => {
  const storage = memoryStorage();
  recordDeviceLog(
    {
      name: 'Error',
      userAgent: 'secret-agent',
      answer: 'typed-word',
      input: 'player-text',
    },
    storage
  );

  const saved = storage.dump()['on-device-logs'];
  assert.equal(saved.includes('secret-agent'), false);
  assert.equal(saved.includes('typed-word'), false);
  assert.equal(saved.includes('player-text'), false);
  assert.equal(saved.toLowerCase().includes('useragent'), false);
});

function categoryTerms() {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const categoryDir = path.resolve(root, '..', 'Typing_Game', 'src', 'data', 'categories');
  const categoryFiles = [
    'animals.ts',
    'fruits.ts',
    'vegetables.ts',
    'food.ts',
    'geography.ts',
    'vehicles.ts',
    'nature.ts',
    'sports.ts',
    'occupations.ts',
    'body.ts',
    'household.ts',
  ];
  const termPattern = /term:\s*(['"])((?:\\.|(?!\1).)*)\1/g;
  const seen = new Set();
  const terms = [];

  for (const fileName of categoryFiles) {
    const source = fs.readFileSync(path.join(categoryDir, fileName), 'utf8');
    for (const match of source.matchAll(termPattern)) {
      const term = match[2].replace(/\\(['"\\])/g, '$1').trim();
      const key = term.toLowerCase();
      if (!key || seen.has(key) || !/[A-Za-z]/.test(term)) continue;
      seen.add(key);
      terms.push(term);
    }
  }

  return terms.sort((a, b) => a.localeCompare(b));
}

function hintFor(term) {
  const letters = term.match(/[A-Za-z]/g) ?? [];
  return `${letters.length} letters, starts with ${letters[0].toUpperCase()}`;
}

test('topic words are only the original category strings with letter hints', () => {
  const expectedTerms = categoryTerms();
  const shipped = [...wordsData.words].sort((a, b) => a.english.localeCompare(b.english));

  assert.ok(expectedTerms.length > 0);
  assert.ok(shipped.length < 11000);
  assert.deepEqual(shipped.map((word) => word.english), expectedTerms);

  for (const word of shipped) {
    assert.equal(word.hint, hintFor(word.english));
    assert.equal(Object.hasOwn(word, 'meaning'), false);
    assert.equal(Object.hasOwn(word, 'definition'), false);
    assert.equal(word.chinese, undefined);
    assert.equal(word.pinyin, undefined);
    const length = word.english.trim().length;
    const expected = length <= 4 ? 'easy' : length <= 7 ? 'medium' : 'hard';
    assert.equal(word.difficulty, expected);
  }
});

test('word builder does not read a copyrighted dictionary file', () => {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const legacy = fs.readFileSync(path.join(root, 'tools', 'dictionary', 'build-words.mjs'), 'utf8');
  const builder = fs.readFileSync(path.join(root, 'scripts', 'buildWordsFromCategories.mjs'), 'utf8');

  assert.doesNotMatch(legacy, /dictionary\.json|readFileSync|createReadStream/);
  assert.doesNotMatch(builder, /dictionary\.json/);
});
