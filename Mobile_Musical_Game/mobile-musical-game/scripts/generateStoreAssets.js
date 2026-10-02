const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const outDir = path.join(__dirname, '..', 'docs', 'store_assets');

function crc32(buffer) {
  let crc = ~0;
  for (let i = 0; i < buffer.length; i += 1) {
    crc ^= buffer[i];
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
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
      const index = row + 1 + x * 3;
      raw[index] = r;
      raw[index + 1] = g;
      raw[index + 2] = b;
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
  if (circle(x, y, w * 0.5, h * 0.55, 150)) return [74, 144, 226];
  if (circle(x, y, w * 0.35, h * 0.4, 40)) return [255, 215, 0];
  return [15, 40, 80];
}));
fs.writeFileSync(path.join(outDir, 'feature_graphic_1024x500.png'), png(1024, 500, (x, y, w, h) => {
  if (circle(x, y, 220, h * 0.5, 90)) return [255, 215, 0];
  if (circle(x, y, 520, h * 0.48, 120)) return [74, 144, 226];
  if (circle(x, y, 800, h * 0.52, 70)) return [205, 127, 50];
  return [10, 30, 60];
}));
fs.writeFileSync(path.join(outDir, 'screenshot_library.png'), png(1080, 1920, (x, y, w) => {
  if (y < 160) return [74, 144, 226];
  if (y > 240 && y < 420 && x > 60 && x < w - 60) return [255, 255, 255];
  if (y > 460 && y < 640 && x > 60 && x < w - 60) return [255, 248, 230];
  return [245, 245, 245];
}));
fs.writeFileSync(path.join(outDir, 'screenshot_play.png'), png(1080, 1920, (x, y, w, h) => {
  if (circle(x, y, w * 0.5, h * 0.38, 180)) return [205, 127, 50];
  if (y > h * 0.72) return [42, 42, 42];
  return [26, 26, 26];
}));

const shortDescription = 'Play Thai and world instruments with synthesized sound.';
const fullDescription = `Musical Instruments lets you explore Thai and international instruments on your device. Tap to strike, pluck, or press. Each instrument has its own synthesized tone, created in the app from oscillator waveforms. No recorded commercial samples are included.

Open an instrument to orbit and zoom a generated 3D model, then play its notes. Read a short cultural note in Thai and English.

At least six instruments cover striking, plucking, and pressing, with Thai and English names.

Settings stores your volume and language choices on the device. Privacy Policy is linked from Settings. Clear All Data erases saved preferences and the last instrument. Nothing is restored after you clear data.

There are no accounts, no ads, and no analytics that leave the device.`;

if (shortDescription.length > 80) throw new Error('short description too long');
if (fullDescription.length > 4000) throw new Error('full description too long');
fs.writeFileSync(path.join(outDir, 'short_description.txt'), shortDescription + '\n');
fs.writeFileSync(path.join(outDir, 'full_description.txt'), fullDescription + '\n');
console.log('Wrote store assets to', outDir);
