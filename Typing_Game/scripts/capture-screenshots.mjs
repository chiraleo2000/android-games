// Captures phone + tablet UI screenshots in portrait and landscape for the
// menu, game, and game-over screens. Outputs to tools/store-assets/screenshots/.
//
// Usage:
//   1. Start the dev server in one terminal: npm run dev -- --host 127.0.0.1 --port 3001
//   2. Run: node scripts/capture-screenshots.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const baseUrl = process.env.SCREENSHOT_URL || 'http://127.0.0.1:3001/';

const devices = [
  { name: 'phone',  orientation: 'portrait',  width: 1080, height: 1920, folder: 'phone' },
  { name: 'phone',  orientation: 'landscape', width: 1920, height: 1080, folder: 'phone' },
  { name: 'tablet', orientation: 'portrait',  width: 1600, height: 2560, folder: 'tablet' },
  { name: 'tablet', orientation: 'landscape', width: 2560, height: 1600, folder: 'tablet' },
];

const screens = [
  { key: 'menu',     query: '' },
  { key: 'game',     query: '?screen=game' },
  { key: 'gameover', query: '?screen=gameover' },
];

function outPath(device, screenKey) {
  const dir = path.join(repoRoot, 'tools', 'store-assets', 'screenshots', device.folder);
  fs.mkdirSync(dir, { recursive: true });
  const fileName = `wordsprint-${screenKey}-${device.name}-${device.orientation}-${device.width}x${device.height}.png`;
  return path.join(dir, fileName);
}

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
  });

  try {
    for (const device of devices) {
      for (const screen of screens) {
        const page = await browser.newPage();
        await page.setViewport({ width: device.width, height: device.height, deviceScaleFactor: 1 });
        const url = baseUrl.replace(/\/$/, '/') + screen.query;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
        // Give animations/fonts a moment to settle
        await new Promise((r) => setTimeout(r, 600));
        const out = outPath(device, screen.key);
        await page.screenshot({ path: out, type: 'png', fullPage: false });
        const size = (fs.statSync(out).size / 1024).toFixed(1);
        console.log(`Saved ${path.relative(repoRoot, out)} (${size} KB)`);
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
