import { mkdir, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { chromium } from 'playwright';
import { build, preview } from 'vite';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const assetRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(assetRoot, '..', '..');

const outputDirs = {
  icon: path.join(assetRoot, 'app-icon'),
  feature: path.join(assetRoot, 'feature-graphic'),
  screenshots: path.join(assetRoot, 'screenshots'),
  reports: path.join(assetRoot, 'reports'),
};

const SCREENSHOT_DEVICES = [
  {
    id: 'phone-small',
    label: 'Phone (small)',
    deviceClass: 'phone',
    deviceFolder: 'small',
    portrait: { width: 720, height: 1280 },
    deviceScaleFactor: 2,
  },
  {
    id: 'phone-standard',
    label: 'Phone (standard)',
    deviceClass: 'phone',
    deviceFolder: 'standard',
    portrait: { width: 1080, height: 1920 },
    deviceScaleFactor: 2.5,
  },
  {
    id: 'phone-xl',
    label: 'Phone (XL)',
    deviceClass: 'phone',
    deviceFolder: 'xl',
    portrait: { width: 1440, height: 2560 },
    deviceScaleFactor: 2.5,
  },
  {
    id: 'tablet-7',
    label: 'Tablet (7-inch)',
    deviceClass: 'tablet',
    deviceFolder: '7-inch',
    portrait: { width: 1200, height: 1920 },
    deviceScaleFactor: 2,
  },
  {
    id: 'tablet-10',
    label: 'Tablet (10-inch)',
    deviceClass: 'tablet',
    deviceFolder: '10-inch',
    portrait: { width: 1600, height: 2560 },
    deviceScaleFactor: 2,
  },
  {
    id: 'tablet-pro',
    label: 'Tablet (pro / 12.9-inch)',
    deviceClass: 'tablet',
    deviceFolder: 'pro',
    portrait: { width: 2048, height: 2732 },
    deviceScaleFactor: 2,
  },
];

function buildScreenshotTargets() {
  const targets = [];
  for (const device of SCREENSHOT_DEVICES) {
    const portraitPx = device.portrait;
    const landscapePx = { width: portraitPx.height, height: portraitPx.width };

    for (const orientation of ['portrait', 'landscape']) {
      const expected = orientation === 'portrait' ? portraitPx : landscapePx;
      targets.push({
        id: `${device.id}-${orientation}`,
        label: `${device.label} ${orientation}`,
        folder: path.join(device.deviceClass, device.deviceFolder, orientation),
        viewport: {
          width: Math.round(expected.width / device.deviceScaleFactor),
          height: Math.round(expected.height / device.deviceScaleFactor),
          deviceScaleFactor: device.deviceScaleFactor,
          isMobile: false,
          hasTouch: false,
        },
        expected,
      });
    }
  }
  return targets;
}

const screenshotTargets = buildScreenshotTargets();

const screenshotPages = [
  {
    id: '01-start-menu',
    label: 'Start menu',
    prepare: async page => {
      await page.goto('/?storeScreenshot=1', { waitUntil: 'networkidle' });
      await page.locator('.start-screen').waitFor({ state: 'visible' });
    },
  },
  {
    id: '02-active-game',
    label: 'Active game',
    prepare: async page => {
      await page.goto('/?storeScreenshot=1', { waitUntil: 'networkidle' });
      await clickButtonByText(page, 'START SPELLING');
      await page.locator('.game-screen').waitFor({ state: 'visible' });
    },
  },
  {
    id: '03-game-over',
    label: 'Game over',
    prepare: async page => {
      await page.goto('/?storeScreenshot=1', { waitUntil: 'networkidle' });
      await clickButtonByText(page, 'START SPELLING');
      await page.locator('.game-screen').waitFor({ state: 'visible' });
      await clickButtonByText(page, 'EXIT GAME');
      await page.locator('.gameover-screen').waitFor({ state: 'visible' });
    },
  },
];

async function clickButtonByText(page, label) {
  await page.evaluate(buttonLabel => {
    const button = Array.from(document.querySelectorAll('button')).find(candidate => {
      return candidate.textContent?.trim().includes(buttonLabel);
    });

    if (!(button instanceof HTMLButtonElement)) {
      throw new Error(`Button not found: ${buttonLabel}`);
    }

    button.click();
  }, label);
}

const screenshotCss = `
  *, *::before, *::after {
    animation-duration: 0.001s !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
  }
  input { caret-color: transparent !important; }
`;

const beeMarkSvg = `
  <g transform="translate(0 0)">
    <ellipse cx="198" cy="198" rx="62" ry="82" fill="#fff8d7" opacity="0.86" transform="rotate(-28 198 198)"/>
    <ellipse cx="314" cy="198" rx="62" ry="82" fill="#fff8d7" opacity="0.86" transform="rotate(28 314 198)"/>
    <ellipse cx="256" cy="282" rx="104" ry="128" fill="#2e2c27"/>
    <ellipse cx="256" cy="272" rx="86" ry="108" fill="#f0bd43"/>
    <path d="M184 247c35 23 109 23 144 0v42c-38 20-106 20-144 0z" fill="#2e2c27"/>
    <path d="M184 326c38 22 106 22 144 0v40c-34 26-110 26-144 0z" fill="#2e2c27"/>
    <circle cx="222" cy="220" r="12" fill="#2e2c27"/>
    <circle cx="290" cy="220" r="12" fill="#2e2c27"/>
    <path d="M236 252c12 12 28 12 40 0" fill="none" stroke="#2e2c27" stroke-width="12" stroke-linecap="round"/>
    <path d="M220 138c-32-42-64-52-92-34" fill="none" stroke="#2e2c27" stroke-width="14" stroke-linecap="round"/>
    <path d="M292 138c32-42 64-52 92-34" fill="none" stroke="#2e2c27" stroke-width="14" stroke-linecap="round"/>
    <circle cx="122" cy="102" r="18" fill="#b85d3c"/>
    <circle cx="390" cy="102" r="18" fill="#b85d3c"/>
  </g>
`;

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#f6d86b"/>
  <path d="M0 360c90-50 177-48 262 6 82 52 165 58 250 18v128H0z" fill="#3b5f41" opacity="0.16"/>
  <path d="M0 0h512v138c-62-28-121-30-176-7-42 18-81 18-118 0C154 101 82 104 0 144z" fill="#fff7d8" opacity="0.42"/>
  ${beeMarkSvg}
</svg>`;

const featureGraphicSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="500" viewBox="0 0 1024 500">
  <rect width="1024" height="500" fill="#fff8df"/>
  <path d="M0 388c118-58 222-56 312 5 80 54 176 59 289 17 137-50 277-26 423 66v24H0z" fill="#3b5f41" opacity="0.17"/>
  <path d="M0 0h1024v126c-122-42-239-41-351 4-67 27-134 27-202 0C322 72 165 77 0 146z" fill="#f0bd43" opacity="0.19"/>
  <g transform="translate(72 76) scale(.34)">${beeMarkSvg}</g>
  <g transform="translate(684 62)">
    <rect x="0" y="0" width="314" height="368" rx="34" fill="#fefcf4" stroke="#3b5f41" stroke-width="8"/>
    <rect x="30" y="36" width="78" height="54" rx="14" fill="#ecf4e8"/>
    <rect x="124" y="36" width="156" height="54" rx="14" fill="#f7ead4"/>
    <rect x="30" y="120" width="250" height="92" rx="22" fill="#3b5f41"/>
    <rect x="56" y="150" width="40" height="42" rx="10" fill="#f0bd43"/>
    <rect x="106" y="150" width="40" height="42" rx="10" fill="#fff8df"/>
    <rect x="156" y="150" width="40" height="42" rx="10" fill="#fff8df"/>
    <rect x="206" y="150" width="40" height="42" rx="10" fill="#f0bd43"/>
    <rect x="30" y="240" width="250" height="50" rx="16" fill="#fff3cf"/>
    <rect x="30" y="308" width="250" height="42" rx="21" fill="#b85d3c"/>
  </g>
  <text x="246" y="148" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="900" fill="#2e2c27">SpellingBee</text>
  <text x="246" y="206" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="900" fill="#2e2c27">Dictionary</text>
  <text x="252" y="256" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#3b5f41">English Spelling Practice Game</text>
  <text x="252" y="296" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#5d6f77">Hints, levels, streaks,</text>
  <text x="252" y="324" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#5d6f77">timed rounds &amp; 3,600 words</text>
  <g font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" fill="#2e2c27">
    <rect x="252" y="350" width="128" height="50" rx="25" fill="#f0bd43"/>
    <text x="288" y="383">Easy</text>
    <rect x="400" y="350" width="158" height="50" rx="25" fill="#ecf4e8"/>
    <text x="434" y="383">Medium</text>
    <rect x="252" y="414" width="128" height="50" rx="25" fill="#f7ead4"/>
    <text x="290" y="447">Hard</text>
  </g>
</svg>`;

async function resetOutput() {
  await Promise.all(Object.values(outputDirs).map(dir => rm(dir, { recursive: true, force: true })));
  await Promise.all(Object.values(outputDirs).map(dir => mkdir(dir, { recursive: true })));
}

async function writeStoreGraphics() {
  const iconPath = path.join(outputDirs.icon, 'app-icon-512.png');
  const featurePath = path.join(outputDirs.feature, 'feature-graphic-1024x500.png');

  await sharp(Buffer.from(iconSvg)).png({ compressionLevel: 9, palette: false }).toFile(iconPath);
  await sharp(Buffer.from(featureGraphicSvg)).png({ compressionLevel: 9, palette: false }).toFile(featurePath);

  return [
    await assetInfo(iconPath, 'Google Play app icon'),
    await assetInfo(featurePath, 'Google Play feature graphic'),
  ];
}

async function assetInfo(filePath, label) {
  const metadata = await sharp(filePath).metadata();
  const fileStat = await stat(filePath);
  return {
    label,
    file: path.relative(repoRoot, filePath).replaceAll(path.sep, '/'),
    width: metadata.width,
    height: metadata.height,
    bytes: fileStat.size,
  };
}

async function withPreviewServer(callback) {
  await build({ root: repoRoot, logLevel: 'warn' });
  const server = await preview({
    root: repoRoot,
    logLevel: 'warn',
    preview: { host: '127.0.0.1', port: 4173, strictPort: false },
  });

  const address = server.httpServer.address();
  const port = typeof address === 'object' && address ? address.port : 4173;
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    return await callback(baseUrl);
  } finally {
    await new Promise(resolve => server.httpServer.close(resolve));
  }
}

async function captureScreenshots(baseUrl) {
  const browser = await chromium.launch();
  const screenshots = [];

  try {
    for (const target of screenshotTargets) {
      const targetDir = path.join(outputDirs.screenshots, target.folder);
      await mkdir(targetDir, { recursive: true });

      for (const screen of screenshotPages) {
        const context = await browser.newContext({
          baseURL: baseUrl,
          viewport: { width: target.viewport.width, height: target.viewport.height },
          deviceScaleFactor: target.viewport.deviceScaleFactor,
          isMobile: target.viewport.isMobile,
          hasTouch: target.viewport.hasTouch,
          colorScheme: 'light',
          locale: 'en-US',
        });
        const page = await context.newPage();

        await screen.prepare(page);
        await page.addStyleTag({ content: screenshotCss });
        await page.evaluate(async () => {
          await new Promise(resolve => requestAnimationFrame(resolve));
          await new Promise(resolve => requestAnimationFrame(resolve));

          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }

          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        });
        await page.waitForTimeout(75);
        await page.evaluate(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        });

        const filePath = path.join(targetDir, `${screen.id}.png`);
        await page.screenshot({ path: filePath, fullPage: false, animations: 'disabled', scale: 'device' });
        screenshots.push({
          ...(await assetInfo(filePath, `${target.label} - ${screen.label}`)),
          target: target.id,
          screen: screen.id,
          expected: target.expected,
        });

        await context.close();
      }
    }
  } finally {
    await browser.close();
  }

  return screenshots;
}

async function main() {
  console.log('Preparing tools/store-assets output folders...');
  await resetOutput();

  console.log('Generating Play Console icon and feature graphic...');
  const graphics = await writeStoreGraphics();

  console.log('Building and launching a local Vite preview for screenshots...');
  const screenshots = await withPreviewServer(captureScreenshots);

  const manifest = {
    generatedAt: new Date().toISOString(),
    app: 'SpellingBee Dictionary - English Spelling Practice Game',
    requirements: {
      appIcon: 'PNG, 512 x 512 px, <= 1 MB',
      featureGraphic: 'PNG, 1024 x 500 px, <= 15 MB',
      screenshots: 'PNG screenshots for phone/tablet in portrait and landscape',
    },
    graphics,
    screenshots,
  };

  const manifestPath = path.join(outputDirs.reports, 'asset-manifest.json');
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${graphics.length + screenshots.length} image assets.`);
  console.log(`Manifest: ${path.relative(repoRoot, manifestPath).replaceAll(path.sep, '/')}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});