#!/usr/bin/env node

/**
 * Asset Validation Script
 * 
 * Validates that all required assets exist and meet size requirements
 * for Google Play Store deployment.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

// Required icon sizes
const REQUIRED_ICONS = [
    { size: 48, path: 'public/icons/icon-48.png', maxSize: 500 * 1024 },
    { size: 72, path: 'public/icons/icon-72.png', maxSize: 500 * 1024 },
    { size: 96, path: 'public/icons/icon-96.png', maxSize: 500 * 1024 },
    { size: 128, path: 'public/icons/icon-128.png', maxSize: 500 * 1024 },
    { size: 192, path: 'public/icons/icon-192.png', maxSize: 500 * 1024 },
    { size: 256, path: 'public/icons/icon-256.png', maxSize: 500 * 1024 },
    { size: 512, path: 'public/icons/icon-512.png', maxSize: 500 * 1024 }
];

// Required splash screens
const REQUIRED_SPLASH_SCREENS = [
    { name: 'splash.png', path: 'android/app/src/main/res/drawable/splash.png', maxSize: 1024 * 1024 },
    { name: 'splash-hdpi', path: 'android/app/src/main/res/drawable-port-hdpi/splash.png', maxSize: 1024 * 1024 },
    { name: 'splash-mdpi', path: 'android/app/src/main/res/drawable-port-mdpi/splash.png', maxSize: 1024 * 1024 },
    { name: 'splash-xhdpi', path: 'android/app/src/main/res/drawable-port-xhdpi/splash.png', maxSize: 1024 * 1024 },
    { name: 'splash-xxhdpi', path: 'android/app/src/main/res/drawable-port-xxhdpi/splash.png', maxSize: 1024 * 1024 },
    { name: 'splash-xxxhdpi', path: 'android/app/src/main/res/drawable-port-xxxhdpi/splash.png', maxSize: 1024 * 1024 }
];

// Required manifest
const REQUIRED_MANIFEST = 'public/manifest.json';

// GIF size limit
const GIF_MAX_SIZE = 2 * 1024 * 1024; // 2MB

let errors = [];
let warnings = [];
let passed = 0;

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function checkFileExists(filePath) {
    const fullPath = path.join(rootDir, filePath);
    return fs.existsSync(fullPath);
}

function getFileSize(filePath) {
    const fullPath = path.join(rootDir, filePath);
    try {
        const stats = fs.statSync(fullPath);
        return stats.size;
    } catch {
        // A missing path is reported by the caller; the size is unknown.
        return null;
    }
}

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function readPngDimensions(filePath) {
    const fullPath = path.join(rootDir, filePath);
    let buf;
    try {
        buf = fs.readFileSync(fullPath);
    } catch {
        return null;
    }
    if (buf.length < 24 || !buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
        return null;
    }
    if (buf.subarray(12, 16).toString('ascii') !== 'IHDR') {
        return null;
    }
    return {
        width: buf.readUInt32BE(16),
        height: buf.readUInt32BE(20)
    };
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function validateIcons() {
    log('\n📱 Validating Icons...', colors.cyan);
    
    REQUIRED_ICONS.forEach(icon => {
        if (!checkFileExists(icon.path)) {
            errors.push(`Missing icon: ${icon.path} (${icon.size}x${icon.size})`);
            log(`  ✗ ${icon.size}x${icon.size} - MISSING`, colors.red);
        } else {
            const size = getFileSize(icon.path);
            const dims = readPngDimensions(icon.path);
            if (dims?.width !== icon.size || dims?.height !== icon.size) {
                const actual = dims ? `${dims.width}x${dims.height}` : 'not a PNG';
                errors.push(`Icon ${icon.path} must be ${icon.size}x${icon.size} (found ${actual})`);
                log(`  ✗ ${icon.size}x${icon.size} - ${actual}`, colors.red);
            } else if (size > icon.maxSize) {
                warnings.push(`Icon ${icon.path} is too large: ${formatBytes(size)} (max: ${formatBytes(icon.maxSize)})`);
                log(`  ⚠ ${icon.size}x${icon.size} - TOO LARGE (${formatBytes(size)})`, colors.yellow);
            } else {
                passed++;
                log(`  ✓ ${icon.size}x${icon.size} - OK (${formatBytes(size)})`, colors.green);
            }
        }
    });
}

function validateSplashScreens() {
    log('\n🎨 Validating Splash Screens...', colors.cyan);
    
    REQUIRED_SPLASH_SCREENS.forEach(splash => {
        if (!checkFileExists(splash.path)) {
            errors.push(`Missing splash screen: ${splash.name}`);
            log(`  ✗ ${splash.name} - MISSING`, colors.red);
        } else {
            const size = getFileSize(splash.path);
            if (size > splash.maxSize) {
                warnings.push(`Splash screen ${splash.name} is too large: ${formatBytes(size)} (max: ${formatBytes(splash.maxSize)})`);
                log(`  ⚠ ${splash.name} - TOO LARGE (${formatBytes(size)})`, colors.yellow);
            } else {
                passed++;
                log(`  ✓ ${splash.name} - OK (${formatBytes(size)})`, colors.green);
            }
        }
    });
}

function validateManifest() {
    log('\n📄 Validating Manifest...', colors.cyan);
    
    if (!checkFileExists(REQUIRED_MANIFEST)) {
        errors.push(`Missing manifest: ${REQUIRED_MANIFEST}`);
        log(`  ✗ manifest.json - MISSING`, colors.red);
    } else {
        try {
            const manifest = JSON.parse(fs.readFileSync(path.join(rootDir, REQUIRED_MANIFEST), 'utf8'));
            const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
            if (icons.length === 0) {
                errors.push('manifest.json does not list any icons');
                log(`  ✗ manifest.json - NO ICONS`, colors.red);
            } else {
                let iconsOk = true;
                icons.forEach((icon) => {
                    const src = typeof icon.src === 'string' ? icon.src.replace(/^\//, '') : '';
                    const iconPath = src ? path.posix.join('public', src) : '';
                    if (!iconPath || !checkFileExists(iconPath)) {
                        iconsOk = false;
                        errors.push(`Manifest icon missing on disk: ${icon.src || '(empty src)'}`);
                        log(`  ✗ ${icon.src || 'icon'} - MISSING`, colors.red);
                    }
                });
                if (iconsOk) {
                    passed++;
                    log(`  ✓ manifest.json - OK (${icons.length} icons on disk)`, colors.green);
                }
            }
        } catch (error) {
            errors.push(`manifest.json is not valid JSON: ${error.message}`);
            log(`  ✗ manifest.json - INVALID JSON`, colors.red);
        }
    }
}

const STORE_DIR = 'docs/store_assets';
const STORE_ICON = 'docs/store_assets/icon_512.png';
const STORE_FEATURE = 'docs/store_assets/feature_graphic_1024x500.png';
const STORE_SHORT = 'docs/store_assets/store_short_description.txt';
const STORE_FULL = 'docs/store_assets/store_description.txt';
const SHORT_DESCRIPTION_MAX = 80;
const FULL_DESCRIPTION_MAX = 4000;

function expectExactPng(relativePath, width, height) {
    if (!checkFileExists(relativePath)) {
        errors.push(`Missing store asset: ${relativePath}`);
        log(`  ✗ ${relativePath} - MISSING`, colors.red);
        return;
    }
    const dims = readPngDimensions(relativePath);
    if (!dims || dims.width !== width || dims.height !== height) {
        const actual = dims ? `${dims.width}x${dims.height}` : 'not a PNG';
        errors.push(`${relativePath} must be ${width}x${height} (found ${actual})`);
        log(`  ✗ ${relativePath} - ${actual}`, colors.red);
        return;
    }
    passed++;
    log(`  ✓ ${relativePath} - ${width}x${height}`, colors.green);
}

function validateDescriptionLength(relativePath, maxLength, label) {
    if (!checkFileExists(relativePath)) {
        errors.push(`Missing ${label}: ${relativePath}`);
        log(`  ✗ ${label} - MISSING`, colors.red);
        return;
    }
    const text = fs.readFileSync(path.join(rootDir, relativePath), 'utf8').replace(/^\uFEFF/, '').trim();
    if (text.length === 0) {
        errors.push(`${label} is empty: ${relativePath}`);
        log(`  ✗ ${label} - EMPTY`, colors.red);
        return;
    }
    if (text.length > maxLength) {
        errors.push(`${label} is ${text.length} characters (max ${maxLength}): ${relativePath}`);
        log(`  ✗ ${label} - TOO LONG (${text.length}/${maxLength})`, colors.red);
        return;
    }
    passed++;
    log(`  ✓ ${label} - ${text.length}/${maxLength} characters`, colors.green);
}

function validateStoreListing() {
    log('\n🏪 Validating Store Listing...', colors.cyan);

    expectExactPng(STORE_ICON, 512, 512);
    expectExactPng(STORE_FEATURE, 1024, 500);

    const storeDir = path.join(rootDir, STORE_DIR);
    const screenshots = fs.existsSync(storeDir)
        ? fs.readdirSync(storeDir).filter((name) => /^screenshot.*\.png$/i.test(name))
        : [];

    if (screenshots.length < 2) {
        errors.push(`Need at least 2 phone screenshots in ${STORE_DIR} (found ${screenshots.length})`);
        log(`  ✗ phone screenshots - ${screenshots.length} (need 2)`, colors.red);
    } else {
        let screenshotsOk = true;
        screenshots.forEach((name) => {
            const relativePath = path.posix.join(STORE_DIR, name);
            const dims = readPngDimensions(relativePath);
            if (!dims || dims.width < 320 || dims.height < 320) {
                screenshotsOk = false;
                const actual = dims ? `${dims.width}x${dims.height}` : 'not a PNG';
                errors.push(`Phone screenshot ${relativePath} is not a usable PNG (${actual})`);
                log(`  ✗ ${name} - ${actual}`, colors.red);
            }
        });
        if (screenshotsOk) {
            passed++;
            log(`  ✓ phone screenshots - ${screenshots.length}`, colors.green);
        }
    }

    validateDescriptionLength(STORE_SHORT, SHORT_DESCRIPTION_MAX, 'Short description');
    validateDescriptionLength(STORE_FULL, FULL_DESCRIPTION_MAX, 'Full description');
}

function validateGIFs() {
    log('\n🎬 Validating GIF Assets...', colors.cyan);
    
    const gifDir = path.join(rootDir, 'public/assets/gifs');
    
    if (!fs.existsSync(gifDir)) {
        warnings.push('GIF directory not found - GIF animations will not work');
        log(`  ⚠ GIF directory not found`, colors.yellow);
        return;
    }
    
    let gifCount = 0;
    let oversizedGifs = [];
    
    function scanDirectory(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                scanDirectory(filePath);
            } else if (file.endsWith('.gif')) {
                gifCount++;
                const size = stat.size;
                const relativePath = path.relative(rootDir, filePath);
                
                if (size > GIF_MAX_SIZE) {
                    oversizedGifs.push({ path: relativePath, size });
                }
            }
        });
    }
    
    scanDirectory(gifDir);
    
    if (gifCount === 0) {
        warnings.push('No GIF files found - GIF animations will not work');
        log(`  ⚠ No GIF files found`, colors.yellow);
    } else {
        log(`  ℹ Found ${gifCount} GIF files`, colors.blue);
        
        if (oversizedGifs.length > 0) {
            oversizedGifs.forEach(gif => {
                warnings.push(`GIF ${gif.path} is too large: ${formatBytes(gif.size)} (max: ${formatBytes(GIF_MAX_SIZE)})`);
                log(`  ⚠ ${gif.path} - TOO LARGE (${formatBytes(gif.size)})`, colors.yellow);
            });
        } else {
            passed++;
            log(`  ✓ All GIFs within size limit`, colors.green);
        }
    }
}

function printSummary() {
    log('\n' + '='.repeat(60), colors.cyan);
    log('VALIDATION SUMMARY', colors.cyan);
    log('='.repeat(60), colors.cyan);
    
    log(`\n✓ Passed: ${passed}`, colors.green);
    
    if (warnings.length > 0) {
        log(`⚠ Warnings: ${warnings.length}`, colors.yellow);
        warnings.forEach(warning => {
            log(`  - ${warning}`, colors.yellow);
        });
    }
    
    if (errors.length > 0) {
        log(`\n✗ Errors: ${errors.length}`, colors.red);
        errors.forEach(error => {
            log(`  - ${error}`, colors.red);
        });
        log('\n❌ Asset validation FAILED', colors.red);
        log('\nPlease fix the errors above before building for release.', colors.yellow);
        process.exit(1);
    } else {
        log('\n✅ Asset validation PASSED', colors.green);
        if (warnings.length > 0) {
            log('\nNote: There are warnings that should be addressed for optimal performance.', colors.yellow);
        }
    }
}

// Run validation
log('\n' + '='.repeat(60), colors.cyan);
log('CAREER QUEST - ASSET VALIDATION', colors.cyan);
log('='.repeat(60), colors.cyan);

validateIcons();
validateSplashScreens();
validateManifest();
validateGIFs();
validateStoreListing();
printSummary();
