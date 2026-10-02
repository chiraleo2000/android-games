const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

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
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
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
    const x0 = Math.max(0, x | 0);
    const y0 = Math.max(0, y | 0);
    const x1 = Math.min(width, (x + w) | 0);
    const y1 = Math.min(height, (y + h) | 0);
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
  function textWidth(value, scale) {
    return value.length * 6 * scale;
  }
  return { data, set, fillRect, fillGradient, text, textWidth, width, height };
}

function save(file, board) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, encodePng(board.width, board.height, board.data));
}

function roundedIcon(size, top, bottom, ink) {
  const board = canvas(size, size);
  const radius = Math.round(size * 0.18);
  for (let y = 0; y < size; y++) {
    const t = y / (size - 1);
    const color = [
      Math.round(top[0] + (bottom[0] - top[0]) * t),
      Math.round(top[1] + (bottom[1] - top[1]) * t),
      Math.round(top[2] + (bottom[2] - top[2]) * t)
    ];
    for (let x = 0; x < size; x++) {
      const dx = x < radius ? radius - x : x >= size - radius ? x - (size - radius - 1) : 0;
      const dy = y < radius ? radius - y : y >= size - radius ? y - (size - radius - 1) : 0;
      if (dx === 0 || dy === 0 || dx * dx + dy * dy <= radius * radius) {
        board.set(x, y, color);
      } else {
        board.set(x, y, [0, 0, 0, 0]);
      }
    }
  }
  return { board, ink };
}

const outDir = path.join(__dirname, '..', 'docs', 'store_assets');
const blue = [29, 78, 216];
const deep = [15, 23, 42];
const white = [255, 255, 255];
const green = [34, 197, 94];
const yellow = [250, 204, 21];
const slate = [51, 65, 85];
const pathColor = [241, 245, 249];

const icon = roundedIcon(512, [37, 99, 235], [22, 163, 74], white);
icon.board.fillRect(176, 150, 160, 130, white);
icon.board.fillRect(206, 110, 100, 70, white);
icon.board.fillRect(226, 132, 22, 22, blue);
icon.board.fillRect(264, 132, 22, 22, blue);
icon.board.fillRect(236, 78, 16, 40, yellow);
const iconLabel = 'LOGICLABS';
icon.board.text(iconLabel, Math.round((512 - icon.board.textWidth(iconLabel, 5)) / 2), 340, 5, white);
save(path.join(outDir, 'icon_512.png'), icon.board);

const feature = canvas(1024, 500);
feature.fillGradient([30, 64, 175], [21, 128, 61]);
feature.fillRect(70, 90, 360, 320, white);
for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    const wall = col === 0 || row === 4 || (col === 3 && row === 1);
    const color = wall ? slate : pathColor;
    feature.fillRect(96 + col * 62, 116 + row * 54, 54, 46, color);
  }
}
feature.fillRect(96 + 62, 116, 54, 46, green);
feature.fillRect(96 + 4 * 62, 116 + 3 * 54, 54, 46, yellow);
feature.text('LOGICLABS', 500, 150, 8, white);
feature.text('CODE THE MAZE', 500, 240, 5, [219, 234, 254]);
feature.text('OFFLINE', 500, 320, 5, yellow);
save(path.join(outDir, 'feature_graphic_1024x500.png'), feature);

function screenshot(file, title, subtitle) {
  const board = canvas(1080, 1920);
  board.fillGradient([224, 242, 254], [191, 219, 254]);
  board.fillRect(0, 0, 1080, 160, blue);
  board.text(title, 80, 48, 8, white);
  board.fillRect(70, 220, 940, 820, white);
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const wall = (row + col) % 4 === 0 && !(row === 0 && col === 0) && !(row === 4 && col === 4);
      board.fillRect(140 + col * 150, 280 + row * 140, 130, 120, wall ? slate : pathColor);
    }
  }
  board.fillRect(140, 280, 130, 120, green);
  board.fillRect(140 + 4 * 150, 280 + 4 * 140, 130, 120, yellow);
  board.fillRect(70, 1100, 280, 120, blue);
  board.fillRect(380, 1100, 280, 120, [234, 179, 8]);
  board.fillRect(690, 1100, 280, 120, [168, 85, 247]);
  board.text('MOVE', 110, 1140, 5, white);
  board.text('LOOP', 420, 1140, 5, white);
  board.text('IF', 780, 1140, 5, white);
  board.fillRect(70, 1320, 940, 160, green);
  board.text('RUN', 430, 1368, 8, white);
  board.text(subtitle, 80, 1600, 4, deep);
  save(file, board);
}

screenshot(path.join(outDir, 'screenshot_1.png'), 'LOGICLABS', 'TAP BLOCKS THEN RUN');
screenshot(path.join(outDir, 'screenshot_2.png'), 'REACH THE STAR', 'LOOPS AND TURNS');

console.log('Wrote LogicLabs store PNGs to', outDir);
