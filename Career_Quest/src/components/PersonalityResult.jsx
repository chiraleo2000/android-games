import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, TrendingUp, BookOpen, Sparkles, Heart, MessageCircle, Shield } from 'lucide-react';
import PropTypes from 'prop-types';
import { getMBTIResults } from '../data/mbtiResults.js';
import './PersonalityResult.css';

const mbtiDescriptions = {
    INTJ: { name: 'The Architect', desc: { en: 'Strategic thinkers with a plan for everything. You see the world as a giant chessboard, always thinking several moves ahead.', th: 'นักคิดเชิงกลยุทธ์ที่มีแผนสำหรับทุกอย่าง คุณมองโลกเป็นกระดานหมากรุกขนาดใหญ่ คิดล่วงหน้าหลายตา', zh: '对一切都有计划的战略思想家。你把世界看作一个巨大的棋盘，总是提前思考好几步。' }, emoji: '🏛️' },
    INTP: { name: 'The Logician', desc: { en: 'Innovative inventors with an unquenchable thirst for knowledge. You dissect ideas like a surgeon — precise, curious, relentless.', th: 'นักประดิษฐ์นวัตกรรมที่กระหายความรู้ คุณวิเคราะห์แนวคิดเหมือนศัลยแพทย์ — แม่นยำ อยากรู้ ไม่หยุดหย่อน', zh: '对知识有无尽渴望的创新发明家。你像外科医生一样解剖想法——精准、好奇、不懈。' }, emoji: '🧪' },
    ENTJ: { name: 'The Commander', desc: { en: 'Bold, imaginative and strong-willed leaders. You don\'t just walk into a room — you take charge of it.', th: 'ผู้นำที่กล้าหาญ จินตนาการสูง และมีเจตจำนงเข้มแข็ง คุณไม่ใช่แค่เดินเข้าห้อง — คุณเข้าควบคุมมัน', zh: '大胆、富有想象力和意志坚强的领导者。你不只是走进房间——你掌控了它。' }, emoji: '👑' },
    ENTP: { name: 'The Debater', desc: { en: 'Smart and curious thinkers who cannot resist a challenge. You love playing devil\'s advocate — not to be difficult, but because it reveals truth.', th: 'นักคิดฉลาดและอยากรู้ที่ไม่สามารถต้านทานความท้าทาย คุณชอบเป็นฝ่ายค้าน — ไม่ใช่เพื่อสร้างปัญหา แต่เพราะมันเปิดเผยความจริง', zh: '聪明好奇、无法抗拒挑战的思考者。你喜欢唱反调——不是为了制造麻烦，而是因为它揭示真相。' }, emoji: '⚡' },
    INFJ: { name: 'The Advocate', desc: { en: 'Quiet and mystical, yet very inspiring and tireless idealists. You feel things deeply and see patterns others miss entirely.', th: 'เงียบและลึกลับ แต่สร้างแรงบันดาลใจและเป็นนักอุดมการณ์ที่ไม่เหนื่อย คุณรู้สึกลึกซึ้งและเห็นรูปแบบที่คนอื่นมองข้าม', zh: '安静而神秘，却极具启发性和不知疲倦的理想主义者。你深深地感受事物，看到别人完全忽视的模式。' }, emoji: '🌟' },
    INFP: { name: 'The Mediator', desc: { en: 'Poetic, kind and altruistic people, always eager to help. You carry an entire universe of feelings inside — rich, complex, beautiful.', th: 'คนมีบทกวี ใจดี และเสียสละ พร้อมช่วยเสมอ คุณมีจักรวาลของความรู้สึกภายใน — ลึกซึ้ง ซับซ้อน สวยงาม', zh: '诗意、善良、利他的人，总是乐于助人。你内心承载着一个完整的感情宇宙——丰富、复杂、美丽。' }, emoji: '🦋' },
    ENFJ: { name: 'The Protagonist', desc: { en: 'Charismatic and inspiring leaders, able to mesmerize listeners. You genuinely care about others\' growth — and they feel it.', th: 'ผู้นำที่มีเสน่ห์และสร้างแรงบันดาลใจ สามารถสะกดผู้ฟัง คุณใส่ใจการเติบโตของคนอื่นอย่างจริงใจ — และพวกเขารู้สึกได้', zh: '魅力四射、鼓舞人心的领导者，能够迷住听众。你真心关心他人的成长——他们能感受到。' }, emoji: '🎭' },
    ENFP: { name: 'The Campaigner', desc: { en: 'Enthusiastic, creative and sociable free spirits. You light up every room and make everyone feel like the most important person in it.', th: 'จิตวิญญาณอิสระที่กระตือรือร้น สร้างสรรค์ และเข้าสังคมเก่ง คุณทำให้ทุกห้องสว่างสดใส และทุกคนรู้สึกเป็นคนสำคัญที่สุด', zh: '热情、有创意、善于社交的自由灵魂。你照亮每个房间，让每个人都觉得自己是最重要的。' }, emoji: '🎨' },
    ISTJ: { name: 'The Logistician', desc: { en: 'Practical and fact-minded individuals. You\'re the backbone of every organization — reliable, thorough, and you always deliver.', th: 'คนที่มุ่งเน้นความจริงและปฏิบัติ คุณเป็นกระดูกสันหลังของทุกองค์กร — เชื่อถือได้ ละเอียดถี่ถ้วน และส่งมอบผลงานเสมอ', zh: '务实、注重事实的个人。你是每个组织的中流砥柱——可靠、周密，总是交付成果。' }, emoji: '📊' },
    ISFJ: { name: 'The Defender', desc: { en: 'Very dedicated and warm protectors. You remember birthdays, notice when someone\'s upset, and quietly fix things before anyone notices.', th: 'ผู้พิทักษ์ที่ทุ่มเทและอบอุ่น คุณจำวันเกิด สังเกตเมื่อใครไม่สบายใจ และแก้ไขอย่างเงียบๆ ก่อนใครจะรู้', zh: '非常忠诚和温暖的守护者。你记住生日，注意到别人不高兴，在任何人注意到之前就悄悄解决问题。' }, emoji: '🛡️' },
    ESTJ: { name: 'The Executive', desc: { en: 'Excellent administrators, unsurpassed at managing things. Order, structure, and results — that\'s your language.', th: 'ผู้บริหารที่ยอดเยี่ยม ไม่มีใครเทียบในการจัดการ ระเบียบ โครงสร้าง และผลลัพธ์ — นั่นคือภาษาของคุณ', zh: '出色的管理者，在管理方面无人能比。秩序、结构和结果——这是你的语言。' }, emoji: '📋' },
    ESFJ: { name: 'The Consul', desc: { en: 'Extraordinarily caring, social and popular people. You\'re the glue that holds communities together — through warmth, not force.', th: 'คนที่เอาใจใส่เป็นพิเศษ เข้าสังคมเก่ง และเป็นที่นิยม คุณเป็นกาวที่ยึดชุมชนไว้ด้วยกัน — ด้วยความอบอุ่น ไม่ใช่กำลัง', zh: '特别关心他人、善于社交和受欢迎的人。你是将社区凝聚在一起的粘合剂——通过温暖，而不是力量。' }, emoji: '🤝' },
    ISTP: { name: 'The Virtuoso', desc: { en: 'Bold and practical experimenters. You learn by doing, fix things by taking them apart, and somehow always have the right tool.', th: 'นักทดลองที่กล้าหาญและปฏิบัติ คุณเรียนรู้โดยการทำ แก้ไขโดยการถอดออก และมักจะมีเครื่องมือที่ถูกต้องเสมอ', zh: '大胆而实际的实验者。你通过实践学习，通过拆解来修理，不知怎么总是有合适的工具。' }, emoji: '🔧' },
    ISFP: { name: 'The Adventurer', desc: { en: 'Flexible and charming artists. You experience life through your senses — beauty, texture, sound — and create meaning from feeling.', th: 'ศิลปินที่ยืดหยุ่นและมีเสน่ห์ คุณสัมผัสชีวิตผ่านประสาทสัมผัส — ความงาม พื้นผิว เสียง — และสร้างความหมายจากความรู้สึก', zh: '灵活而迷人的艺术家。你通过感官体验生活——美、质感、声音——从感觉中创造意义。' }, emoji: '🎸' },
    ESTP: { name: 'The Entrepreneur', desc: { en: 'Smart, energetic and perceptive people. You live in the moment, read people instantly, and always know the fastest path to results.', th: 'คนฉลาด มีพลังงาน และช่างสังเกต คุณอยู่ในปัจจุบัน อ่านคนได้ทันที และรู้เส้นทางที่เร็วที่สุดสู่ผลลัพธ์เสมอ', zh: '聪明、精力充沛和敏锐的人。你活在当下，瞬间读懂他人，总是知道通往结果的最快路径。' }, emoji: '🚀' },
    ESFP: { name: 'The Entertainer', desc: { en: 'Spontaneous, energetic and enthusiastic people. Life is a stage, and you were born to light it up — with joy, laughter, and presence.', th: 'คนที่เป็นธรรมชาติ มีพลังงาน และกระตือรือร้น ชีวิตคือเวที และคุณเกิดมาเพื่อทำให้มันสว่าง — ด้วยความสุข เสียงหัวเราะ และการมีอยู่', zh: '自发、充满活力和热情的人。生活是一个舞台，你生来就是要照亮它——带着欢乐、笑声和存在感。' }, emoji: '🎉' }
};

const dimensionLabels = {
    'E/I': { positive: 'Extraversion', negative: 'Introversion', pLetter: 'E', nLetter: 'I' },
    'N/S': { positive: 'Intuition', negative: 'Sensing', pLetter: 'N', nLetter: 'S' },
    'F/T': { positive: 'Feeling', negative: 'Thinking', pLetter: 'F', nLetter: 'T' },
    'P/J': { positive: 'Perceiving', negative: 'Judging', pLetter: 'P', nLetter: 'J' }
};

function PersonalityResult({ mbtiType, dimensions, percentages, onHome, language }) {
    const results = getMBTIResults(mbtiType);

    // Get dimension percentages
    const getDimensionPercent = (letter) => {
        return percentages[letter] || 50;
    };

    return (
        <motion.div
            className="personality-result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Type Header */}
            <motion.div
                className="type-header"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="type-code">{mbtiType}</h1>
                <h2 className="type-name">{results.name}</h2>
                <p className="type-desc">{results.description}</p>
            </motion.div>

            {/* Dimension Bars with Confidence */}
            <motion.div
                className="dimensions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                {Object.entries(dimensionLabels).map(([key, dimLabels], index) => {
                    const posPercent = getDimensionPercent(dimLabels.pLetter);
                    const negPercent = getDimensionPercent(dimLabels.nLetter);
                    const isPositive = posPercent > negPercent;
                    const displayPercent = isPositive ? posPercent : negPercent;

                    return (
                        <motion.div
                            key={key}
                            className="dimension-row"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <div className="dimension-labels">
                                <span className={isPositive ? 'dim-label' : 'dim-label active'}>
                                    {dimLabels.nLetter} - {dimLabels.negative}
                                </span>
                                <span className={isPositive ? 'dim-label active' : 'dim-label'}>
                                    {dimLabels.positive} - {dimLabels.pLetter}
                                </span>
                            </div>
                            <div className="dimension-bar">
                                <motion.div
                                    className="dimension-fill"
                                    initial={{ width: '50%' }}
                                    animate={{ width: `${displayPercent}%` }}
                                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                                />
                                <div className="dimension-center" />
                            </div>
                            <div className="dimension-meta">
                                <span className="dimension-percent">{Math.round(displayPercent)}%</span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Strengths & Weaknesses */}
            <motion.div
                className="traits-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
            >
                <div className="traits-grid">
                    <div className="trait-column">
                        <h3 className="section-title">💪 Strengths</h3>
                        <ul className="trait-list">
                            {results.strengths.map((strength, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + i * 0.05 }}
                                >
                                    {strength}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <div className="trait-column">
                        <h3 className="section-title">⚠️ Weaknesses</h3>
                        <ul className="trait-list">
                            {results.weaknesses.map((weakness, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + i * 0.05 }}
                                >
                                    {weakness}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Career Recommendations */}
            <motion.div
                className="career-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <h3 className="section-title">
                    <Briefcase size={24} /> Career Recommendations
                </h3>
                <div className="career-grid">
                    {results.careerRecommendations.map((career, i) => (
                        <motion.div
                            key={i}
                            className="career-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3 + i * 0.05 }}
                        >
                            <div className="career-header">
                                <span className="career-title">{career.title}</span>
                                <span className="career-match">{career.match}%</span>
                            </div>
                            <span className="career-category">{career.category}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Personal Growth */}
            <motion.div
                className="growth-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
            >
                <h3 className="section-title">
                    <TrendingUp size={24} /> Personal Growth
                </h3>
                <div className="growth-grid">
                    <div className="growth-card">
                        <div className="growth-header">
                            <Heart size={20} />
                            <span>Relationships</span>
                        </div>
                        <ul className="growth-list">
                            {results.personalGrowth.relationships.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="growth-card">
                        <div className="growth-header">
                            <Shield size={20} />
                            <span>Stress Management</span>
                        </div>
                        <ul className="growth-list">
                            {results.personalGrowth.stressManagement.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="growth-card">
                        <div className="growth-header">
                            <MessageCircle size={20} />
                            <span>Communication</span>
                        </div>
                        <ul className="growth-list">
                            {results.personalGrowth.communication.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Learning Style */}
            <motion.div
                className="learning-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
            >
                <h3 className="section-title">
                    <BookOpen size={24} /> Learning Style
                </h3>
                <div className="learning-grid">
                    <div className="learning-card">
                        <h4>Preferences</h4>
                        <ul className="learning-list">
                            {results.learningStyle.preferences.map((pref, i) => (
                                <li key={i}>{pref}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="learning-card">
                        <h4>Strategies</h4>
                        <ul className="learning-list">
                            {results.learningStyle.strategies.map((strategy, i) => (
                                <li key={i}>{strategy}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* AI Era Strategies */}
            <motion.div
                className="ai-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
            >
                <h3 className="section-title">
                    <Sparkles size={24} /> Thriving in the AI Era
                </h3>
                <div className="ai-grid">
                    <div className="ai-card">
                        <h4>🎯 Opportunities</h4>
                        <ul className="ai-list">
                            {results.aiEraStrategies.opportunities.map((opp, i) => (
                                <li key={i}>{opp}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="ai-card">
                        <h4>📚 Skill Development</h4>
                        <ul className="ai-list">
                            {results.aiEraStrategies.skillDevelopment.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="ai-card">
                        <h4>💡 Adaptation Tips</h4>
                        <ul className="ai-list">
                            {results.aiEraStrategies.adaptationTips.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Home Button */}
            <motion.button
                className="btn btn-primary home-btn"
                onClick={onHome}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Home size={20} />
                Return Home
            </motion.button>
        </motion.div>
    );
}

PersonalityResult.propTypes = {
    mbtiType: PropTypes.string.isRequired,
    dimensions: PropTypes.object.isRequired,
    percentages: PropTypes.object.isRequired,
    onHome: PropTypes.func.isRequired,
    language: PropTypes.string
};

PersonalityResult.defaultProps = {
    language: 'en'
};

export default PersonalityResult;
