import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Brain, Heart, Zap, Home, RotateCcw, TrendingUp, Award } from 'lucide-react';
import PropTypes from 'prop-types';
import { analyzeCareerResult } from '../utils/scoringEngine.js';
import GIFDisplay from './GIFDisplay.jsx';
import { gifLoader } from '../services/GIFLoader.js';
import './ResultScreen.css';

const statConfig = {
    competence: { icon: Brain, color: '#00f5ff', label: { en: 'Competence', th: 'ความสามารถ', zh: '能力' } },
    ethics: { icon: Heart, color: '#ff6b35', label: { en: 'Ethics', th: 'จริยธรรม', zh: '道德' } },
    leadership: { icon: Trophy, color: '#ffd700', label: { en: 'Leadership', th: 'ภาวะผู้นำ', zh: '领导力' } },
    innovation: { icon: Zap, color: '#ff00ff', label: { en: 'Innovation', th: 'นวัตกรรม', zh: '创新' } }
};

const translations = {
    en: {
        completed: 'Career Completed!',
        finalScore: 'Final Score',
        home: 'Home',
        retry: 'Try Again',
        yourProfile: 'Your Decision Profile',
        personalAnalysis: 'Personal Analysis',
        statBreakdown: 'Skill Breakdown',
        growthAreas: 'Growth Recommendations',
        growFor: 'Improve your'
    },
    th: {
        completed: 'จบอาชีพแล้ว!',
        finalScore: 'คะแนนรวม',
        home: 'หน้าหลัก',
        retry: 'ลองใหม่',
        yourProfile: 'โปรไฟล์การตัดสินใจ',
        personalAnalysis: 'การวิเคราะห์ส่วนบุคคล',
        statBreakdown: 'รายละเอียดทักษะ',
        growthAreas: 'แนะนำการพัฒนา',
        growFor: 'พัฒนา'
    },
    zh: {
        completed: '职业完成！',
        finalScore: '最终分数',
        home: '首页',
        retry: '重试',
        yourProfile: '你的决策档案',
        personalAnalysis: '个人分析',
        statBreakdown: '技能详情',
        growthAreas: '成长建议',
        growFor: '提升你的'
    }
};

function ResultScreen({ career, stats, onHome, onRetry, language }) {
    const t = translations[language] || translations.en;

    const analysis = useMemo(
        () => analyzeCareerResult(stats, career, language),
        [stats, career, language]
    );

    const { compositeScore, tier, archetype, narrative, statAnalysis, growthAreas } = analysis;
    
    // Get random celebration GIF
    const celebrationGIFId = gifLoader.getRandomFromCategory('celebration');

    return (
        <motion.div
            className="result-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Header */}
            <motion.div
                className="result-header"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <span className="result-emoji">{career?.emoji || '🎯'}</span>
                <h1 className="result-title">{t.completed}</h1>
                <p className="result-career">
                    {career?.title?.[language] || career?.title?.en || 'Career'}
                </p>
            </motion.div>
            
            {/* Celebration GIF */}
            {celebrationGIFId && (
                <motion.div
                    className="celebration-gif-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <GIFDisplay 
                        gifId={celebrationGIFId}
                        category="celebration"
                        className="celebration-gif"
                    />
                </motion.div>
            )}

            {/* Score Circle */}
            <motion.div
                className="score-circle"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            >
                <div className="score-inner-content">
                    <span className="score-value" style={{ color: tier.color }}>{compositeScore}</span>
                    <span className="score-label">{t.finalScore}</span>
                </div>
                <svg viewBox="0 0 120 120" className="score-svg">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <motion.circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke={tier.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={339.292}
                        initial={{ strokeDashoffset: 339.292 }}
                        animate={{ strokeDashoffset: 339.292 * (1 - compositeScore / 100) }}
                        transition={{ delay: 0.6, duration: 1.5, ease: 'easeOut' }}
                        style={{ transformOrigin: 'center', transform: 'rotate(-90deg)' }}
                    />
                </svg>
            </motion.div>

            {/* Tier Badge */}
            <motion.div
                className="main-rating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <span className="tier-badge-emoji">{tier.emoji}</span>
                <h2 style={{ color: tier.color }}>
                    {tier.label[language] || tier.label.en}
                </h2>
            </motion.div>

            {/* Decision Archetype */}
            <motion.div
                className="archetype-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
            >
                <div className="archetype-header">
                    <span className="archetype-emoji">{archetype.emoji}</span>
                    <h3 className="archetype-label">{t.yourProfile}</h3>
                </div>
                <h2 className="archetype-name">
                    {archetype.label[language] || archetype.label.en}
                </h2>
                <p className="archetype-desc">
                    {archetype.desc[language] || archetype.desc.en}
                </p>
            </motion.div>

            {/* Personal Narrative */}
            <motion.div
                className="narrative-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
            >
                <div className="narrative-header">
                    <Award size={18} color="#00f5ff" />
                    <h3>{t.personalAnalysis}</h3>
                </div>
                <p className="narrative-text">{narrative}</p>
            </motion.div>

            {/* Stat Breakdown */}
            <motion.div
                className="stats-analysis-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
            >
                <h3 className="section-title">{t.statBreakdown}</h3>
                {Object.entries(statAnalysis).map(([key, data], index) => {
                    const config = statConfig[key];
                    const Icon = config.icon;

                    return (
                        <motion.div
                            key={key}
                            className="stat-analysis-card"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.7 + index * 0.1 }}
                        >
                            <div className="stat-header">
                                <div className="stat-icon-wrapper" style={{ backgroundColor: `${config.color}20` }}>
                                    <Icon size={18} color={config.color} />
                                </div>
                                <span className="stat-name">{config.label[language] || config.label.en}</span>
                                <span className="stat-score-val" style={{ color: config.color }}>
                                    {data.value}/100
                                </span>
                            </div>

                            <div className="stat-bar-bg">
                                <motion.div
                                    className="stat-bar-fill"
                                    style={{ backgroundColor: config.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${data.value}%` }}
                                    transition={{ duration: 1, delay: 1.8 + index * 0.1 }}
                                />
                            </div>

                            <div className="stat-insight">
                                <span className="stat-tier" style={{ color: data.tier.color }}>
                                    {data.tier.emoji} {data.tier.label[language] || data.tier.label.en}
                                </span>
                                <p className="stat-desc">{data.insight}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Growth Recommendations */}
            {growthAreas.length > 0 && (
                <motion.div
                    className="growth-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                >
                    <div className="growth-header">
                        <TrendingUp size={18} color="#00ff88" />
                        <h3>{t.growthAreas}</h3>
                    </div>
                    {growthAreas.map((area) => (
                        <div key={area.stat} className="growth-card">
                            <span className="growth-stat-label" style={{ color: statConfig[area.stat]?.color }}>
                                {t.growFor} {statConfig[area.stat]?.label[language] || area.stat}
                            </span>
                            <p className="growth-recommendation">{area.recommendation}</p>
                        </div>
                    ))}
                </motion.div>
            )}

            {/* Actions */}
            <motion.div
                className="result-actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <button className="btn btn-secondary" onClick={onHome}>
                    <Home size={20} />
                    {t.home}
                </button>
                <button className="btn btn-primary" onClick={onRetry}>
                    <RotateCcw size={20} />
                    {t.retry}
                </button>
            </motion.div>
        </motion.div>
    );
}

ResultScreen.propTypes = {
    career: PropTypes.object,
    stats: PropTypes.object.isRequired,
    onHome: PropTypes.func.isRequired,
    onRetry: PropTypes.func.isRequired,
    language: PropTypes.string
};

ResultScreen.defaultProps = {
    language: 'en'
};

export default ResultScreen;
