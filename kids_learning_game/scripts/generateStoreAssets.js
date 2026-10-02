const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const FONT = {
  A: ['01110', '10001', '10001', '11111', '10001', '10001', '10001'],
  B: ['11110', '10001', '10001', '11110', '10001', '10001', '11110'],
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'],
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  F: ['11111', '10000', '10000', '11110', '10000', '10000', '10000'],
  G: ['01110', '10001', '10000', '10111', '10001', '10001', '01110'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  J: ['00111', '00010', '00010', '00010', '10010', '10010', '01100'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'],
  M: ['10001', '11011', '10101', '10101', '10001', '10001', '10001'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  Q: ['01110', '10001', '10001', '10001', '10101', '10010', '01101'],
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  S: ['01111', '10000', '10000', '01110', '00001', '00001', '11110'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  V: ['10001', '10001', '10001', '10001', '10001', '01010', '00100'],
  W: ['10001', '10001', '10001', '10101', '10101', '10101', '01010'],
  X: ['10001', '10001', '01010', '00100', '01010', '10001', '10001'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  Z: ['11111', '00001', '00010', '00100', '01000', '10000', '11111'],
  '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  '2': ['01110', '10001', '00001', '00110', '01000', '10000', '11111'],
  '3': ['11110', '00001', '00001', '01110', '00001', '00001', '11110'],
  '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  '6': ['00110', '01000', '10000', '11110', '10001', '10001', '01110'],
  '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  '9': ['01110', '10001', '10001', '01111', '00001', '00010', '01100'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
  '.': ['00000', '00000', '00000', '00000', '00000', '01100', '01100']
};

function crc32(buf) {
  let c = ~0;
  for (const byte of buf) {
    c ^= byte;
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([length, typeBuf, data, crc]);
}

function encodePng(width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    const row = y * (stride + 1);
    raw[row] = 0;
    rgba.copy(raw, row + 1, y * stride, y * stride + stride);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

function canvas(width, height) {
  const data = Buffer.alloc(width * height * 4, 255);
  function set(x, y, color) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const i = (y * width + x) * 4;
    data[i] = color[0];
    data[i + 1] = color[1];
    data[i + 2] = color[2];
    data[i + 3] = color[3] ?? 255;
  }
  function fillRect(x, y, w, h, color) {
    const x0 = Math.max(0, Math.trunc(x));
    const y0 = Math.max(0, Math.trunc(y));
    const x1 = Math.min(width, Math.trunc(x + w));
    const y1 = Math.min(height, Math.trunc(y + h));
    for (let yy = y0; yy < y1; yy++) {
      let i = (yy * width + x0) * 4;
      for (let xx = x0; xx < x1; xx++) {
        data[i] = color[0];
        data[i + 1] = color[1];
        data[i + 2] = color[2];
        data[i + 3] = 255;
        i += 4;
      }
    }
  }
  function fillGradient(top, bottom) {
    for (let y = 0; y < height; y++) {
      const t = height === 1 ? 0 : y / (height - 1);
      const color = [
        Math.round(top[0] + (bottom[0] - top[0]) * t),
        Math.round(top[1] + (bottom[1] - top[1]) * t),
        Math.round(top[2] + (bottom[2] - top[2]) * t)
      ];
      fillRect(0, y, width, 1, color);
    }
  }
  function text(value, x, y, scale, color) {
    let cursor = x;
    const letters = value.toUpperCase();
    for (const ch of letters) {
      const glyph = FONT[ch] || FONT[' '];
      for (let row = 0; row < glyph.length; row++) {
        for (let col = 0; col < glyph[row].length; col++) {
          if (glyph[row][col] === '1') fillRect(cursor + col * scale, y + row * scale, scale, scale, color);
        }
      }
      cursor += 6 * scale;
    }
    return cursor - x;
  }
  return { data, set, fillRect, fillGradient, text, textWidth, width, height };
}

function textWidth(value, scale) {
  return value.length * 6 * scale;
}

function gradientRgb(top, bottom, t) {
  return [
    Math.round(top[0] + (bottom[0] - top[0]) * t),
    Math.round(top[1] + (bottom[1] - top[1]) * t),
    Math.round(top[2] + (bottom[2] - top[2]) * t)
  ];
}

function edgeDistance(position, limit, radius) {
  if (position < radius) return radius - position;
  if (position >= limit - radius) return position - (limit - radius - 1);
  return 0;
}

function isInsideRoundedSquare(x, y, size, radius) {
  const dx = edgeDistance(x, size, radius);
  const dy = edgeDistance(y, size, radius);
  if (dx === 0 || dy === 0) return true;
  return dx * dx + dy * dy <= radius * radius;
}

function save(file, board) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, encodePng(board.width, board.height, board.data));
}

function roundedIcon(size, top, bottom, ink) {
  const board = canvas(size, size);
  const radius = Math.round(size * 0.18);
  for (let y = 0; y < size; y++) {
    const color = gradientRgb(top, bottom, y / (size - 1));
    for (let x = 0; x < size; x++) {
      const pixel = isInsideRoundedSquare(x, y, size, radius) ? color : [0, 0, 0, 0];
      board.set(x, y, pixel);
    }
  }
  return { board, ink };
}

const outDir = path.join(__dirname, '..', 'docs', 'store_assets');
const violet = [109, 40, 217];
const deep = [49, 46, 129];
const white = [255, 255, 255];
const yellow = [250, 204, 21];
const card = [255, 255, 255];

const icon = roundedIcon(512, [139, 92, 246], [6, 182, 212], white);
icon.board.fillRect(96, 150, 320, 150, white);
const iconLabel = 'BLITZ';
icon.board.text(iconLabel, Math.round((512 - icon.board.textWidth(iconLabel, 10)) / 2), 185, 10, violet);
icon.board.text('WORD', Math.round((512 - icon.board.textWidth('WORD', 6)) / 2), 340, 6, white);
save(path.join(outDir, 'icon_512.png'), icon.board);

const feature = canvas(1024, 500);
feature.fillGradient([109, 40, 217], [6, 182, 212]);
feature.text('WORD BLITZ', 80, 150, 10, white);
feature.text('ENGLISH AND SPANISH', 80, 280, 5, [224, 242, 254]);
feature.text('OFFLINE', 80, 360, 5, yellow);
save(path.join(outDir, 'feature_graphic_1024x500.png'), feature);

function screenshot(file, title, words) {
  const board = canvas(1080, 1920);
  board.fillGradient([139, 92, 246], [14, 165, 233]);
  board.text(title, 70, 80, 8, white);
  board.fillRect(80, 280, 920, 700, card);
  board.fillRect(250, 360, 580, 280, [224, 231, 255]);
  board.text(words[0], 180, 720, 8, deep);
  board.fillRect(140, 1100, 800, 140, white);
  board.text(words[1], 180, 1140, 6, violet);
  board.text('5 MINUTES', 70, 1400, 5, white);
  board.text('ENGLISH', 70, 1560, 5, yellow);
  board.text('SPANISH', 520, 1560, 5, yellow);
  save(file, board);
}

screenshot(path.join(outDir, 'screenshot_1.png'), 'WORD BLITZ', ['DOG', 'TYPE THE WORD']);
screenshot(path.join(outDir, 'screenshot_2.png'), 'TIME IS UP', ['SCORE', 'PLAY AGAIN']);

console.log('Wrote Word Blitz store PNGs to', outDir);
