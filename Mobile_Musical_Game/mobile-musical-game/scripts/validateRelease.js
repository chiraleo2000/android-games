const fs = require('fs');
const path = require('path');

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

const required = [
  'docs/store_assets/icon_512.png',
  'docs/store_assets/feature_graphic_1024x500.png',
  'docs/store_assets/short_description.txt',
  'docs/store_assets/full_description.txt',
];
for (const relativePath of required) {
  if (!exists(relativePath)) errors.push('missing ' + relativePath);
}

const assetDir = filePath('docs', 'store_assets');
const screenshots = exists('docs', 'store_assets')
  ? fs.readdirSync(assetDir).filter((name) => /screenshot/i.test(name) && name.endsWith('.png'))
  : [];
if (screenshots.length < 2) errors.push('need at least 2 screenshot PNGs in docs/store_assets');

if (exists('docs/store_assets/icon_512.png')) {
  const size = pngSize('docs/store_assets/icon_512.png');
  if (size && (size.width !== 512 || size.height !== 512)) errors.push('icon_512.png is ' + size.width + 'x' + size.height);
}
if (exists('docs/store_assets/feature_graphic_1024x500.png')) {
  const size = pngSize('docs/store_assets/feature_graphic_1024x500.png');
  if (size && (size.width !== 1024 || size.height !== 500)) errors.push('feature graphic is ' + size.width + 'x' + size.height);
}

if (exists('docs/store_assets/short_description.txt')) {
  const text = fs.readFileSync(filePath('docs/store_assets/short_description.txt'), 'utf8').trim();
  if (text.length === 0 || text.length > 80) errors.push('short description length ' + text.length);
}
if (exists('docs/store_assets/full_description.txt')) {
  const text = fs.readFileSync(filePath('docs/store_assets/full_description.txt'), 'utf8').trim();
  if (text.length === 0 || text.length > 4000) errors.push('full description length ' + text.length);
}

let targetSdk = null;
for (const relativePath of ['android/variables.gradle', 'android/gradle.properties', 'android/app/build.gradle', 'android/app/build.gradle.kts']) {
  if (!exists(relativePath)) continue;
  const text = fs.readFileSync(filePath(relativePath), 'utf8');
  const match = text.match(/targetSdk(?:Version)?\s*[= ]\s*(\d+)/);
  if (match) targetSdk = Number(match[1]);
}
if (targetSdk === null || targetSdk < 36) errors.push('targetSdk ' + (targetSdk ?? 'missing') + ' is below 36');

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('release validation ok (targetSdk ' + targetSdk + ')');
