import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';

// Store listing URL
const DESCRIPTION = `
Career Quest - Discover Your Future

Are you unsure about your future career? Or curious what job matches your personality?
Career Quest is the ultimate career exploration game that combines realistic job simulations with professional personality testing.

CORE FEATURES:
🌟 Career Simulations: Experience 64 different careers across 9 industries including Tech, Healthcare, Business, and the new Skilled Trades.
🧠 Personality Assessment: Take a scientifically designed 100-question MBTI-based test to find your true potential.
✅ Real Scenarios: Face realistic challenges and make decisions that shape your career path.
📊 Personalized Feedback: Get detailed analysis of your strengths, weaknesses, and professional aptitude.
💾 Auto-Save & Resume: Never lose progress with our robust save system.

Download Career Quest today and start your journey!
`;

async function generateAssets() {
    const browser = await chromium.launch();
    const pixel5 = devices['Pixel 5'];
    const mobileContext = await browser.newContext({
        ...pixel5,
        deviceScaleFactor: 2,
    });
    mobileContext.setDefaultTimeout(60000); // 60s
    const page = await mobileContext.newPage();

    const baseUrl = 'http://localhost:5173';
    const outputDir = 'examples';

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    try {
        console.log('--- Phase 1: Basic Screens ---');
        await page.goto(baseUrl);
        await page.waitForSelector('.hero-title');

        // 01. Home
        console.log('Snapshot: 01 Home');
        await page.screenshot({ path: `${outputDir}/screenshot_01_home.png` });

        // 02. Groups
        console.log('Snapshot: 02 Groups');
        await page.click('.career-card');
        await page.waitForSelector('.career-selection');
        await page.screenshot({ path: `${outputDir}/screenshot_02_groups.png` });

        // 03. Gameplay (Career)
        console.log('Snapshot: 03 Gameplay (Career)');
        await page.click('.selection-card:first-child'); // Tech
        await page.waitForTimeout(1000);
        await page.click('.selection-card:nth-child(4)'); // Software Engineer
        await page.waitForSelector('.game-screen');
        await page.waitForTimeout(2000);
        await page.screenshot({ path: `${outputDir}/screenshot_03_gameplay.png` });

        console.log('--- Phase 2: Requested New Screens ---');

        // 04. Personality Test
        console.log('Snapshot: 04 Personality Test');
        await page.goto(baseUrl);
        await page.waitForSelector('.personality-card');
        await page.click('.personality-card');
        await page.waitForSelector('.likert-scale');
        await page.waitForTimeout(2000);
        await page.screenshot({ path: `${outputDir}/screenshot_04_personality.png` });

        // 05. Career Result
        console.log('Snapshot: 05 Career Result');
        // We need currentScenarioIndex > 0 for it to show in Resume
        const careerResultState = {
            gameState: 'PLAYING',
            currentCareer: {
                id: 'software-engineer',
                emoji: '👨‍💻',
                title: { en: 'Software Engineer', th: 'วิศวกรซอฟต์แวร์' },
                activeScenarios: [
                    { id: 'q-intro', text: { en: 'Intro' }, options: [{ id: 'A', text: { en: 'Go' }, stats: {} }] },
                    { id: 'q-final', text: { en: 'Final milestone reached. How do you deliver the project?' }, options: [{ id: 'A', text: { en: 'Deploy to Production' }, stats: { competence: 15, ethics: 10 } }] }
                ]
            },
            currentScenarioIndex: 1, // At the last question
            stats: { competence: 85, ethics: 90, leadership: 75, innovation: 80 },
            language: 'en'
        };
        await page.evaluate((state) => {
            localStorage.setItem('careerQuestState', JSON.stringify(state));
        }, careerResultState);
        await page.reload();
        await page.waitForSelector('.resume-card');
        await page.click('.resume-card');
        await page.waitForSelector('.option-btn');
        await page.click('.option-btn:first-child');

        // Wait for result screen
        await page.waitForSelector('.result-screen', { timeout: 20000 });
        await page.waitForTimeout(3000);
        await page.screenshot({ path: `${outputDir}/screenshot_05_career_result.png` });

        // 06. Personality Result
        console.log('Snapshot: 06 Personality Result');
        const personalityResultState = {
            gameState: 'PERSONALITY_TEST',
            ptIndex: 99,
            ptAnswers: {},
            mbtiDimensions: { 'E/I': 15, 'N/S': -10, 'F/T': 5, 'P/J': 12 },
            ptTraits: { analytical: 80, social: 40, practical: 90, adventurous: 30 },
            language: 'en'
        };
        await page.evaluate((state) => {
            localStorage.setItem('careerQuestState', JSON.stringify(state));
        }, personalityResultState);
        await mobileContext.clearCookies(); // Just making sure
        await page.reload();
        await page.waitForSelector('.resume-card');
        await page.click('.resume-card');
        await page.waitForSelector('.likert-scale button');
        await page.click('.likert-scale button:last-child');

        await page.waitForSelector('.personality-result', { timeout: 20000 });
        await page.waitForTimeout(2000);
        await page.screenshot({ path: `${outputDir}/screenshot_06_personality_result.png` });

        // --- Phase 3: Assets ---
        console.log('--- Phase 3: Store Assets ---');
        await page.goto(baseUrl);
        await page.evaluate(() => localStorage.clear());
        await page.reload();

        // 512x512 Icon
        await page.setViewportSize({ width: 512, height: 512 });
        await page.evaluate(() => {
            document.body.style.background = 'linear-gradient(135deg, #090e1a 0%, #1e293b 100%)';
            const toHide = ['.hero-welcome', '.hero-tagline', '.feature-pills', '.action-cards', '.resume-section', '.nav-bar'];
            toHide.forEach(sel => {
                const el = document.querySelector(sel);
                if (el) el.style.display = 'none';
            });
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.margin = '0';
                hero.style.position = 'absolute';
                hero.style.top = '50%';
                hero.style.left = '50%';
                hero.style.transform = 'translate(-50%, -50%)';
                hero.style.width = '100%';
            }
        });
        await page.screenshot({ path: `${outputDir}/icon_512.png` });

        // Feature Graphic (1024x500)
        await page.setViewportSize({ width: 1024, height: 500 });
        await page.goto(baseUrl);
        await page.evaluate(() => {
            document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
            const toHide = ['.action-cards', '.resume-section', '.nav-bar', '.feature-pills', '.hero-welcome'];
            toHide.forEach(sel => {
                const el = document.querySelector(sel);
                if (el) el.style.display = 'none';
            });
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = 'scale(1.1)';
            }
        });
        await page.screenshot({ path: `${outputDir}/feature_graphic_1024x500.png` });

        fs.writeFileSync(path.join(outputDir, 'store_description.txt'), DESCRIPTION.trim());
        console.log('All store assets generated successfully!');

    } catch (error) {
        console.error('Error in asset generation:', error);
    } finally {
        await browser.close();
    }
}

generateAssets();
