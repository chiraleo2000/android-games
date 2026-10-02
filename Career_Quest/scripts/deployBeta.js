#!/usr/bin/env node

/**
 * Beta Deployment Script
 * 
 * Prepares and validates the app for beta deployment to Android and iOS
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, description) {
    log(`\n${description}...`, 'cyan');
    try {
        execSync(command, { stdio: 'inherit' });
        log(`✅ ${description} complete`, 'green');
        return true;
    } catch (error) {
        const detail = error instanceof Error ? error.message : String(error);
        log(`❌ ${description} failed: ${detail}`, 'red');
        return false;
    }
}

async function main() {
    log('\n' + '='.repeat(60), 'bright');
    log('🚀 Career Quest - Beta Deployment Preparation', 'bright');
    log('='.repeat(60), 'bright');

    // Step 1: Run tests
    log('\n📋 Step 1: Running Test Suite', 'cyan');
    if (!execCommand('npm test', 'Test suite')) {
        log('\n❌ Tests failed. Fix issues before deploying.', 'red');
        process.exit(1);
    }

    // Step 2: Build production bundle
    log('\n📦 Step 2: Building Production Bundle', 'cyan');
    if (!execCommand('npm run build', 'Production build')) {
        log('\n❌ Build failed. Fix issues before deploying.', 'red');
        process.exit(1);
    }

    // Step 3: Sync with native platforms
    log('\n🔄 Step 3: Syncing with Native Platforms', 'cyan');
    if (!execCommand('npx cap sync', 'Capacitor sync')) {
        log('\n❌ Sync failed. Fix issues before deploying.', 'red');
        process.exit(1);
    }

    // Step 4: Validate assets
    log('\n🎨 Step 4: Validating Assets', 'cyan');
    log('Checking for required assets...', 'yellow');
    
    const requiredAssets = [
        'public/icons/icon-48.png',
        'public/icons/icon-72.png',
        'public/icons/icon-96.png',
        'public/icons/icon-128.png',
        'public/icons/icon-192.png',
        'public/icons/icon-256.png',
        'public/icons/icon-512.png',
        'public/manifest.json'
    ];

    let missingAssets = [];
    for (const asset of requiredAssets) {
        if (!fs.existsSync(asset)) {
            missingAssets.push(asset);
        }
    }

    if (missingAssets.length > 0) {
        log('\n⚠️  Missing assets:', 'yellow');
        missingAssets.forEach(asset => log(`  - ${asset}`, 'yellow'));
    } else {
        log('✅ All required assets present', 'green');
    }

    // Step 5: Check version numbers
    log('\n📌 Step 5: Version Information', 'cyan');
    
    // Read package.json version
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    log(`Package version: ${packageJson.version}`, 'green');

    // Read Android version
    const buildGradle = fs.readFileSync('android/app/build.gradle', 'utf8');
    const versionCodeMatch = /versionCode\s+(\d+)/.exec(buildGradle);
    const versionNameMatch = /versionName\s+"([^"]+)"/.exec(buildGradle);
    
    if (versionCodeMatch && versionNameMatch) {
        log(`Android version: ${versionNameMatch[1]} (${versionCodeMatch[1]})`, 'green');
    }

    // Summary
    log('\n' + '='.repeat(60), 'bright');
    log('✅ Beta Deployment Preparation Complete!', 'bright');
    log('='.repeat(60), 'bright');

    log('\n📱 Next Steps:', 'cyan');
    log('\n🤖 Android Beta Deployment:', 'yellow');
    log('  1. Ensure signing is configured in android/gradle.properties');
    log('  2. Run: npm run release:build');
    log('  3. Upload android/app/build/outputs/bundle/release/app-release.aab');
    log('  4. Go to Play Console → Testing → Closed testing');
    log('  5. Create new release and upload AAB');

    log('\n🍎 iOS Beta Deployment:', 'yellow');
    log('  1. Open Xcode: npx cap open ios');
    log('  2. Select "Any iOS Device (arm64)" as destination');
    log('  3. Product → Archive');
    log('  4. Distribute App → App Store Connect → Upload');
    log('  5. Configure TestFlight in App Store Connect');

    log('\n📚 Full instructions: .kiro/specs/career-quest-enhancements/BETA_DEPLOYMENT_GUIDE.md\n', 'cyan');
}

try {
    await main();
} catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    log(`\n❌ Fatal error: ${detail}`, 'red');
    console.error(error);
    process.exit(1);
}
