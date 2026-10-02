import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const problems = [];

function pngSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (buffer.length < 24 || !buffer.subarray(0, 8).equals(signature)) {
    throw new Error('not a PNG');
  }
  if (buffer.subarray(12, 16).toString('ascii') !== 'IHDR') {
    throw new Error('missing IHDR');
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function requirePng(relativePath, width, height) {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath)) {
    problems.push(`Missing ${relativePath}`);
    return;
  }
  try {
    const size = pngSize(filePath);
    if (size.width !== width || size.height !== height) {
      problems.push(`${relativePath} is ${size.width}x${size.height}, expected ${width}x${height}`);
    }
  } catch (error) {
    problems.push(`${relativePath} is not a valid PNG (${error.message})`);
  }
}

function requireText(relativePath, maxLength) {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath)) {
    problems.push(`Missing ${relativePath}`);
    return;
  }
  const text = fs.readFileSync(filePath, 'utf8').trim();
  if (!text) {
    problems.push(`${relativePath} is empty`);
    return;
  }
  if (text.length > maxLength) {
    problems.push(`${relativePath} is ${text.length} characters, maximum is ${maxLength}`);
  }
}

requirePng('docs/store_assets/icon_512.png', 512, 512);
requirePng('docs/store_assets/feature_graphic_1024x500.png', 1024, 500);
requireText('docs/store_assets/store_short_description.txt', 80);
requireText('docs/store_assets/store_description.txt', 4000);

const assetDir = path.join(root, 'docs', 'store_assets');
const screenshots = fs.existsSync(assetDir)
  ? fs.readdirSync(assetDir).filter((name) => /^phone_screenshot_.*\.png$/i.test(name))
  : [];

if (screenshots.length < 2) {
  problems.push('Need at least 2 phone screenshots named phone_screenshot_*.png in docs/store_assets');
}

for (const name of screenshots) {
  const relativePath = path.join('docs', 'store_assets', name);
  try {
    const size = pngSize(path.join(root, relativePath));
    if (size.width < 320 || size.height < 480 || size.height <= size.width) {
      problems.push(`${relativePath} is ${size.width}x${size.height}; phone screenshots must be portrait and at least 320x480`);
    }
  } catch (error) {
    problems.push(`${relativePath} is not a valid PNG (${error.message})`);
  }
}

function walkGradle(directory, files = []) {
  if (!fs.existsSync(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === 'build' || entry.name === '.gradle' || entry.name === 'node_modules') continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walkGradle(fullPath, files);
    else if (entry.name.endsWith('.gradle') || entry.name.endsWith('.gradle.kts')) files.push(fullPath);
  }
  return files;
}

const gradleFiles = walkGradle(path.join(root, 'android'));
const variablesFile = path.join(root, 'android', 'variables.gradle');
if (!fs.existsSync(variablesFile)) {
  problems.push('Missing android/variables.gradle');
} else {
  const variables = fs.readFileSync(variablesFile, 'utf8');
  const targetMatch = variables.match(/\btargetSdkVersion\s*=\s*(\d+)/);
  const compileMatch = variables.match(/\bcompileSdkVersion\s*=\s*(\d+)/);
  if (!targetMatch || Number(targetMatch[1]) < 36) {
    problems.push('android/variables.gradle targetSdkVersion must be >= 36');
  }
  if (!compileMatch || Number(compileMatch[1]) < 36) {
    problems.push('android/variables.gradle compileSdkVersion must be >= 36');
  }
}

for (const filePath of gradleFiles) {
  const text = fs.readFileSync(filePath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    if (!/(compileSdk|targetSdk)/.test(line)) continue;
    const usesProjectSdk = /rootProject\.ext\.(compileSdkVersion|targetSdkVersion)/.test(line);
    for (const match of line.matchAll(/\b(\d+)\b/g)) {
      const value = Number(match[1]);
      if (value < 36 && !usesProjectSdk) {
        problems.push(`${path.relative(root, filePath)} sets an SDK value below 36: ${line.trim()}`);
      }
    }
  }
}

const appGradlePath = path.join(root, 'android', 'app', 'build.gradle');
if (!fs.existsSync(appGradlePath)) {
  problems.push('Missing android/app/build.gradle');
} else {
  const appGradle = fs.readFileSync(appGradlePath, 'utf8');
  if (!appGradle.includes('arm64-v8a')) {
    problems.push('android/app/build.gradle must include the arm64-v8a ABI');
  }
  if (!/useLegacyPackaging\s*=\s*false/.test(appGradle)) {
    problems.push('android/app/build.gradle must set JNI useLegacyPackaging = false');
  }
}

const signingExample = path.join(root, 'android', 'keystore.properties.example');
if (!fs.existsSync(signingExample)) {
  problems.push('Missing android/keystore.properties.example');
} else {
  const example = fs.readFileSync(signingExample, 'utf8');
  for (const key of ['storeFile', 'storePassword', 'keyAlias', 'keyPassword']) {
    if (!example.includes(key)) problems.push(`android/keystore.properties.example missing ${key}`);
  }
}

const gitignorePath = path.join(root, '.gitignore');
if (!fs.existsSync(gitignorePath)) {
  problems.push('Missing .gitignore');
} else {
  const gitignore = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignore.includes('keystore.properties')) problems.push('.gitignore must ignore keystore.properties');
  if (!gitignore.includes('*.jks') && !gitignore.includes('*.keystore')) {
    problems.push('.gitignore must ignore keystore files');
  }
}

for (const legalFile of ['PRIVACY_POLICY.md', 'TERMS_OF_SERVICE.md', 'RELEASE_URLS.md']) {
  const legalPath = path.join(root, legalFile);
  if (!fs.existsSync(legalPath)) {
    problems.push(`Missing ${legalFile}`);
    continue;
  }
  const legal = fs.readFileSync(legalPath, 'utf8');
  for (const token of ['[LEGAL_NAME]', '[SUPPORT_EMAIL]', '[EFFECTIVE_DATE]']) {
    if (!legal.includes(token)) problems.push(`${legalFile} is missing ${token}`);
  }
}

const skipDirs = new Set(['node_modules', 'build', '.gradle', 'dist', 'coverage', '.git']);
function walkForbidden(directory) {
  if (!fs.existsSync(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walkForbidden(fullPath);
      continue;
    }
    if (entry.name === 'dictionary.json' || entry.name === 'The_Oxford_English_Dictionary_Second_Edition.pdf') {
      problems.push(`Remove copyrighted file ${path.relative(root, fullPath)}`);
    }
  }
}
walkForbidden(root);

if (problems.length > 0) {
  for (const problem of problems) console.error(problem);
  process.exit(1);
}

console.log('Release checks passed.');
