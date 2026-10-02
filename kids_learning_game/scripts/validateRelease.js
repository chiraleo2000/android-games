const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const assets = path.join(root, 'docs', 'store_assets');
const errors = [];

function fail(message) {
  errors.push(message);
}

function pngSize(file) {
  const buf = fs.readFileSync(file);
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (buf.length < 24 || !buf.subarray(0, 8).equals(sig)) {
    throw new Error('not a PNG');
  }
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function requireFile(file) {
  if (!fs.existsSync(file)) fail(`Missing ${path.relative(root, file)}`);
  return fs.existsSync(file);
}

function requirePng(file, width, height) {
  if (!requireFile(file)) return;
  try {
    const size = pngSize(file);
    if (width && size.width !== width) fail(`${path.basename(file)} width is ${size.width}, expected ${width}`);
    if (height && size.height !== height) fail(`${path.basename(file)} height is ${size.height}, expected ${height}`);
  } catch (error) {
    fail(`${path.basename(file)} is not a readable PNG (${error.message})`);
  }
}

requirePng(path.join(assets, 'icon_512.png'), 512, 512);
requirePng(path.join(assets, 'feature_graphic_1024x500.png'), 1024, 500);
requirePng(path.join(assets, 'screenshot_1.png'));
requirePng(path.join(assets, 'screenshot_2.png'));

const shortFile = path.join(assets, 'short_description.txt');
const fullFile = path.join(assets, 'full_description.txt');
if (requireFile(shortFile)) {
  const short = fs.readFileSync(shortFile, 'utf8').trim();
  if (!short) fail('short_description.txt is empty');
  if (short.length > 80) fail(`short_description.txt is ${short.length} characters (max 80)`);
}
if (requireFile(fullFile)) {
  const full = fs.readFileSync(fullFile, 'utf8').trim();
  if (!full) fail('full_description.txt is empty');
  if (full.length > 4000) fail(`full_description.txt is ${full.length} characters (max 4000)`);
}

for (const name of ['PRIVACY_POLICY.md', 'TERMS_OF_SERVICE.md', 'RELEASE_URLS.md']) {
  const file = path.join(root, name);
  if (!requireFile(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  for (const token of ['[LEGAL_NAME]', '[SUPPORT_EMAIL]', '[EFFECTIVE_DATE]']) {
    if (!text.includes(token)) fail(`${name} is missing ${token}`);
  }
}

function readText(file) {
  if (!requireFile(file)) return '';
  return fs.readFileSync(file, 'utf8');
}

const appGradle = readText(path.join(root, 'android', 'app', 'build.gradle'));
const variables = readText(path.join(root, 'android', 'variables.gradle'));
const example = readText(path.join(root, 'android', 'gradle.properties.example'));
const manifest = readText(path.join(root, 'android', 'app', 'src', 'main', 'AndroidManifest.xml'));
const gitignore = readText(path.join(root, '.gitignore'));
const layout = readText(path.join(root, 'src', 'app', 'layout.tsx'));

if (variables && !/compileSdkVersion\s*=\s*36/.test(variables)) fail('compileSdkVersion is not 36');
if (variables && !/targetSdkVersion\s*=\s*36/.test(variables)) fail('targetSdkVersion is not 36');
if (variables && !/minSdkVersion\s*=\s*(2[2-9]|[3-9]\d)/.test(variables)) fail('minSdkVersion is below 22');
if (appGradle && !/applicationId\s+"com\.wordblitz\.kids"/.test(appGradle)) fail('applicationId is not com.wordblitz.kids');
if (appGradle && !/versionCode\s+1\b/.test(appGradle)) fail('versionCode is not 1');
if (appGradle && !/versionName\s+"1\.0\.0"/.test(appGradle)) fail('versionName is not 1.0.0');
if (appGradle && !/useLegacyPackaging\s*=\s*false/.test(appGradle)) fail('JNI legacy packaging is not disabled');
if (appGradle && !/arm64-v8a/.test(appGradle)) fail('64-bit ABI arm64-v8a is missing');
if (appGradle && !/Release signing config missing/.test(appGradle)) fail('release signing does not name missing properties');
for (const key of ['RELEASE_STORE_FILE', 'RELEASE_STORE_PASSWORD', 'RELEASE_KEY_ALIAS', 'RELEASE_KEY_PASSWORD']) {
  if (example && !example.includes(key)) fail(`gradle.properties.example is missing ${key}`);
}
if (manifest && /RECORD_AUDIO/.test(manifest)) fail('RECORD_AUDIO must not be requested');
if (manifest && !/android\.permission\.INTERNET/.test(manifest)) fail('INTERNET permission is missing');
if (gitignore && !gitignore.includes('android/gradle.properties')) fail('.gitignore does not ignore android/gradle.properties');
if (gitignore && !gitignore.includes('*.jks')) fail('.gitignore does not ignore keystores');
if (/next\/font\/google|fonts\.googleapis|fonts\.gstatic/.test(layout)) fail('the app still loads Google Fonts');

if (errors.length) {
  console.error('Release validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Release assets look complete.');
