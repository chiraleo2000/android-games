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
  assert.equal(session.dump().draft, 'kept');

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

test('dictionary generation does not read a copyrighted word file', () => {
  const scriptPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
    'scripts',
    'generate-dictionary.mjs'
  );
  const source = fs.readFileSync(scriptPath, 'utf8');
  assert.doesNotMatch(source, /readFile|createReadStream|dictionary\.json/);
});

test('on-device logs do not store userAgent or typed answers', () => {
  const storage = memoryStorage();
  recordDeviceLog(
    {
      name: 'Error',
      userAgent: 'secret-agent',
      answer: 'typed-word',
      typedAnswer: 'another-word',
      input: 'player-text',
    },
    storage
  );

  const saved = storage.dump()['on-device-logs'];
  assert.equal(saved.includes('secret-agent'), false);
  assert.equal(saved.includes('typed-word'), false);
  assert.equal(saved.includes('another-word'), false);
  assert.equal(saved.includes('player-text'), false);
  assert.equal(saved.toLowerCase().includes('useragent'), false);
  assert.match(saved, /Unexpected error/);
});
