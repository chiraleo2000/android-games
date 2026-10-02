const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
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
    errors.push(relativePath + ' is not a PNG');
    return null;
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

for (const relativePath of [
  'docs/store_assets/icon_512.png',
  'docs/store_assets/feature_graphic_1024x500.png',
  'docs/store_assets/short_description.txt',
  'docs/store_assets/full_description.txt',
]) {
  if (!exists(relativePath)) errors.push('missing ' + relativePath);
}

const screenshots = exists('docs', 'store_assets')
  ? fs.readdirSync(filePath('docs', 'store_assets')).filter((name) => /screenshot/i.test(name) && name.endsWith('.png'))
  : [];
if (screenshots.length < 2) errors.push('need at least 2 screenshot PNGs');

if (exists('docs/store_assets/icon_512.png')) {
  const size = pngSize('docs/store_assets/icon_512.png');
  if (size && (size.width !== 512 || size.height !== 512)) errors.push('icon size ' + size.width + 'x' + size.height);
}
if (exists('docs/store_assets/feature_graphic_1024x500.png')) {
  const size = pngSize('docs/store_assets/feature_graphic_1024x500.png');
  if (size && (size.width !== 1024 || size.height !== 500)) errors.push('feature size ' + size.width + 'x' + size.height);
}
if (exists('docs/store_assets/short_description.txt')) {
  const text = fs.readFileSync(filePath('docs/store_assets/short_description.txt'), 'utf8').trim();
  if (!text || text.length > 80) errors.push('short description length ' + text.length);
}
if (exists('docs/store_assets/full_description.txt')) {
  const text = fs.readFileSync(filePath('docs/store_assets/full_description.txt'), 'utf8').trim();
  if (!text || text.length > 4000) errors.push('full description length ' + text.length);
}

function read(relativePath) {
  return exists(relativePath) ? fs.readFileSync(filePath(relativePath), 'utf8') : '';
}

for (const relativePath of [
  'PRIVACY_POLICY.md',
  'TERMS_OF_SERVICE.md',
  'RELEASE_URLS.md',
  'docs/DEVICE_CHECKLIST.md',
  'android/gradle.properties.example',
  'android/app/build.gradle',
  'android/variables.gradle',
  'android/app/src/main/AndroidManifest.xml',
]) {
  if (!exists(relativePath)) errors.push('missing ' + relativePath);
}

for (const name of ['PRIVACY_POLICY.md', 'TERMS_OF_SERVICE.md', 'RELEASE_URLS.md']) {
  const text = read(name);
  for (const token of ['[LEGAL_NAME]', '[SUPPORT_EMAIL]', '[EFFECTIVE_DATE]']) {
    if (text && !text.includes(token)) errors.push(name + ' missing ' + token);
  }
}
if (read('RELEASE_URLS.md') && !/content rating/i.test(read('RELEASE_URLS.md'))) {
  errors.push('RELEASE_URLS.md missing content rating answers');
}
if (read('PRIVACY_POLICY.md') && !/on the device/i.test(read('PRIVACY_POLICY.md'))) {
  errors.push('privacy policy must describe on-device storage');
}

const appGradle = read('android/app/build.gradle');
if (appGradle) {
  if (!appGradle.includes('com.learninggenalpha.app')) errors.push('applicationId is not com.learninggenalpha.app');
  if (!/versionCode\s+1\b/.test(appGradle)) errors.push('versionCode is not 1');
  if (!/versionName\s+"1\.0\.0"/.test(appGradle)) errors.push('versionName is not 1.0.0');
  if (!/useLegacyPackaging\s*=\s*false/.test(appGradle)) errors.push('useLegacyPackaging is not false');
  if (!appGradle.includes('arm64-v8a')) errors.push('missing arm64-v8a');
  for (const key of ['RELEASE_STORE_FILE', 'RELEASE_STORE_PASSWORD', 'RELEASE_KEY_ALIAS', 'RELEASE_KEY_PASSWORD']) {
    if (!appGradle.includes(key)) errors.push('signing check missing ' + key);
  }
  if (!appGradle.includes('GradleException')) errors.push('release signing does not fail with GradleException');
}

const variables = read('android/variables.gradle');
const minSdk = variables.match(/minSdkVersion\s*=\s*(\d+)/);
if (variables && (!minSdk || Number(minSdk[1]) < 22)) errors.push('minSdk below 22');
const compileSdk = variables.match(/compileSdkVersion\s*=\s*(\d+)/);
if (variables && (!compileSdk || Number(compileSdk[1]) < 36)) errors.push('compileSdk below 36');

const example = read('android/gradle.properties.example');
for (const key of ['RELEASE_STORE_FILE', 'RELEASE_STORE_PASSWORD', 'RELEASE_KEY_ALIAS', 'RELEASE_KEY_PASSWORD']) {
  if (example && !example.includes(key + '=CHANGEME') && !example.includes(key + ' = CHANGEME')) {
    errors.push('gradle.properties.example missing ' + key);
  }
}

const manifest = read('android/app/src/main/AndroidManifest.xml');
if (manifest.includes('RECORD_AUDIO')) errors.push('RECORD_AUDIO must not be requested');
if (manifest && !manifest.includes('android.permission.INTERNET')) errors.push('missing INTERNET permission');

const ignoreText = [read('../.gitignore'), read('.gitignore'), read('android/.gitignore')].join('\n');
if (!ignoreText.includes('gradle.properties')) errors.push('gitignore missing gradle.properties');
if (!/\*\.jks|\.jks/.test(ignoreText)) errors.push('gitignore missing keystore files');

let targetSdk = null;
for (const relativePath of ['android/variables.gradle', 'android/app/build.gradle']) {
  if (!exists(relativePath)) continue;
  const match = fs.readFileSync(filePath(relativePath), 'utf8').match(/targetSdk(?:Version)?\s*=\s*(\d+)/);
  if (match) targetSdk = Number(match[1]);
}
if (targetSdk === null || targetSdk < 36) errors.push('targetSdk ' + (targetSdk ?? 'missing') + ' is below 36');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('release validation ok (targetSdk ' + targetSdk + ')');
