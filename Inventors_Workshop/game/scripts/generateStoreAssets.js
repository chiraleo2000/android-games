import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'docs', 'store_assets');

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
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function mix(a, b, t) {
  return a.map((channel, index) => Math.round(channel + (b[index] - channel) * t));
}

function circle(x, y, cx, cy, radius) {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= radius * radius;
}

function icon(x, y, width, height) {
  const paper = [243, 234, 215];
  const brass = [180, 83, 9];
  const sky = [56, 189, 248];
  const base = mix(paper, [255, 247, 237], y / height);
  if (circle(x, y, width * 0.38, height * 0.48, width * 0.22)) return brass;
  if (circle(x, y, width * 0.66, height * 0.42, width * 0.14)) return sky;
  if (circle(x, y, width * 0.5, height * 0.72, width * 0.08)) return [15, 23, 42];
  return base;
}

function feature(x, y, width, height) {
  const base = mix([124, 45, 18], [254, 243, 199], x / width);
  if (y > height * 0.62 && y < height * 0.7) return [255, 251, 235];
  if (circle(x, y, width * 0.22, height * 0.42, 70)) return [251, 191, 36];
  if (circle(x, y, width * 0.4, height * 0.46, 110)) return [14, 165, 233];
  if (circle(x, y, width * 0.62, height * 0.4, 48)) return [15, 23, 42];
  return base;
}

function screenshot(scene) {
  return (x, y, width, height) => {
    const wood = [243, 234, 215];
    const header = y < 90 ? [154, 52, 18] : wood;
    if (y < 90) return header;
    if (scene === 'play' && circle(x, y, width * 0.32, height * 0.42, 70)) return [251, 191, 36];
    if (scene === 'play' && circle(x, y, width * 0.55, height * 0.46, 110)) return [56, 189, 248];
    if (scene === 'goal' && y > height * 0.55 && y < height * 0.75 && x > 40 && x < width - 40) return [255, 251, 235];
    if (scene === 'goal' && circle(x, y, width * 0.5, height * 0.38, 36)) return [20, 184, 166];
    if (x % 40 === 0 || y % 40 === 0) return [232, 214, 184];
    return wood;
  };
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'icon_512.png'), png(512, 512, icon));
fs.writeFileSync(path.join(outDir, 'feature_graphic_1024x500.png'), png(1024, 500, feature));
fs.writeFileSync(path.join(outDir, 'screenshot_workshop.png'), png(1080, 1920, screenshot('play')));
fs.writeFileSync(path.join(outDir, 'screenshot_challenge.png'), png(1080, 1920, screenshot('goal')));

const shortDescription = 'Build gear machines and solve 20 on-device workshop challenges.';
const fullDescription = `Inventors Workshop is an educational physics sandbox for kids and families. Place gears, a motor, pulleys, wheels, springs, hinges, switches, and blocks on a touch workspace. Connect them, then press Play and watch motion travel through the machine.

Gear size changes speed. A larger gear turns slower than a smaller gear driven by the same motor. Pause to adjust the build, rotate parts, and try again.

Twenty challenges cover four themes: transmit power, lift with springs and hinges, hit a switch, and reach a target. Each goal has its own win condition. A short tutorial introduces the tools on first launch.

Save a machine on the device or load it later. Export and import a JSON file when you want to share a design locally. There is no account, no online community, no advertising, and no analytics that leave the device.

Clear All Data in Settings erases the saved machine and challenge progress. After you clear data, progress is not restored.

Inventors Workshop is designed for learning on a phone or tablet. Play data stays on the device.`;

if (shortDescription.length > 80) {
  throw new Error(`Short description is ${shortDescription.length} characters`);
}
if (fullDescription.length > 4000) {
  throw new Error(`Full description is ${fullDescription.length} characters`);
}

fs.writeFileSync(path.join(outDir, 'short_description.txt'), `${shortDescription}\n`);
fs.writeFileSync(path.join(outDir, 'full_description.txt'), `${fullDescription}\n`);
console.log('Wrote store assets to', outDir);
