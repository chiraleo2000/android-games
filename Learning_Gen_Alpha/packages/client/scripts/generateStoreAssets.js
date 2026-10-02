const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const outDir = path.join(__dirname, '..', 'docs', 'store_assets');

function crc32(buffer) {
  let crc = ~0;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const name = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([name, data])), 0);
  return Buffer.concat([length, name, data, crc]);
}

function png(width, height, paint) {
  const raw = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 3 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b] = paint(x, y, width, height);
      const i = row + 1 + x * 3;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function circle(x, y, cx, cy, radius) {
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'icon_512.png'), png(512, 512, (x, y, w, h) => {
  if (circle(x, y, w * 0.5, h * 0.48, 120)) return [67, 97, 238];
  if (circle(x, y, w * 0.32, h * 0.62, 36)) return [6, 214, 160];
  if (circle(x, y, w * 0.68, h * 0.64, 28)) return [255, 209, 102];
  return [10, 10, 46];
}));
fs.writeFileSync(path.join(outDir, 'feature_graphic_1024x500.png'), png(1024, 500, (x, y, w, h) => {
  if (circle(x, y, 180, h * 0.5, 70)) return [67, 97, 238];
  if (circle(x, y, 420, h * 0.42, 90)) return [6, 214, 160];
  if (circle(x, y, 760, h * 0.55, 60)) return [255, 209, 102];
  return [16, 16, 48];
}));
fs.writeFileSync(path.join(outDir, 'screenshot_world.png'), png(1080, 1920, (x, y, w, h) => {
  if (circle(x, y, w * 0.5, h * 0.42, 160)) return [67, 97, 238];
  if (y < 140) return [15, 23, 42];
  return [10, 10, 30];
}));
fs.writeFileSync(path.join(outDir, 'screenshot_puzzle.png'), png(1080, 1920, (x, y, w, h) => {
  if (y > 500 && y < 1100 && x > 80 && x < w - 80) return [30, 41, 59];
  if (y > 700 && y < 820 && x > 140 && x < 400) return [67, 97, 238];
  return [15, 23, 42];
}));

const shortDescription = 'Walk a 3D world and solve 8 on-device learning puzzles.';
const fullDescription = `Learning Gen Alpha is an educational adventure you can start immediately. Walk around a floating island and solve puzzles in math, science, logic, geography, words, code, fractions, and AI literacy.

Every answer is checked on the device. Hints, score, and a finished state stay in local storage. You do not need an account or a server connection to play the solo world.

Settings includes a privacy policy link and Clear All Data. Clearing data erases puzzle progress, and that progress is not restored.

An optional online lobby remains in the app for people who want it. The store entry is solo play, so the app does not wait on a server connection screen.

There are no ads and no analytics that leave the device.`;

if (shortDescription.length > 80) throw new Error('short description too long: ' + shortDescription.length);
if (fullDescription.length > 4000) throw new Error('full description too long');
fs.writeFileSync(path.join(outDir, 'short_description.txt'), shortDescription + '\n');
fs.writeFileSync(path.join(outDir, 'full_description.txt'), fullDescription + '\n');
console.log('Wrote store assets to', outDir);
