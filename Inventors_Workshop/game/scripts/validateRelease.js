import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];

function filePath(...parts) {
  return path.join(root, ...parts);
}

function exists(...parts) {
  return fs.existsSync(filePath(...parts));
}

function pngSize(relativePath) {
  const buffer = fs.readFileSync(filePath(relativePath));
  if (buffer.length < 24 || buffer.toString('ascii', 1, 4) !== 'PNG') {
    errors.push(`${relativePath} is not a PNG`);
    return null;
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

const required = [
  'docs/store_assets/icon_512.png',
  'docs/store_assets/feature_graphic_1024x500.png',
  'docs/store_assets/short_description.txt',
  'docs/store_assets/full_description.txt',
];

for (const relativePath of required) {
  if (!exists(relativePath)) errors.push(`missing ${relativePath}`);
}

const assetDir = filePath('docs', 'store_assets');
const screenshots = exists('docs', 'store_assets')
  ? fs.readdirSync(assetDir).filter((name) => /screenshot/i.test(name) && name.endsWith('.png'))
  : [];
if (screenshots.length < 2) errors.push('need at least 2 screenshot PNGs in docs/store_assets');

if (exists('docs/store_assets/icon_512.png')) {
  const size = pngSize('docs/store_assets/icon_512.png');
  if (size && (size.width !== 512 || size.height !== 512)) {
    errors.push(`icon_512.png is ${size.width}x${size.height}`);
  }
}
if (exists('docs/store_assets/feature_graphic_1024x500.png')) {
  const size = pngSize('docs/store_assets/feature_graphic_1024x500.png');
  if (size && (size.width !== 1024 || size.height !== 500)) {
    errors.push(`feature graphic is ${size.width}x${size.height}`);
  }
}

if (exists('docs/store_assets/short_description.txt')) {
  const text = fs.readFileSync(filePath('docs/store_assets/short_description.txt'), 'utf8').trim();
  if (text.length === 0 || text.length > 80) errors.push(`short description length ${text.length} is outside 1..80`);
}
if (exists('docs/store_assets/full_description.txt')) {
  const text = fs.readFileSync(filePath('docs/store_assets/full_description.txt'), 'utf8').trim();
  if (text.length === 0 || text.length > 4000) errors.push(`full description length ${text.length} is outside 1..4000`);
}

const gradleCandidates = ['android/variables.gradle', 'android/app/build.gradle', 'android/app/build.gradle.kts'];
let targetSdk = null;
for (const relativePath of gradleCandidates) {
  if (!exists(relativePath)) continue;
  const text = fs.readFileSync(filePath(relativePath), 'utf8');
  const match = /targetSdk(?:Version)?\s*=\s*(\d+)/.exec(text);
  if (match) targetSdk = Number(match[1]);
}
if (targetSdk === null || targetSdk < 36) {
  errors.push(`targetSdk ${targetSdk ?? 'missing'} is below 36`);
}

const legalFiles = ['PRIVACY_POLICY.md', 'TERMS_OF_SERVICE.md', 'RELEASE_URLS.md'];
const placeholders = ['[LEGAL_NAME]', '[SUPPORT_EMAIL]', '[EFFECTIVE_DATE]'];
for (const relativePath of legalFiles) {
  if (!exists(relativePath)) {
    errors.push(`missing ${relativePath}`);
    continue;
  }
  const text = fs.readFileSync(filePath(relativePath), 'utf8');
  for (const token of placeholders) {
    if (!text.includes(token)) errors.push(`${relativePath} is missing ${token}`);
  }
}

for (const relativePath of ['docs/CONTENT_RATING.md', 'docs/DEVICE_CHECKLIST.md', 'docs/PERMISSIONS.md']) {
  if (!exists(relativePath)) errors.push(`missing ${relativePath}`);
}

const appGradle = exists('android/app/build.gradle')
  ? fs.readFileSync(filePath('android/app/build.gradle'), 'utf8')
  : '';
if (!appGradle.includes('useLegacyPackaging = false')) {
  errors.push('android/app/build.gradle must set jniLibs.useLegacyPackaging = false');
}
if (!/versionCode\s+1\b/.test(appGradle)) errors.push('versionCode must be 1');
if (!appGradle.includes('versionName "1.0.0"')) errors.push('versionName must be 1.0.0');
if (!appGradle.includes('com.inventorsworkshop.app')) errors.push('applicationId must be com.inventorsworkshop.app');
if (!appGradle.includes('Missing release signing properties')) {
  errors.push('release build must fail with a message that names missing signing properties');
}

const exampleProps = exists('android/gradle.properties.example')
  ? fs.readFileSync(filePath('android/gradle.properties.example'), 'utf8')
  : '';
for (const key of ['RELEASE_STORE_FILE', 'RELEASE_STORE_PASSWORD', 'RELEASE_KEY_ALIAS', 'RELEASE_KEY_PASSWORD']) {
  if (!exampleProps.includes(key)) errors.push(`gradle.properties.example is missing ${key}`);
}

const ignore = exists('.gitignore') ? fs.readFileSync(filePath('.gitignore'), 'utf8') : '';
for (const token of ['android/gradle.properties', '*.jks', '*.keystore']) {
  if (!ignore.includes(token)) errors.push(`.gitignore must exclude ${token}`);
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`release validation ok (targetSdk ${targetSdk})`);
