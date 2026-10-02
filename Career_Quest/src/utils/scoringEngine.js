/**
 * Scoring Engine — Comprehensive, Personal Analysis
 * 
 * Provides multi-dimensional career result analysis:
 * - Decision-making archetype classification
 * - Strength/weakness identification
 * - Personalized narrative based on stat patterns
 * - Career-specific insights
 * - Adjusted tier system with realistic thresholds
 */

function getClarityLevel(strength) {
    if (strength > 20) return 'strong';
    if (strength > 8) return 'moderate';
    return 'slight';
}

// ─── Tier System (adjusted for realistic score distribution) ─────
// Stats start at 50. With 40 questions and deltas of ±0-50,
// realistic final range is roughly 20-80.
const TIERS = {
    legendary: { min: 78, label: { en: 'Legendary', th: 'ตำนาน', zh: '传奇' }, color: '#ffd700', emoji: '👑' },
    expert: { min: 68, label: { en: 'Expert', th: 'ผู้เชี่ยวชาญ', zh: '专家' }, color: '#ff00ff', emoji: '🏆' },
    proficient: { min: 58, label: { en: 'Proficient', th: 'เชี่ยวชาญ', zh: '熟练' }, color: '#00f5ff', emoji: '⭐' },
    developing: { min: 45, label: { en: 'Developing', th: 'กำลังพัฒนา', zh: '发展中' }, color: '#00ff88', emoji: '📈' },
    emerging: { min: 0, label: { en: 'Emerging', th: 'เพิ่งเริ่มต้น', zh: '新兴' }, color: '#ff6b35', emoji: '🌱' },
};

function getTier(score) {
    for (const [key, tier] of Object.entries(TIERS)) {
        if (score >= tier.min) return { key, ...tier };
    }
    return { key: 'emerging', ...TIERS.emerging };
}

// ─── Decision-Making Archetypes ──────────────────────────────────
// Classified based on the distribution pattern of 4 stats
const ARCHETYPES = {
    ethical_leader: {
        test: (s) => s.ethics >= 65 && s.leadership >= 60,
        label: { en: 'The Ethical Leader', th: 'ผู้นำเชิงจริยธรรม', zh: '道德领袖' },
        emoji: '🌟',
        desc: {
            en: 'You lead by example. Your decisions consistently prioritize integrity and people over short-term gains. Teams trust you instinctively.',
            th: 'คุณเป็นผู้นำโดยการทำเป็นตัวอย่าง การตัดสินใจของคุณให้ความสำคัญกับความซื่อสัตย์และคนมากกว่าผลประโยชน์ระยะสั้น ทีมไว้วางใจคุณโดยสัญชาตญาณ',
            zh: '你以身作则。你的决策始终将诚信和人放在短期利益之前。团队本能地信任你。'
        }
    },
    bold_innovator: {
        test: (s) => s.innovation >= 65 && s.competence >= 55,
        label: { en: 'The Bold Innovator', th: 'นักนวัตกรผู้กล้าหาญ', zh: '大胆创新者' },
        emoji: '🚀',
        desc: {
            en: 'You challenge the status quo and back it up with skill. When others see problems, you see possibilities. Risk doesn\'t scare you — stagnation does.',
            th: 'คุณท้าทายสิ่งเดิมๆ และสนับสนุนด้วยทักษะ เมื่อคนอื่นเห็นปัญหา คุณเห็นโอกาส ความเสี่ยงไม่ทำให้คุณกลัว — การหยุดนิ่งต่างหากที่น่ากลัว',
            zh: '你挑战现状并用技能支撑。当别人看到问题时，你看到可能性。风险不会吓到你——停滞才会。'
        }
    },
    strategic_mind: {
        test: (s) => s.competence >= 65 && s.leadership >= 55,
        label: { en: 'The Strategic Mind', th: 'นักกลยุทธ์', zh: '战略家' },
        emoji: '🧠',
        desc: {
            en: 'You combine deep expertise with executive vision. Your decisions are calculated, data-driven, and forward-thinking. You play chess while others play checkers.',
            th: 'คุณรวมความเชี่ยวชาญเข้ากับวิสัยทัศน์ การตัดสินใจของคุณรอบคอบ ขับเคลื่อนด้วยข้อมูล และมองไปข้างหน้า คุณเล่นหมากรุกขณะที่คนอื่นเล่นหมากฮอส',
            zh: '你将深厚专业与高管视野结合。你的决策经过深思熟虑，以数据和前瞻性驱动。别人下跳棋时你在下国际象棋。'
        }
    },
    people_champion: {
        test: (s) => s.ethics >= 60 && s.innovation >= 55 && s.leadership < 60,
        label: { en: 'The People Champion', th: 'แชมป์ของประชาชน', zh: '人民的冠军' },
        emoji: '💪',
        desc: {
            en: 'You fight for what\'s right with creative solutions. You\'re the one colleagues come to when the system fails them. Fairness is your superpower.',
            th: 'คุณต่อสู้เพื่อสิ่งที่ถูกต้องด้วยวิธีสร้างสรรค์ เพื่อนร่วมงานมาหาคุณเมื่อระบบทำให้พวกเขาผิดหวัง ความยุติธรรมคือพลังพิเศษของคุณ',
            zh: '你用创造性的解决方案为正义而战。当系统让同事失望时，他们会来找你。公平是你的超能力。'
        }
    },
    balanced_professional: {
        test: (s) => {
            const vals = [s.competence, s.ethics, s.leadership, s.innovation];
            const spread = Math.max(...vals) - Math.min(...vals);
            return spread <= 15;
        },
        label: { en: 'The Renaissance Professional', th: 'นักมืออาชีพสมดุล', zh: '全才' },
        emoji: '⚖️',
        desc: {
            en: 'You\'re a rare all-rounder. No blind spots, no weaknesses to exploit. You adapt to any situation with consistent competence across all dimensions.',
            th: 'คุณเป็นคนรอบด้านที่หายาก ไม่มีจุดบอด ไม่มีจุดอ่อนให้โจมตี คุณปรับตัวได้กับทุกสถานการณ์ด้วยความสามารถที่สม่ำเสมอทุกด้าน',
            zh: '你是罕见的全才。没有盲点，没有可利用的弱点。你以全维度的一致能力适应任何情况。'
        }
    },
    technical_specialist: {
        test: (s) => s.competence >= 65 && s.leadership < 50,
        label: { en: 'The Technical Specialist', th: 'ผู้เชี่ยวชาญเทคนิค', zh: '技术专家' },
        emoji: '🔬',
        desc: {
            en: 'You\'re the expert everyone relies on. Your depth of knowledge is unmatched, though leadership roles may feel uncomfortable. You let your work do the talking.',
            th: 'คุณคือผู้เชี่ยวชาญที่ทุกคนพึ่งพา ความรู้เชิงลึกของคุณไม่มีใครเทียบ แม้บทบาทผู้นำอาจรู้สึกไม่สบาย คุณปล่อยให้ผลงานพูดแทน',
            zh: '你是每个人依赖的专家。你的知识深度无人能比，尽管领导角色可能让你不自在。你让工作替你说话。'
        }
    },
    visionary_disruptor: {
        test: (s) => s.innovation >= 65 && s.ethics < 50,
        label: { en: 'The Visionary Disruptor', th: 'ผู้สร้างความเปลี่ยนแปลง', zh: '颠覆者' },
        emoji: '⚡',
        desc: {
            en: 'You push boundaries — sometimes past the line. Your ideas are brilliant but ethics may be an afterthought. The "move fast and break things" philosophy is your default.',
            th: 'คุณผลักดันขอบเขต — บางครั้งเลยเส้น ไอเดียของคุณยอดเยี่ยมแต่จริยธรรมอาจเป็นเรื่องภายหลัง ปรัชญา "เดินหน้าเร็วแม้พัง" คือค่าเริ่มต้นของคุณ',
            zh: '你推动边界——有时越过底线。你的想法很出色但道德可能是事后想法。"快速前进，打破常规"哲学是你的默认。'
        }
    },
    emerging_talent: {
        test: () => true, // Fallback
        label: { en: 'The Rising Star', th: 'ดาวรุ่ง', zh: '新星' },
        emoji: '🌅',
        desc: {
            en: 'You\'re at the beginning of your journey. Every expert was once a beginner. Your choices show potential — the question is which direction you\'ll grow.',
            th: 'คุณอยู่ที่จุดเริ่มต้นของการเดินทาง ผู้เชี่ยวชาญทุกคนเคยเป็นมือใหม่ ตัวเลือกของคุณแสดงศักยภาพ — คำถามคือคุณจะเติบโตไปทิศทางไหน',
            zh: '你正处于旅程的开始。每个专家曾经都是新手。你的选择展现了潜力——问题是你会向哪个方向成长。'
        }
    }
};

function getArchetype(stats) {
    for (const [, archetype] of Object.entries(ARCHETYPES)) {
        if (archetype.test(stats)) return archetype;
    }
    return ARCHETYPES.emerging_talent;
}

// ─── Strength/Weakness Analysis ──────────────────────────────────
const STAT_INSIGHTS = {
    competence: {
        high: {
            en: 'Your technical skills are razor-sharp. You consistently chose the most effective solutions, even under pressure.',
            th: 'ทักษะเทคนิคของคุณคมกริบ คุณเลือกวิธีที่มีประสิทธิภาพสูงสุดอย่างสม่ำเสมอ แม้ภายใต้ความกดดัน',
            zh: '你的技术技能非常锐利。即使在压力下，你也始终选择最有效的解决方案。'
        },
        mid: {
            en: 'Solid skill foundation. You made sound technical choices most of the time, with room to deepen expertise.',
            th: 'พื้นฐานทักษะแน่น คุณตัดสินใจทางเทคนิคได้ดีส่วนมาก ยังมีพื้นที่เพิ่มความเชี่ยวชาญ',
            zh: '扎实的技能基础。大多数时候做出了合理的技术选择，还有深化专业知识的空间。'
        },
        low: {
            en: 'Technical decisions were your challenge area. Consider why certain approaches work better — experience will be your best teacher.',
            th: 'การตัดสินใจทางเทคนิคเป็นด้านที่ท้าทาย ลองพิจารณาว่าทำไมบางวิธีถึงดีกว่า — ประสบการณ์จะเป็นครูที่ดีที่สุด',
            zh: '技术决策是你的挑战领域。考虑为什么某些方法更有效——经验将是你最好的老师。'
        }
    },
    ethics: {
        high: {
            en: 'Your moral compass is steel. You chose the right thing even when it was hard, even when no one was watching.',
            th: 'เข็มทิศศีลธรรมของคุณเหมือนเหล็ก คุณเลือกสิ่งที่ถูกต้องแม้จะยาก แม้ไม่มีใครมอง',
            zh: '你的道德指南针坚如钢铁。即使很难，即使没人看着，你也选择了正确的事。'
        },
        mid: {
            en: 'You generally make ethical choices, though pragmatism sometimes wins. That\'s human — but awareness of the trade-offs matters.',
            th: 'คุณตัดสินใจเชิงจริยธรรมได้ดีโดยทั่วไป แม้บางครั้งความเป็นจริงจะชนะ นั่นเป็นเรื่องปกติ — แต่การตระหนักถึงข้อแลกเปลี่ยนสำคัญ',
            zh: '你通常做出道德的选择，尽管务实有时会胜出。这很人性——但对权衡的意识很重要。'
        },
        low: {
            en: 'Ethical shortcuts were tempting and you took them. In real careers, reputation is built on the choices no one sees.',
            th: 'ทางลัดทางจริยธรรมน่าล่อใจและคุณใช้มัน ในอาชีพจริง ชื่อเสียงสร้างจากตัวเลือกที่ไม่มีใครเห็น',
            zh: '道德捷径很诱人，你选择了它们。在真实职业中，声誉建立在没人看到的选择上。'
        }
    },
    leadership: {
        high: {
            en: 'You\'re a natural leader. Your choices show someone who takes charge, inspires teams, and makes tough calls confidently.',
            th: 'คุณเป็นผู้นำโดยธรรมชาติ ตัวเลือกของคุณแสดงว่าคุณรับผิดชอบ สร้างแรงบันดาลใจให้ทีม และตัดสินใจยากๆ ได้อย่างมั่นใจ',
            zh: '你是天生的领导者。你的选择表明你会承担责任，激励团队，自信地做出艰难决定。'
        },
        mid: {
            en: 'You have leadership potential that\'s still developing. You step up sometimes but may defer to others when things get tough.',
            th: 'คุณมีศักยภาพผู้นำที่ยังพัฒนาอยู่ คุณก้าวขึ้นมาบางครั้ง แต่อาจให้คนอื่นตัดสินเมื่อเรื่องยุ่งยาก',
            zh: '你的领导潜力仍在发展。你有时会站出来，但在困难时可能会让步于他人。'
        },
        low: {
            en: 'Leadership roles weren\'t your natural choice. That\'s fine — not every great career requires being the boss. But influence is always valuable.',
            th: 'บทบาทผู้นำไม่ใช่ตัวเลือกตามธรรมชาติของคุณ ไม่เป็นไร — ไม่ใช่ทุกอาชีพที่ดีต้องเป็นหัวหน้า แต่อิทธิพลมีค่าเสมอ',
            zh: '领导角色不是你的自然选择。没关系——不是每个伟大的职业都需要当老板。但影响力总是有价值的。'
        }
    },
    innovation: {
        high: {
            en: 'You think different. Your choices consistently pushed boundaries and found creative solutions others wouldn\'t consider.',
            th: 'คุณคิดต่าง ตัวเลือกของคุณผลักดันขอบเขตอย่างสม่ำเสมอ และหาวิธีสร้างสรรค์ที่คนอื่นไม่คิด',
            zh: '你思维不同。你的选择持续突破界限，找到别人不会考虑的创造性解决方案。'
        },
        mid: {
            en: 'You balance creativity with practicality. Some safe choices, some bold ones. A good foundation for growth.',
            th: 'คุณสมดุลระหว่างความคิดสร้างสรรค์กับความเป็นจริง บางตัวเลือกปลอดภัย บางตัวกล้าหาญ พื้นฐานที่ดีสำหรับการเติบโต',
            zh: '你平衡了创造力和实用性。一些安全的选择，一些大胆的。这是成长的好基础。'
        },
        low: {
            en: 'You preferred proven paths over experiments. There\'s safety in that, but breakthrough careers often require calculated risks.',
            th: 'คุณชอบเส้นทางที่พิสูจน์แล้วมากกว่าการทดลอง มีความปลอดภัยในนั้น แต่อาชีพที่ก้าวกระโดดมักต้องการความเสี่ยงที่คำนวณแล้ว',
            zh: '你更喜欢经过验证的路径而非实验。这很安全，但突破性的职业往往需要经过计算的风险。'
        }
    }
};

function getStatInsight(statKey, value, lang) {
    const insights = STAT_INSIGHTS[statKey];
    if (!insights) return '';
    if (value >= 65) return insights.high[lang] || insights.high.en;
    if (value >= 45) return insights.mid[lang] || insights.mid.en;
    return insights.low[lang] || insights.low.en;
}

// ─── Personal Narrative Generator ────────────────────────────────
function getReadinessPhrase(avg, lang) {
    if (avg >= 65) {
        const phrases = { en: 'demonstrate strong readiness for this career path.', th: 'แสดงความพร้อมที่แข็งแกร่งสำหรับเส้นทางอาชีพนี้', zh: '展示了对这条职业道路的强烈准备。' };
        return phrases[lang] || phrases.en;
    }
    if (avg >= 50) {
        const phrases = { en: 'show promising potential with clear room for development.', th: 'แสดงศักยภาพที่ดีพร้อมพื้นที่พัฒนาที่ชัดเจน', zh: '展现了明确的发展潜力。' };
        return phrases[lang] || phrases.en;
    }
    const phrases = { en: 'are beginning your journey — every expert started somewhere.', th: 'เพิ่งเริ่มต้นการเดินทาง — ผู้เชี่ยวชาญทุกคนเริ่มจากที่ไหนสักที่', zh: '正在开始旅程——每位专家都从某个起点开始。' };
    return phrases[lang] || phrases.en;
}

function getWeaknessPhrase(weakestKey, weakestVal, statNames, lang) {
    const name = statNames[weakestKey][lang] || statNames[weakestKey].en;
    if (weakestVal < 40) {
        const templates = {
            en: "Your " + name + " needs attention — it may limit your growth if left unaddressed.",
            th: name + "ของคุณต้องให้ความสนใจ — อาจจำกัดการเติบโตหากไม่แก้ไข",
            zh: "你的" + name + "需要关注——如果不解决可能会限制你的成长。"
        };
        return templates[lang] || templates.en;
    }
    const templates = {
        en: "Even your " + name + " score (" + weakestVal + "/100) shows solid awareness.",
        th: "แม้แต่คะแนน" + name + " (" + weakestVal + "/100) ก็แสดงความตระหนักที่ดี",
        zh: "即使你的" + name + "分数（" + weakestVal + "/100）也表现出扎实的意识。"
    };
    return templates[lang] || templates.en;
}

function generatePersonalNarrative(stats, career, lang) {
    const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const [strongest, secondStr] = [sorted[0], sorted[1]];
    const weakest = sorted.at(-1);
    const avg = Math.round(sorted.reduce((sum, [, v]) => sum + v, 0) / sorted.length);

    const statNames = {
        competence: { en: 'competence', th: 'ความสามารถ', zh: '能力' },
        ethics: { en: 'ethics', th: 'จริยธรรม', zh: '道德' },
        leadership: { en: 'leadership', th: 'ภาวะผู้นำ', zh: '领导力' },
        innovation: { en: 'innovation', th: 'นวัตกรรม', zh: '创新' }
    };

    const careerName = career?.title?.[lang] || career?.title?.en || career?.name || 'this career';
    const strongName = statNames[strongest[0]][lang] || statNames[strongest[0]].en;
    const secondName = statNames[secondStr[0]][lang] || statNames[secondStr[0]].en;
    const weaknessPhrase = getWeaknessPhrase(weakest[0], weakest[1], statNames, lang);
    const readinessPhrase = getReadinessPhrase(avg, lang);

    const narratives = {
        en: "As a " + careerName + ", your strongest asset is " + strongName + " (" + strongest[1] + "/100), closely supported by " + secondName + " (" + secondStr[1] + "/100). " + weaknessPhrase + " With an overall score of " + avg + ", you " + readinessPhrase,

        th: "ในฐานะ" + careerName + " จุดแข็งที่สุดของคุณคือ" + strongName + " (" + strongest[1] + "/100) สนับสนุนอย่างใกล้ชิดโดย" + secondName + " (" + secondStr[1] + "/100) " + weaknessPhrase + " ด้วยคะแนนรวม " + avg + " คุณ" + readinessPhrase,

        zh: "作为" + careerName + "，你最大的优势是" + strongName + "（" + strongest[1] + "/100），紧随其后的是" + secondName + "（" + secondStr[1] + "/100）。" + weaknessPhrase + "总分" + avg + "分，你" + readinessPhrase
    };

    return narratives[lang] || narratives.en;
}

// ─── Growth Recommendations ──────────────────────────────────────
function getGrowthAreas(stats, lang) {
    const sorted = Object.entries(stats).sort((a, b) => a[1] - b[1]);
    const areas = [];

    const recommendations = {
        competence: {
            en: 'Seek out technical mentors and challenging projects. Read industry publications. Build things outside your comfort zone.',
            th: 'หาพี่เลี้ยงด้านเทคนิคและโปรเจกต์ที่ท้าทาย อ่านสิ่งพิมพ์ในอุตสาหกรรม สร้างสิ่งนอกเขตสบายของคุณ',
            zh: '寻找技术导师和有挑战性的项目。阅读行业出版物。在舒适区之外创造东西。'
        },
        ethics: {
            en: 'Study ethical frameworks in your field. Practice asking "who does this affect?" before every major decision.',
            th: 'ศึกษากรอบจริยธรรมในสาขาของคุณ ฝึกถามตัวเอง "สิ่งนี้กระทบใครบ้าง?" ก่อนทุกการตัดสินใจสำคัญ',
            zh: '学习你所在领域的道德框架。在每个重大决定前练习问"这会影响谁？"'
        },
        leadership: {
            en: 'Volunteer to lead small initiatives first. Practice giving constructive feedback. Read about servant leadership.',
            th: 'อาสาเป็นผู้นำโครงการเล็กๆ ก่อน ฝึกให้ feedback เชิงสร้างสรรค์ อ่านเรื่อง servant leadership',
            zh: '先自愿领导小型项目。练习给出建设性反馈。阅读关于服务型领导力的内容。'
        },
        innovation: {
            en: 'Expose yourself to different industries and ideas. Practice brainstorming without judgment. Prototype quickly, fail fast.',
            th: 'เปิดรับอุตสาหกรรมและแนวคิดที่แตกต่าง ฝึก brainstorm โดยไม่ตัดสิน สร้าง prototype เร็ว ล้มเหลวเร็ว',
            zh: '接触不同的行业和想法。练习不带评判地头脑风暴。快速原型，快速失败。'
        }
    };

    // Recommend growth for bottom 2 stats (only if below 60)
    for (let i = 0; i < Math.min(2, sorted.length); i++) {
        const [key, value] = sorted[i];
        if (value < 60) {
            areas.push({
                stat: key,
                value,
                recommendation: recommendations[key]?.[lang] || recommendations[key]?.en || ''
            });
        }
    }

    return areas;
}

// ─── Composite Score (weighted) ──────────────────────────────────
// Instead of flat average, weight stats to make results more nuanced
function getCompositeScore(stats) {
    const weights = { competence: 0.3, ethics: 0.25, leadership: 0.25, innovation: 0.2 };
    let total = 0;
    let weightSum = 0;
    for (const [key, value] of Object.entries(stats)) {
        const w = weights[key] || 0.25;
        total += value * w;
        weightSum += w;
    }
    return Math.round(total / weightSum);
}

// ─── Main Analysis Function ──────────────────────────────────────
export function analyzeCareerResult(stats, career, language = 'en') {
    const lang = language;
    const compositeScore = getCompositeScore(stats);
    const tier = getTier(compositeScore);
    const archetype = getArchetype(stats);
    const narrative = generatePersonalNarrative(stats, career, lang);
    const growthAreas = getGrowthAreas(stats, lang);

    // Individual stat analysis
    const statAnalysis = {};
    for (const [key, value] of Object.entries(stats)) {
        statAnalysis[key] = {
            value,
            tier: getTier(value),
            insight: getStatInsight(key, value, lang)
        };
    }

    // Sorted stats for strength/weakness display
    const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const strengths = sorted.slice(0, 2).map(([k]) => k);
    const weaknesses = sorted.slice(-1).map(([k]) => k);

    return {
        compositeScore,
        tier,
        archetype,
        narrative,
        statAnalysis,
        strengths,
        weaknesses,
        growthAreas,
    };
}

// ─── MBTI Cognitive Functions ────────────────────────────────────
const COGNITIVE_FUNCTIONS = {
    INTJ: ['Ni', 'Te', 'Fi', 'Se'],
    INTP: ['Ti', 'Ne', 'Si', 'Fe'],
    ENTJ: ['Te', 'Ni', 'Se', 'Fi'],
    ENTP: ['Ne', 'Ti', 'Fe', 'Si'],
    INFJ: ['Ni', 'Fe', 'Ti', 'Se'],
    INFP: ['Fi', 'Ne', 'Si', 'Te'],
    ENFJ: ['Fe', 'Ni', 'Se', 'Ti'],
    ENFP: ['Ne', 'Fi', 'Te', 'Si'],
    ISTJ: ['Si', 'Te', 'Fi', 'Ne'],
    ISFJ: ['Si', 'Fe', 'Ti', 'Ne'],
    ESTJ: ['Te', 'Si', 'Ne', 'Fi'],
    ESFJ: ['Fe', 'Si', 'Ne', 'Ti'],
    ISTP: ['Ti', 'Se', 'Ni', 'Fe'],
    ISFP: ['Fi', 'Se', 'Ni', 'Te'],
    ESTP: ['Se', 'Ti', 'Fe', 'Ni'],
    ESFP: ['Se', 'Fi', 'Te', 'Ni']
};

const FUNCTION_NAMES = {
    Ni: { en: 'Introverted Intuition', th: 'สัญชาตญาณภายใน', zh: '内倾直觉', emoji: '🔮', desc: { en: 'Future vision & pattern recognition', th: 'มองเห็นอนาคตและรูปแบบ', zh: '未来洞察与模式识别' } },
    Ne: { en: 'Extraverted Intuition', th: 'สัญชาตญาณภายนอก', zh: '外倾直觉', emoji: '💡', desc: { en: 'Idea generation & possibilities', th: 'การสร้างไอเดียและความเป็นไปได้', zh: '创意生成与可能性' } },
    Si: { en: 'Introverted Sensing', th: 'การรับรู้ภายใน', zh: '内倾感觉', emoji: '📚', desc: { en: 'Memory, detail & past experience', th: 'ความจำ รายละเอียดและประสบการณ์', zh: '记忆、细节与过去经验' } },
    Se: { en: 'Extraverted Sensing', th: 'การรับรู้ภายนอก', zh: '外倾感觉', emoji: '🎯', desc: { en: 'Present awareness & action', th: 'การตระหนักในปัจจุบันและการกระทำ', zh: '当下意识与行动' } },
    Ti: { en: 'Introverted Thinking', th: 'การคิดวิเคราะห์ภายใน', zh: '内倾思维', emoji: '🧩', desc: { en: 'Logical analysis & frameworks', th: 'การวิเคราะห์เชิงตรรกะและกรอบความคิด', zh: '逻辑分析与框架' } },
    Te: { en: 'Extraverted Thinking', th: 'การคิดวิเคราะห์ภายนอก', zh: '外倾思维', emoji: '📊', desc: { en: 'Organization & efficiency', th: 'การจัดระเบียบและประสิทธิภาพ', zh: '组织与效率' } },
    Fi: { en: 'Introverted Feeling', th: 'ความรู้สึกภายใน', zh: '内倾情感', emoji: '💎', desc: { en: 'Personal values & authenticity', th: 'คุณค่าส่วนตัวและความจริงแท้', zh: '个人价值观与真实性' } },
    Fe: { en: 'Extraverted Feeling', th: 'ความรู้สึกภายนอก', zh: '外倾情感', emoji: '🤝', desc: { en: 'Harmony & social awareness', th: 'ความสามัคคีและการรับรู้สังคม', zh: '和谐与社交意识' } }
};

const FUNCTION_ROLES = {
    en: ['Dominant', 'Auxiliary', 'Tertiary', 'Inferior'],
    th: ['หลัก', 'รอง', 'ตติยภูมิ', 'ด้อย'],
    zh: ['主导', '辅助', '第三', '劣势']
};

// Career compatibility for MBTI types
const MBTI_CAREER_FIT = {
    INTJ: { en: 'Strategy, Science, Technology, Research', th: 'กลยุทธ์ วิทยาศาสตร์ เทคโนโลยี วิจัย', zh: '战略、科学、技术、研究' },
    INTP: { en: 'Software Engineering, Data Science, Philosophy, Mathematics', th: 'วิศวกรรมซอฟต์แวร์ วิทยาศาสตร์ข้อมูล ปรัชญา คณิตศาสตร์', zh: '软件工程、数据科学、哲学、数学' },
    ENTJ: { en: 'Executive Leadership, Law, Consulting, Entrepreneurship', th: 'ผู้บริหาร กฎหมาย ที่ปรึกษา ผู้ประกอบการ', zh: '高管领导、法律、咨询、创业' },
    ENTP: { en: 'Innovation, Startups, Marketing, Debate/Law', th: 'นวัตกรรม สตาร์ทอัพ การตลาด กฎหมาย', zh: '创新、创业、营销、法律' },
    INFJ: { en: 'Counseling, Writing, Psychology, Social Work', th: 'การให้คำปรึกษา การเขียน จิตวิทยา งานสังคม', zh: '咨询、写作、心理学、社会工作' },
    INFP: { en: 'Creative Arts, Counseling, Education, Writing', th: 'ศิลปะสร้างสรรค์ การให้คำปรึกษา การศึกษา การเขียน', zh: '创意艺术、咨询、教育、写作' },
    ENFJ: { en: 'Teaching, HR, Public Relations, Coaching', th: 'การสอน ทรัพยากรบุคคล ประชาสัมพันธ์ โค้ช', zh: '教学、人力资源、公关、教练' },
    ENFP: { en: 'Creative Roles, Journalism, Counseling, Marketing', th: 'งานสร้างสรรค์ สื่อสารมวลชน ให้คำปรึกษา การตลาด', zh: '创意角色、新闻、咨询、营销' },
    ISTJ: { en: 'Accounting, Administration, Military, Engineering', th: 'บัญชี การบริหาร ทหาร วิศวกรรม', zh: '会计、行政、军事、工程' },
    ISFJ: { en: 'Healthcare, Education, Social Work, Administration', th: 'สาธารณสุข การศึกษา งานสังคม การบริหาร', zh: '医疗、教育、社会工作、行政' },
    ESTJ: { en: 'Management, Law Enforcement, Finance, Military', th: 'การจัดการ การบังคับใช้กฎหมาย การเงิน ทหาร', zh: '管理、执法、金融、军事' },
    ESFJ: { en: 'Nursing, Teaching, Customer Service, Event Planning', th: 'พยาบาล การสอน บริการลูกค้า จัดงาน', zh: '护理、教学、客户服务、活动策划' },
    ISTP: { en: 'Engineering, Mechanics, Forensics, Sports', th: 'วิศวกรรม ช่าง นิติเวช กีฬา', zh: '工程、机械、法医、体育' },
    ISFP: { en: 'Design, Music, Photography, Culinary Arts', th: 'ออกแบบ ดนตรี ถ่ายภาพ ศิลปะการทำอาหาร', zh: '设计、音乐、摄影、烹饪艺术' },
    ESTP: { en: 'Sales, Emergency Services, Military, Sports', th: 'ขาย บริการฉุกเฉิน ทหาร กีฬา', zh: '销售、紧急服务、军事、体育' },
    ESFP: { en: 'Entertainment, Healthcare, Education, Tourism', th: 'บันเทิง สาธารณสุข การศึกษา การท่องเที่ยว', zh: '娱乐、医疗、教育、旅游' }
};

// Personal growth areas for each MBTI type
const MBTI_GROWTH = {
    INTJ: { en: 'Practice empathy and emotional expression. Not every problem needs a system — sometimes people need to be heard.', th: 'ฝึกความเห็นอกเห็นใจและการแสดงอารมณ์ ไม่ใช่ทุกปัญหาต้องมีระบบ — บางครั้งคนต้องการถูกรับฟัง', zh: '练习同理心和情感表达。不是每个问题都需要系统——有时人们需要被倾听。' },
    INTP: { en: 'Take action on your ideas — analysis paralysis is your Kryptonite. Start before you\'re ready.', th: 'ลงมือทำกับไอเดียของคุณ — การวิเคราะห์มากเกินไปคือจุดอ่อน เริ่มก่อนที่จะพร้อม', zh: '对你的想法采取行动——分析瘫痪是你的弱点。在准备好之前就开始。' },
    ENTJ: { en: 'Slow down and listen. Your efficiency can steamroll others\' feelings. Great leaders also serve.', th: 'ชะลอลงและฟัง ประสิทธิภาพของคุณอาจทำร้ายความรู้สึกคนอื่น ผู้นำที่ดียังรับใช้ด้วย', zh: '慢下来倾听。你的效率可能忽视他人的感受。伟大的领导者也服务他人。' },
    ENTP: { en: 'Follow through on projects. You\'re brilliant at starting — now practice finishing. Depth over breadth.', th: 'ทำโปรเจกต์ให้เสร็จ คุณเก่งเรื่องเริ่มต้น — ตอนนี้ฝึกการจบ ลึกมากกว่ากว้าง', zh: '坚持完成项目。你擅长开始——现在练习完成。深度胜过广度。' },
    INFJ: { en: 'Share your vision more openly. Set boundaries — you absorb others\' stress too easily.', th: 'แบ่งปันวิสัยทัศน์ของคุณอย่างเปิดเผยมากขึ้น ตั้งขอบเขต — คุณซึมซับความเครียดของคนอื่นง่ายเกินไป', zh: '更公开地分享你的愿景。设定界限——你太容易吸收他人的压力。' },
    INFP: { en: 'Channel idealism into action. The world needs your vision, but only if you build it, not just dream it.', th: 'เปลี่ยนอุดมการณ์เป็นการกระทำ โลกต้องการวิสัยทัศน์ของคุณ แต่เฉพาะถ้าคุณสร้างมัน ไม่ใช่แค่ฝัน', zh: '将理想主义转化为行动。世界需要你的愿景，但前提是你去建设它，而不只是梦想。' },
    ENFJ: { en: 'Take care of yourself first. You can\'t pour from an empty cup. It\'s okay to say no.', th: 'ดูแลตัวเองก่อน คุณไม่สามารถเทน้ำจากแก้วว่าง ไม่เป็นไรที่จะปฏิเสธ', zh: '先照顾好自己。杯子空了就倒不出水。可以拒绝。' },
    ENFP: { en: 'Develop follow-through habits. Your enthusiasm opens doors — discipline keeps them open.', th: 'พัฒนานิสัยการทำจนเสร็จ ความกระตือรือร้นเปิดประตู — วินัยรักษาประตูให้เปิด', zh: '培养坚持到底的习惯。你的热情打开了门——纪律让门保持敞开。' },
    ISTJ: { en: 'Embrace change when data supports it. Tradition is valuable, but adaptability is survival.', th: 'ยอมรับการเปลี่ยนแปลงเมื่อข้อมูลสนับสนุน ธรรมเนียมมีค่า แต่การปรับตัวคือการอยู่รอด', zh: '当数据支持时拥抱变化。传统有价值，但适应性才是生存之道。' },
    ISFJ: { en: 'Speak up for yourself. Your needs matter. Assert your ideas — they\'re better than you think.', th: 'พูดเพื่อตัวเอง ความต้องการของคุณสำคัญ แสดงไอเดียของคุณ — มันดีกว่าที่คุณคิด', zh: '为自己发声。你的需求很重要。表达你的想法——它们比你认为的更好。' },
    ESTJ: { en: 'Practice flexibility and emotional intelligence. Rules serve people, not the other way around.', th: 'ฝึกความยืดหยุ่นและ EQ กฎเกณฑ์รับใช้คน ไม่ใช่ในทางกลับกัน', zh: '练习灵活性和情商。规则服务于人，而不是反过来。' },
    ESFJ: { en: 'Don\'t avoid conflict — address it constructively. Harmony sometimes requires honest disagreement.', th: 'อย่าหลีกเลี่ยงความขัดแย้ง — จัดการอย่างสร้างสรรค์ ความสามัคคีบางครั้งต้องการการไม่เห็นด้วยอย่างซื่อสัตย์', zh: '不要回避冲突——建设性地解决它。和谐有时需要诚实的分歧。' },
    ISTP: { en: 'Open up emotionally. Efficiency is great for machines, but relationships need vulnerability.', th: 'เปิดใจทางอารมณ์ ประสิทธิภาพดีสำหรับเครื่องจักร แต่ความสัมพันธ์ต้องการการเปิดเผย', zh: '在情感上敞开心扉。效率对机器很好，但关系需要脆弱性。' },
    ISFP: { en: 'Plan further ahead. Living in the moment is beautiful, but long-term goals give your art direction.', th: 'วางแผนล่วงหน้ามากขึ้น การใช้ชีวิตในปัจจุบันสวยงาม แต่เป้าหมายระยะยาวให้ทิศทางแก่งานศิลป์', zh: '做更长远的规划。活在当下很美好，但长期目标给你的艺术方向。' },
    ESTP: { en: 'Think before you leap. Your action bias is a strength, but strategy multiplies its impact.', th: 'คิดก่อนกระโดด อคติในการลงมือทำเป็นจุดแข็ง แต่กลยุทธ์เพิ่มผลกระทบ', zh: '三思而后行。你的行动偏好是优势，但战略能倍增其影响。' },
    ESFP: { en: 'Build routines for the boring-but-important stuff. Discipline frees your spontaneity for when it matters.', th: 'สร้างกิจวัตรสำหรับเรื่องน่าเบื่อแต่สำคัญ วินัยปลดปล่อยความเป็นธรรมชาติของคุณเมื่อถึงเวลาสำคัญ', zh: '为无聊但重要的事建立例程。纪律释放你的自发性，用在重要的时候。' }
};

export function analyzePersonality(mbtiType, dimensions, traits, language = 'en') {
    const lang = language;
    const functions = COGNITIVE_FUNCTIONS[mbtiType] || ['??', '??', '??', '??'];
    const roles = FUNCTION_ROLES[lang] || FUNCTION_ROLES.en;

    const cognitiveStack = functions.map((fn, i) => ({
        function: fn,
        role: roles[i],
        name: FUNCTION_NAMES[fn]?.[lang] || FUNCTION_NAMES[fn]?.en || fn,
        emoji: FUNCTION_NAMES[fn]?.emoji || '❓',
        description: FUNCTION_NAMES[fn]?.desc?.[lang] || FUNCTION_NAMES[fn]?.desc?.en || ''
    }));

    const careerFit = MBTI_CAREER_FIT[mbtiType]?.[lang] || MBTI_CAREER_FIT[mbtiType]?.en || '';
    const growth = MBTI_GROWTH[mbtiType]?.[lang] || MBTI_GROWTH[mbtiType]?.en || '';

    // Compute dominant trait from actual data
    const sortedTraits = Object.entries(traits).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
    const dominantTraits = sortedTraits.slice(0, 2).filter(([, v]) => Math.abs(v) > 0);

    // Dimension strengths (how clear each preference is)
    const dimensionStrengths = {};
    for (const [key, value] of Object.entries(dimensions)) {
        const strength = Math.abs(value);
        dimensionStrengths[key] = {
            value,
            strength,
            clarity: getClarityLevel(strength)
        };
    }

    return {
        cognitiveStack,
        careerFit,
        growth,
        dominantTraits,
        dimensionStrengths
    };
}
