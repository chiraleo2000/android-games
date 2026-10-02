import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const html = path.join(repoRoot, 'tools', 'store-assets', 'testing', 'test-results.html');
const outDir = path.join(repoRoot, 'tools', 'store-assets', 'testing');
fs.mkdirSync(outDir, { recursive: true });

const sizes = [
  { name: 'test-results-1280x720.png',  w: 1280, h: 720 },
  { name: 'test-results-1024x500.png',  w: 1024, h: 500 },
  { name: 'test-results-1920x1080.png', w: 1920, h: 1080 },
];

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
try {
  for (const s of sizes) {
    const page = await browser.newPage();
    await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(html).href, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 300));
    const out = path.join(outDir, s.name);
    await page.screenshot({ path: out, type: 'png', fullPage: false });
    console.log(`Saved ${path.relative(repoRoot, out)} (${(fs.statSync(out).size/1024).toFixed(1)} KB)`);
    await page.close();
  }
} finally {
  await browser.close();
}
