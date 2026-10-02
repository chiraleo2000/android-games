#!/usr/bin/env node

/**
 * Performance Testing Script
 * 
 * Measures performance of key operations:
 * - Storage write performance (100 writes)
 * - MBTI calculation time
 * - GIF preload time
 */

import { StorageService } from '../src/services/StorageService.js';
import { calculateMBTIType } from '../src/utils/mbtiScoringEngine.js';
import { getShuffledQuestions } from '../src/questions/personality/mbtiQuestionBank.js';
import { GIFLoader } from '../src/services/GIFLoader.js';

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

function formatTime(ms) {
    if (ms < 1) return `${(ms * 1000).toFixed(2)}μs`;
    if (ms < 1000) return `${ms.toFixed(2)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
}

async function measureStoragePerformance() {
    log('\n📊 Storage Write Performance Test', 'cyan');
    log('─'.repeat(50), 'cyan');

    const iterations = 100;
    const testData = { test: 'data', timestamp: Date.now(), array: [1, 2, 3, 4, 5] };

    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
        await StorageService.set(`perf_test_${i}`, testData);
    }
    
    const end = performance.now();
    const totalTime = end - start;
    const avgTime = totalTime / iterations;

    log(`Total time for ${iterations} writes: ${formatTime(totalTime)}`, 'green');
    log(`Average time per write: ${formatTime(avgTime)}`, 'green');
    log(`Writes per second: ${(1000 / avgTime).toFixed(0)}`, 'green');

    // Cleanup
    for (let i = 0; i < iterations; i++) {
        await StorageService.remove(`perf_test_${i}`);
    }

    return { totalTime, avgTime, writesPerSecond: 1000 / avgTime };
}

async function measureMBTICalculation() {
    log('\n🧠 MBTI Calculation Performance Test', 'cyan');
    log('─'.repeat(50), 'cyan');

    const questions = getShuffledQuestions();
    
    // Generate sample answers (all neutral)
    const answers = {};
    questions.forEach((_, index) => {
        answers[`q${index}`] = 3; // Neutral response
    });

    const iterations = 1000;
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
        calculateMBTIType(answers, questions);
    }
    
    const end = performance.now();
    const totalTime = end - start;
    const avgTime = totalTime / iterations;

    log(`Total time for ${iterations} calculations: ${formatTime(totalTime)}`, 'green');
    log(`Average time per calculation: ${formatTime(avgTime)}`, 'green');
    log(`Calculations per second: ${(1000 / avgTime).toFixed(0)}`, 'green');

    return { totalTime, avgTime, calculationsPerSecond: 1000 / avgTime };
}

async function measureGIFPreload() {
    log('\n🎬 GIF Preload Performance Test', 'cyan');
    log('─'.repeat(50), 'cyan');

    // Test preloading 10 GIFs
    const gifIds = [
        'career_start_1',
        'career_start_2',
        'feedback_positive_1',
        'feedback_positive_2',
        'feedback_negative_1',
        'feedback_negative_2',
        'feedback_neutral_1',
        'celebration_1',
        'celebration_2',
        'thinking_1'
    ];

    const start = performance.now();
    
    try {
        await GIFLoader.preload(gifIds);
        const end = performance.now();
        const totalTime = end - start;
        const avgTime = totalTime / gifIds.length;

        log(`Total time to preload ${gifIds.length} GIFs: ${formatTime(totalTime)}`, 'green');
        log(`Average time per GIF: ${formatTime(avgTime)}`, 'green');
        log(`GIFs loaded per second: ${(1000 / avgTime).toFixed(2)}`, 'green');

        // Clear cache
        GIFLoader.clearCache();

        return { totalTime, avgTime, gifsPerSecond: 1000 / avgTime };
    } catch (error) {
        log(`⚠️  GIF preload test skipped (GIF files may not exist): ${error.message}`, 'yellow');
        return { totalTime: 0, avgTime: 0, gifsPerSecond: 0, skipped: true };
    }
}

async function runAllTests() {
    log('\n' + '='.repeat(50), 'bright');
    log('🚀 Career Quest Performance Test Suite', 'bright');
    log('='.repeat(50), 'bright');

    const results = {};

    try {
        results.storage = await measureStoragePerformance();
        results.mbti = await measureMBTICalculation();
        results.gif = await measureGIFPreload();

        // Summary
        log('\n' + '='.repeat(50), 'bright');
        log('📈 Performance Summary', 'bright');
        log('='.repeat(50), 'bright');

        log(`\nStorage Performance:`, 'cyan');
        log(`  • Average write time: ${formatTime(results.storage.avgTime)}`);
        log(`  • Writes per second: ${results.storage.writesPerSecond.toFixed(0)}`);

        log(`\nMBTI Calculation Performance:`, 'cyan');
        log(`  • Average calculation time: ${formatTime(results.mbti.avgTime)}`);
        log(`  • Calculations per second: ${results.mbti.calculationsPerSecond.toFixed(0)}`);

        if (!results.gif.skipped) {
            log(`\nGIF Preload Performance:`, 'cyan');
            log(`  • Average load time: ${formatTime(results.gif.avgTime)}`);
            log(`  • GIFs per second: ${results.gif.gifsPerSecond.toFixed(2)}`);
        }

        // Performance assessment
        log(`\n${'='.repeat(50)}`, 'bright');
        log('✅ Performance Assessment', 'bright');
        log('='.repeat(50), 'bright');

        const assessments = [];

        if (results.storage.avgTime < 10) {
            assessments.push('✅ Storage: Excellent');
        } else if (results.storage.avgTime < 50) {
            assessments.push('⚠️  Storage: Good');
        } else {
            assessments.push('❌ Storage: Needs optimization');
        }

        if (results.mbti.avgTime < 1) {
            assessments.push('✅ MBTI Calculation: Excellent');
        } else if (results.mbti.avgTime < 5) {
            assessments.push('⚠️  MBTI Calculation: Good');
        } else {
            assessments.push('❌ MBTI Calculation: Needs optimization');
        }

        if (!results.gif.skipped) {
            if (results.gif.avgTime < 100) {
                assessments.push('✅ GIF Loading: Excellent');
            } else if (results.gif.avgTime < 500) {
                assessments.push('⚠️  GIF Loading: Good');
            } else {
                assessments.push('❌ GIF Loading: Needs optimization');
            }
        }

        assessments.forEach(a => log(a));

        log('\n✨ Performance test complete!\n', 'green');

    } catch (error) {
        log(`\n❌ Error during performance testing: ${error.message}`, 'red');
        console.error(error);
        process.exit(1);
    }
}

// Run tests
runAllTests().catch(error => {
    log(`\n❌ Fatal error: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
});
