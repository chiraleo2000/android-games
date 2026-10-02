#!/usr/bin/env node

/**
 * Build Validation Script
 * 
 * Validates build configuration and environment for Google Play Store deployment.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Build configuration requirements
const REQUIRED_ENV_VARS = [
    'RELEASE_STORE_FILE',
    'RELEASE_STORE_PASSWORD',
    'RELEASE_KEY_ALIAS',
    'RELEASE_KEY_PASSWORD'
];

const MAX_BUNDLE_SIZE = 150 * 1024 * 1024; // 150MB
const MIN_TARGET_SDK = 36;

let errors = [];
let warnings = [];
let passed = 0;

function log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
}

function checkEnvVar(varName) {
    return process.env[varName] !== undefined && process.env[varName] !== '';
}

function readGradleProperties() {
    const gradlePropsPath = path.join(rootDir, 'android/gradle.properties');
    
    if (!fs.existsSync(gradlePropsPath)) {
        return {};
    }
    
    const content = fs.readFileSync(gradlePropsPath, 'utf-8');
    const props = {};
    
    content.split('\n').forEach(line => {
        line = line.trim();
        if (line && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            if (key && value) {
                props[key.trim()] = value.trim();
            }
        }
    });
    
    return props;
}

function validateSigningConfig() {
    log('\n🔐 Validating Signing Configuration...', colors.cyan);
    
    const gradleProps = readGradleProperties();
    let allPresent = true;
    
    REQUIRED_ENV_VARS.forEach(varName => {
        const inEnv = checkEnvVar(varName);
        const inGradle = gradleProps[varName] !== undefined;
        
        if (!inEnv && !inGradle) {
            errors.push(`Missing signing configuration: ${varName}`);
            log(`  ✗ ${varName} - MISSING`, colors.red);
            allPresent = false;
        } else {
            passed++;
            const source = inEnv ? 'environment' : 'gradle.properties';
            log(`  ✓ ${varName} - OK (from ${source})`, colors.green);
        }
    });
    
    if (!allPresent) {
        log('\n  💡 Remediation:', colors.yellow);
        log('     1. Create a keystore file:', colors.yellow);
        log('        keytool -genkey -v -keystore release-key.keystore -alias release-key -keyalg RSA -keysize 2048 -validity 10000', colors.yellow);
        log('     2. Add signing config to android/gradle.properties:', colors.yellow);
        log('        RELEASE_STORE_FILE=../release-key.keystore', colors.yellow);
        log('        RELEASE_STORE_PASSWORD=your_store_password', colors.yellow);
        log('        RELEASE_KEY_ALIAS=release-key', colors.yellow);
        log('        RELEASE_KEY_PASSWORD=your_key_password', colors.yellow);
        log('     3. Or set environment variables with the same names', colors.yellow);
    }
}

function validateBuildGradle() {
    log('\n📦 Validating build.gradle Configuration...', colors.cyan);
    
    const buildGradlePath = path.join(rootDir, 'android/app/build.gradle');
    
    if (!fs.existsSync(buildGradlePath)) {
        errors.push('build.gradle not found');
        log(`  ✗ build.gradle - NOT FOUND`, colors.red);
        return;
    }
    
    const content = fs.readFileSync(buildGradlePath, 'utf-8');
    
    // Check target SDK version
    const targetSdkMatch = content.match(/targetSdkVersion\s+(\d+)/);
    if (targetSdkMatch) {
        const targetSdk = parseInt(targetSdkMatch[1]);
        if (targetSdk >= MIN_TARGET_SDK) {
            passed++;
            log(`  ✓ targetSdkVersion ${targetSdk} - OK`, colors.green);
        } else {
            errors.push(`targetSdkVersion ${targetSdk} is below minimum ${MIN_TARGET_SDK}`);
            log(`  ✗ targetSdkVersion ${targetSdk} - TOO LOW (min: ${MIN_TARGET_SDK})`, colors.red);
        }
    } else {
        warnings.push('Could not find targetSdkVersion in build.gradle');
        log(`  ⚠ targetSdkVersion - NOT FOUND`, colors.yellow);
    }
    
    // Check minifyEnabled
    if (content.includes('minifyEnabled true')) {
        passed++;
        log(`  ✓ minifyEnabled - ENABLED`, colors.green);
    } else {
        warnings.push('minifyEnabled is not set to true - bundle size may be larger');
        log(`  ⚠ minifyEnabled - NOT ENABLED`, colors.yellow);
    }
    
    // Check shrinkResources
    if (content.includes('shrinkResources true')) {
        passed++;
        log(`  ✓ shrinkResources - ENABLED`, colors.green);
    } else {
        warnings.push('shrinkResources is not set to true - bundle size may be larger');
        log(`  ⚠ shrinkResources - NOT ENABLED`, colors.yellow);
    }
    
    // Check ProGuard rules
    if (content.includes('proguardFiles')) {
        passed++;
        log(`  ✓ ProGuard rules - CONFIGURED`, colors.green);
    } else {
        warnings.push('ProGuard rules not configured');
        log(`  ⚠ ProGuard rules - NOT CONFIGURED`, colors.yellow);
    }
}

function validateBundleSize() {
    log('\n📊 Checking Bundle Size...', colors.cyan);
    
    const bundlePath = path.join(rootDir, 'android/app/build/outputs/bundle/release/app-release.aab');
    
    if (!fs.existsSync(bundlePath)) {
        log(`  ℹ Bundle not built yet - will be validated after build`, colors.blue);
        return;
    }
    
    const stats = fs.statSync(bundlePath);
    const size = stats.size;
    const sizeMB = (size / (1024 * 1024)).toFixed(2);
    
    if (size > MAX_BUNDLE_SIZE) {
        errors.push(`Bundle size ${sizeMB}MB exceeds maximum ${MAX_BUNDLE_SIZE / (1024 * 1024)}MB`);
        log(`  ✗ Bundle size ${sizeMB}MB - TOO LARGE`, colors.red);
        log('\n  💡 Remediation:', colors.yellow);
        log('     1. Enable minifyEnabled and shrinkResources in build.gradle', colors.yellow);
        log('     2. Optimize images and assets', colors.yellow);
        log('     3. Remove unused dependencies', colors.yellow);
        log('     4. Use code splitting and lazy loading', colors.yellow);
    } else {
        passed++;
        log(`  ✓ Bundle size ${sizeMB}MB - OK`, colors.green);
    }
}

function validateAndroidManifest() {
    log('\n📱 Validating AndroidManifest.xml...', colors.cyan);
    
    const manifestPath = path.join(rootDir, 'android/app/src/main/AndroidManifest.xml');
    
    if (!fs.existsSync(manifestPath)) {
        errors.push('AndroidManifest.xml not found');
        log(`  ✗ AndroidManifest.xml - NOT FOUND`, colors.red);
        return;
    }
    
    const content = fs.readFileSync(manifestPath, 'utf-8');
    
    // Check for application label
    if (content.includes('android:label')) {
        passed++;
        log(`  ✓ Application label - CONFIGURED`, colors.green);
    } else {
        warnings.push('Application label not set in AndroidManifest.xml');
        log(`  ⚠ Application label - NOT SET`, colors.yellow);
    }
    
    // Check for application icon
    if (content.includes('android:icon')) {
        passed++;
        log(`  ✓ Application icon - CONFIGURED`, colors.green);
    } else {
        warnings.push('Application icon not set in AndroidManifest.xml');
        log(`  ⚠ Application icon - NOT SET`, colors.yellow);
    }
    
    // Check for permissions
    const permissions = content.match(/<uses-permission[^>]*>/g) || [];
    if (permissions.length > 0) {
        passed++;
        log(`  ✓ Permissions declared (${permissions.length})`, colors.green);
    } else {
        log(`  ℹ No permissions declared`, colors.blue);
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
        log('\n❌ Build validation FAILED', colors.red);
        log('\nPlease fix the errors above before building for release.', colors.yellow);
        process.exit(1);
    } else {
        log('\n✅ Build validation PASSED', colors.green);
        if (warnings.length > 0) {
            log('\nNote: There are warnings that should be addressed for optimal build.', colors.yellow);
        }
        log('\nYou can now run: npm run android:build:release', colors.cyan);
    }
}

// Run validation
log('\n' + '='.repeat(60), colors.cyan);
log('CAREER QUEST - BUILD VALIDATION', colors.cyan);
log('='.repeat(60), colors.cyan);

validateSigningConfig();
validateBuildGradle();
validateAndroidManifest();
validateBundleSize();
printSummary();
