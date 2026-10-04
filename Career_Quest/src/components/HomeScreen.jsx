import { motion } from 'framer-motion';
import { Briefcase, Brain, Compass, Sparkles, Rocket, Star, Play, Crown, Lock } from 'lucide-react';
import PropTypes from 'prop-types';
import { isPremiumUser } from '../utils/premiumAccess.js';
import './HomeScreen.css';

const translations = {
    en: {
        welcome: 'Welcome to',
        tagline: 'Discover your ideal career path through interactive simulations and personality assessments',
        startCareer: 'Career Simulation',
        careerDesc: 'Explore 64 career paths across 8 categories',
        startPersonality: 'Personality Test',
        personalityDesc: '60-question MBTI assessment to discover your type',
        features: ['Interactive Scenarios', 'Real Decisions', 'Personalized Results'],
        resume: 'Resume Session',
        resumeDesc: 'Continue where you left off'
    },
    th: {
        welcome: 'ยินดีต้อนรับสู่',
        tagline: 'ค้นพบเส้นทางอาชีพในฝันผ่านการจำลองแบบโต้ตอบและการประเมินบุคลิกภาพ',
        startCareer: 'จำลองอาชีพ',
        careerDesc: 'สำรวจ 64 เส้นทางอาชีพใน 8 หมวดหมู่',
        startPersonality: 'แบบทดสอบบุคลิกภาพ',
        personalityDesc: 'แบบทดสอบ MBTI 60 ข้อเพื่อค้นพบตัวตนของคุณ',
        features: ['สถานการณ์โต้ตอบ', 'การตัดสินใจจริง', 'ผลลัพธ์เฉพาะบุคคล'],
        resume: 'เล่นต่อ',
        resumeDesc: 'ทำต่อจากที่ค้างไว้'
    },
    zh: {
        welcome: '欢迎来到',
        tagline: '通过互动模拟和性格评估发现您的理想职业道路',
        startCareer: '职业模拟',
        careerDesc: '探索8个类别中的64条职业道路',
        startPersonality: '性格测试',
        personalityDesc: '60题MBTI评估，发现您的类型',
        features: ['互动场景', '真实决策', '个性化结果'],
        resume: '继续会话',
        resumeDesc: '从上次停下的地方继续'
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    },
    exit: { opacity: 0, y: 20 }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

function HomeScreen({ onStartCareer, onStartPersonality, language, savedState, onResume }) {
    const t = translations[language] || translations.en;
    const premium = isPremiumUser();

    const getResumeDetails = () => {
        if (!savedState) return { title: t.resume, desc: t.resumeDesc };

        if (savedState.gameState === 'PLAYING' && savedState.currentCareer) {
            const careerTitle = savedState.currentCareer.title?.[language] || savedState.currentCareer.title?.en || 'Career';
            const current = (savedState.currentScenarioIndex || 0) + 1;
            const total = savedState.currentCareer.activeScenarios?.length || 40;
            return {
                title: careerTitle,
                desc: `${language === 'th' ? 'คำถามที่' : language === 'zh' ? '问题' : 'Question'} ${current} / ${total}`
            };
        } else if (savedState.gameState === 'PERSONALITY_TEST') {
            const current = (savedState.ptIndex || 0) + 1;
            const total = savedState.ptQuestions?.length || 60;
            return {
                title: t.startPersonality,
                desc: `${language === 'th' ? 'คำถามที่' : language === 'zh' ? '问题' : 'Question'} ${current} / ${total}`
            };
        }

        return { title: t.resume, desc: t.resumeDesc };
    };

    const resumeInfo = getResumeDetails();

    return (
        <motion.div
            className="home-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Hero Section */}
            <motion.div className="hero" variants={itemVariants}>
                <motion.div
                    className="hero-icon"
                    animate={{
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Compass size={80} />
                </motion.div>

                <p className="hero-welcome">{t.welcome}</p>
                <h1 className="hero-title">
                    <span className="text-gradient">Career</span>
                    <span className="text-accent"> Quest</span>
                </h1>
                <p className="hero-tagline">{t.tagline}</p>

                {/* Feature Pills */}
                <div className="feature-pills">
                    {t.features.map((feature, index) => (
                        <motion.span
                            key={index}
                            className="feature-pill"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <Sparkles size={12} />
                            {feature}
                        </motion.span>
                    ))}
                    <motion.span
                        className={`feature-pill ${premium ? 'premium-pill' : 'free-pill'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {premium ? <Crown size={12} /> : <Lock size={12} />}
                        {premium
                            ? (language === 'th' ? 'พรีเมียม' : language === 'zh' ? '高级版' : 'Premium')
                            : (language === 'th' ? 'ฟรี' : language === 'zh' ? '免费版' : 'Free')
                        }
                    </motion.span>
                </div>
            </motion.div>

            {/* Resume Button */}
            {savedState && (
                <motion.div
                    className="resume-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.button
                        className="action-card resume-card"
                        onClick={onResume}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="card-glow-effect" />
                        <div className="card-icon">
                            <Play size={40} fill="currentColor" />
                        </div>
                        <div className="card-content">
                            <div className="resume-badge">{t.resume}</div>
                            <h3 className="card-title">{resumeInfo.title}</h3>
                            <p className="card-desc">{resumeInfo.desc}</p>
                        </div>
                        <div className="card-arrow">
                            <Rocket size={24} />
                        </div>
                    </motion.button>
                </motion.div>
            )}

            {/* Action Cards */}
            <motion.div className="action-cards" variants={itemVariants}>
                {/* Career Simulation Card */}
                <motion.button
                    className="action-card career-card"
                    onClick={onStartCareer}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="card-glow-effect" />
                    <div className="card-icon">
                        <Briefcase size={40} />
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">{t.startCareer}</h3>
                        <p className="card-desc">{t.careerDesc}</p>
                    </div>
                    <div className="card-arrow">
                        <Rocket size={24} />
                    </div>
                </motion.button>

                {/* Personality Test Card */}
                <motion.button
                    className="action-card personality-card"
                    onClick={onStartPersonality}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="card-glow-effect" />
                    <div className="card-icon">
                        <Brain size={40} />
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">{t.startPersonality}</h3>
                        <p className="card-desc">{t.personalityDesc}</p>
                    </div>
                    <div className="card-arrow">
                        <Star size={24} />
                    </div>
                </motion.button>
            </motion.div>

            {/* Decorative Elements */}
            <div className="home-decorations">
                <motion.div
                    className="floating-orb orb-1"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="floating-orb orb-2"
                    animate={{
                        y: [0, 15, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="floating-orb orb-3"
                    animate={{
                        y: [0, -25, 0],
                        opacity: [0.25, 0.55, 0.25]
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />
            </div>
        </motion.div>
    );
}

HomeScreen.propTypes = {
    onStartCareer: PropTypes.func.isRequired,
    onStartPersonality: PropTypes.func.isRequired,
    language: PropTypes.string,
    savedState: PropTypes.object,
    onResume: PropTypes.func
};

HomeScreen.defaultProps = {
    language: 'en',
    savedState: null,
    onResume: () => { }
};

export default HomeScreen;
