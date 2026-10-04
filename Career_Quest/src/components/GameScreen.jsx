import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Trophy, Zap, Home } from 'lucide-react';
import PropTypes from 'prop-types';
import GIFDisplay from './GIFDisplay.jsx';
import { gifLoader } from '../services/GIFLoader.js';
import './GameScreen.css';

const statIcons = {
    competence: Brain,
    ethics: Heart,
    leadership: Trophy,
    innovation: Zap
};

const statColors = {
    competence: '#00f5ff',
    ethics: '#ff6b35',
    leadership: '#ffd700',
    innovation: '#ff00ff'
};

const statLabels = {
    en: { competence: 'Skill', ethics: 'Ethics', leadership: 'Leadership', innovation: 'Innovation' },
    th: { competence: 'ทักษะ', ethics: 'จริยธรรม', leadership: 'ภาวะผู้นำ', innovation: 'นวัตกรรม' },
    zh: { competence: '技能', ethics: '道德', leadership: '领导力', innovation: '创新' }
};

function GameScreen({
    career,
    scenarioIndex,
    stats,
    feedback,
    onAnswer,
    onContinue,
    onHome,
    language
}) {
    const scenario = career?.activeScenarios?.[scenarioIndex];
    const totalScenarios = career?.activeScenarios?.length || 40;
    const progress = ((scenarioIndex + 1) / totalScenarios) * 100;
    const feedbackText = typeof feedback === 'string'
        ? feedback
        : (feedback?.[language] || feedback?.en || feedback?.th || feedback?.zh || '');
    
    // Determine feedback GIF category based on feedback content
    const getFeedbackGIFCategory = () => {
        if (!feedback) return null;
        
        const feedbackText = (typeof feedback === 'string'
            ? feedback
            : (feedback?.[language] || feedback?.en || feedback?.th || feedback?.zh || '')
        ).toLowerCase();
        
        // Check for positive indicators
        if (feedbackText.includes('great') || feedbackText.includes('excellent') || 
            feedbackText.includes('well done') || feedbackText.includes('good') ||
            feedbackText.includes('ดีมาก') || feedbackText.includes('เยี่ยม')) {
            return 'feedback_positive';
        }
        
        // Check for negative indicators
        if (feedbackText.includes('mistake') || feedbackText.includes('wrong') || 
            feedbackText.includes('poor') || feedbackText.includes('bad') ||
            feedbackText.includes('ผิดพลาด') || feedbackText.includes('แย่')) {
            return 'feedback_negative';
        }
        
        // Default to neutral
        return 'feedback_neutral';
    };
    
    const feedbackGIFId = feedback ? gifLoader.getRandomFromCategory(getFeedbackGIFCategory()) : null;

    if (!scenario) {
        return (
            <div className="game-screen" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                    <h2>Loading Scenario...</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '10px' }}>
                        Index: {scenarioIndex} | Career: {career?.id}
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={onHome}
                        style={{ marginTop: '20px' }}
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="game-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Top Bar with Quit */}
            <div className="game-top-bar">
                <button className="game-quit-btn" onClick={onHome} aria-label="Quit Game">
                    <Home size={24} />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="game-progress">
                <div className="progress-info">
                    <span className="progress-label">Question {scenarioIndex + 1} of {totalScenarios}</span>
                    <span className="progress-percent">{Math.round(progress)}%</span>
                </div>
                <div className="progress-bar">
                    <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Scenario */}
            <div className="scenario-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={scenarioIndex}
                        className="scenario-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <p className="scenario-text">
                            {scenario.text?.[language] || scenario.text?.en || scenario.text}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Options or Feedback */}
            <AnimatePresence mode="wait">
                {feedback ? (
                    <motion.div
                        key="feedback"
                        className="feedback-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <div className="feedback-card">
                            {feedbackGIFId && (
                                <div className="feedback-gif-wrapper">
                                    <GIFDisplay 
                                        gifId={feedbackGIFId}
                                        category={getFeedbackGIFCategory()}
                                        className="feedback-gif"
                                    />
                                </div>
                            )}
                            <p className="feedback-text">
                                {feedbackText || (language === 'th' ? 'คุณตัดสินใจแล้ว' : language === 'zh' ? '你做出了选择' : 'You made your choice.')}
                            </p>
                            <button className="feedback-continue-btn" onClick={onContinue}>
                                {language === 'th' ? 'แตะเพื่อไปต่อ' : language === 'zh' ? '点击继续' : 'Tap to Continue'}
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="options"
                        className="options-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {scenario.options?.map((option, index) => (
                            <motion.button
                                key={option.id}
                                className="option-btn"
                                onClick={() => onAnswer(option)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, x: 8 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="option-letter">{option.id}</span>
                                <span className="option-text">
                                    {option.text?.[language] || option.text?.en || option.text}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

GameScreen.propTypes = {
    career: PropTypes.object.isRequired,
    scenarioIndex: PropTypes.number.isRequired,
    stats: PropTypes.object.isRequired,
    feedback: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onAnswer: PropTypes.func.isRequired,
    onContinue: PropTypes.func, // Optional, but recommended
    onHome: PropTypes.func.isRequired,
    language: PropTypes.string
};

GameScreen.defaultProps = {
    language: 'en',
    feedback: null,
    onContinue: () => { }
};

export default GameScreen;
