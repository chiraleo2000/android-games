/**
 * Writes solid branded PNGs for the Play listing, PWA icons, and splash screens.
 * Uses Node zlib only (no image dependency).
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NAVY = [0x0a, 0x0a, 0x1f];
const TEAL = [0x0b, 0x3a, 0x4a];
const CYAN = [0x00, 0x6a, 0x78];

const CRC_TABLE = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
            c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[n] = c >>> 0;
    }
    return table;
})();

function crc32(buf) {
    let c = 0xffffffff;
    for (const byte of buf) {
        c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
    const typeBuf = Buffer.from(type);
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
    return Buffer.concat([length, typeBuf, data, crc]);
}

function solidPng(width, height, [r, g, b]) {
    const row = Buffer.alloc(1 + width * 3);
    for (let x = 0; x < width; x++) {
        row[1 + x * 3] = r;
        row[2 + x * 3] = g;
        row[3 + x * 3] = b;
    }
    const raw = Buffer.alloc(row.length * height);
    for (let y = 0; y < height; y++) {
        row.copy(raw, y * row.length);
    }
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0);
    ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8;
    ihdr[9] = 2;
    const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    return Buffer.concat([
        signature,
        chunk('IHDR', ihdr),
        chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
        chunk('IEND', Buffer.alloc(0))
    ]);
}

function writePng(relativePath, width, height, color) {
    const fullPath = path.join(rootDir, relativePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, solidPng(width, height, color));
    const buf = fs.readFileSync(fullPath);
    const widthRead = buf.readUInt32BE(16);
    const heightRead = buf.readUInt32BE(20);
    if (widthRead !== width || heightRead !== height) {
        throw new Error(`${relativePath} wrote ${widthRead}x${heightRead}`);
    }
    console.log(`${relativePath} ${width}x${height} (${buf.length} bytes)`);
}

const iconSizes = [48, 72, 96, 128, 192, 256, 512];
for (const size of iconSizes) {
    writePng(`public/icons/icon-${size}.png`, size, size, NAVY);
}

writePng('docs/store_assets/icon_512.png', 512, 512, NAVY);
writePng('docs/store_assets/feature_graphic_1024x500.png', 1024, 500, TEAL);
writePng('docs/store_assets/screenshot_phone_01.png', 1080, 1920, NAVY);
writePng('docs/store_assets/screenshot_phone_02.png', 1080, 1920, CYAN);

const splashes = [
    ['android/app/src/main/res/drawable/splash.png', 480, 800],
    ['android/app/src/main/res/drawable-port-mdpi/splash.png', 320, 480],
    ['android/app/src/main/res/drawable-port-hdpi/splash.png', 480, 800],
    ['android/app/src/main/res/drawable-port-xhdpi/splash.png', 720, 1280],
    ['android/app/src/main/res/drawable-port-xxhdpi/splash.png', 1080, 1920],
    ['android/app/src/main/res/drawable-port-xxxhdpi/splash.png', 1440, 2560]
];
for (const [relativePath, width, height] of splashes) {
    writePng(relativePath, width, height, NAVY);
}
