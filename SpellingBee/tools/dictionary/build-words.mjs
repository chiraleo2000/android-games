// Word lists are built from Typing_Game category strings.
// This script does not read copyrighted dictionary files.

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const builder = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..',
  'scripts',
  'buildWordsFromCategories.mjs'
);

const result = spawnSync(process.execPath, [builder], { stdio: 'inherit' });
process.exit(result.status ?? 1);
