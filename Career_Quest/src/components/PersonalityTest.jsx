import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PropTypes from 'prop-types';
import './PersonalityTest.css';

const LIKERT_OPTIONS = [
    { id: 1, label: { en: 'Strongly Disagree', th: 'ไม่เห็นด้วยอย่างยิ่ง', zh: '非常不同意' } },
    { id: 2, label: { en: 'Disagree', th: 'ไม่เห็นด้วย', zh: '不同意' } },
    { id: 3, label: { en: 'Neutral', th: 'เฉยๆ', zh: '中立' } },
    { id: 4, label: { en: 'Agree', th: 'เห็นด้วย', zh: '同意' } },
    { id: 5, label: { en: 'Strongly Agree', th: 'เห็นด้วยอย่างยิ่ง', zh: '非常同意' } }
];

function PersonalityTest({ questionIndex, totalQuestions, question, onAnswer, onBack, language }) {
    const progress = ((questionIndex + 1) / totalQuestions) * 100;

    return (
        <motion.div
            className="personality-test"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Progress */}
            <div className="pt-progress">
                <div className="progress-info">
                    <span className="progress-label">Question {questionIndex + 1} of {totalQuestions}</span>
                    <span className="progress-percent">{Math.round(progress)}%</span>
                </div>
                <div className="progress-bar">
                    <motion.div
                        className="progress-fill"
                        animate={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Back Button */}
            {questionIndex > 0 && (
                <motion.button
                    className="pt-back-btn"
                    onClick={onBack}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeft size={16} />
                    <span>Previous</span>
                </motion.button>
            )}

            {/* Question */}
            <motion.div
                className="pt-question"
                key={questionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                <div className="question-badge">
                    <span className="question-dimension">{question?.dimension}</span>
                </div>
                <p className="question-text">
                    {question?.text?.[language] || question?.text?.en || question?.text}
                </p>
            </motion.div>

            {/* Likert Scale */}
            <div className="likert-scale">
                {LIKERT_OPTIONS.map((option) => (
                    <motion.button
                        key={option.id}
                        className="likert-btn"
                        onClick={() => onAnswer(option.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: option.id * 0.05 }}
                    >
                        <span className="likert-number">{option.id}</span>
                        <span className="likert-label">
                            {option.label[language] || option.label.en}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Scale Labels */}
            <div className="scale-labels">
                <span>{LIKERT_OPTIONS[0].label[language] || LIKERT_OPTIONS[0].label.en}</span>
                <span>{LIKERT_OPTIONS[4].label[language] || LIKERT_OPTIONS[4].label.en}</span>
            </div>
        </motion.div>
    );
}

PersonalityTest.propTypes = {
    questionIndex: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
    onAnswer: PropTypes.func.isRequired,
    onBack: PropTypes.func, // Optional func
    language: PropTypes.string
};

PersonalityTest.defaultProps = {
    language: 'en'
};

export default PersonalityTest;
