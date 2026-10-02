// Copies word strings from Typing_Game category lists.
// Meanings and dictionary definitions are never read or written.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

function unescapeTerm(value) {
  return value.replace(/\\(['"\\])/g, '$1');
}

function difficultyFor(term) {
  const length = term.trim().length;
  if (length <= 4) return 'easy';
  if (length <= 7) return 'medium';
  return 'hard';
}

function hintFor(term) {
  const letters = term.match(/[A-Za-z]/g) ?? [];
  if (letters.length === 0) return null;
  return `${letters.length} letters, starts with ${letters[0].toUpperCase()}`;
}

const seen = new Set();
const words = [];

for (const fileName of categoryFiles) {
  const filePath = path.join(categoryDir, fileName);
  const source = fs.readFileSync(filePath, 'utf8');
  const declared = source.match(/\bterm\s*:/g)?.length ?? 0;
  const extracted = [];

  for (const match of source.matchAll(termPattern)) {
    extracted.push(unescapeTerm(match[2]));
  }

  if (extracted.length !== declared) {
    throw new Error(`${fileName} declared ${declared} terms but extracted ${extracted.length}`);
  }

  for (const term of extracted) {
    const key = term.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    const hint = hintFor(term.trim());
    if (!hint) continue;
    seen.add(key);
    words.push({
      english: term.trim(),
      pos: '',
      hint,
      difficulty: difficultyFor(term.trim()),
    });
  }
}

words.sort((a, b) => a.english.localeCompare(b.english) || a.difficulty.localeCompare(b.difficulty));

const counts = { easy: 0, medium: 0, hard: 0, total: words.length };
for (const word of words) counts[word.difficulty] += 1;

const payload = {
  source: 'Typing_Game category word lists (word strings only)',
  generatedAt: '2026-10-02T00:00:00.000Z',
  counts,
  words,
};

const outPath = path.join(root, 'src', 'words-data.json');
fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(`Wrote ${words.length} words (easy=${counts.easy}, medium=${counts.medium}, hard=${counts.hard})`);
