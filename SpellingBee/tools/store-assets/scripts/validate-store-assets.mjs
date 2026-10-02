import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const assetRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(assetRoot, '..', '..');

const MB = 1024 * 1024;

const requiredAssets = [
  {
    label: 'App icon',
    file: path.join(assetRoot, 'app-icon', 'app-icon-512.png'),
    width: 512,
    height: 512,
    maxBytes: 1 * MB,
  },
  {
    label: 'Feature graphic',
    file: path.join(assetRoot, 'feature-graphic', 'feature-graphic-1024x500.png'),
    width: 1024,
    height: 500,
    maxBytes: 15 * MB,
  },
];

const DEVICE_SCREENSHOT_SIZES = [
  { deviceClass: 'phone', folder: 'small', width: 720, height: 1280 },
  { deviceClass: 'phone', folder: 'standard', width: 1080, height: 1920 },
  { deviceClass: 'phone', folder: 'xl', width: 1440, height: 2560 },
  { deviceClass: 'tablet', folder: '7-inch', width: 1200, height: 1920 },
  { deviceClass: 'tablet', folder: '10-inch', width: 1600, height: 2560 },
  { deviceClass: 'tablet', folder: 'pro', width: 2048, height: 2732 },
];

const screenshotSpecs = [];
for (const size of DEVICE_SCREENSHOT_SIZES) {
  screenshotSpecs.push({
    folder: path.join(size.deviceClass, size.folder, 'portrait'),
    width: size.width,
    height: size.height,
  });
  screenshotSpecs.push({
    folder: path.join(size.deviceClass, size.folder, 'landscape'),
    width: size.height,
    height: size.width,
  });
}

const screenshotNames = ['01-start-menu.png', '02-active-game.png', '03-game-over.png'];

for (const spec of screenshotSpecs) {
  for (const name of screenshotNames) {
    requiredAssets.push({
      label: `${spec.folder.replaceAll(path.sep, '/')} ${name}`,
      file: path.join(assetRoot, 'screenshots', spec.folder, name),
      width: spec.width,
      height: spec.height,
      maxBytes: 8 * MB,
    });
  }
}

async function assertImage(asset) {
  const metadata = await sharp(asset.file).metadata();
  const fileStat = await stat(asset.file);

  if (metadata.format !== 'png') {
    throw new Error(`${asset.label} must be PNG, got ${metadata.format}`);
  }
  if (metadata.width !== asset.width || metadata.height !== asset.height) {
    throw new Error(`${asset.label} expected ${asset.width}x${asset.height}, got ${metadata.width}x${metadata.height}`);
  }
  if (fileStat.size > asset.maxBytes) {
    throw new Error(`${asset.label} is ${(fileStat.size / MB).toFixed(2)} MB, limit is ${(asset.maxBytes / MB).toFixed(2)} MB`);
  }

  const stats = await sharp(asset.file).stats();
  const maxDeviation = Math.max(...stats.channels.slice(0, 3).map(channel => channel.stdev));
  if (maxDeviation < 2) {
    throw new Error(`${asset.label} appears blank or nearly blank`);
  }

  return {
    file: path.relative(repoRoot, asset.file).replaceAll(path.sep, '/'),
    width: metadata.width,
    height: metadata.height,
    bytes: fileStat.size,
  };
}

async function main() {
  await readdir(assetRoot);
  const results = [];

  for (const asset of requiredAssets) {
    results.push(await assertImage(asset));
  }

  console.table(results);
  console.log(`Validated ${results.length} Play Store assets.`);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});