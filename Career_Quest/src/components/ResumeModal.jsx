import { motion } from 'framer-motion';
import { Play, Trash2, Clock } from 'lucide-react';
import PropTypes from 'prop-types';
import './ResumeModal.css';

function ResumeModal({ savedState, onResume, onDiscard, language }) {
    const savedAt = savedState?.savedAt ? new Date(savedState.savedAt) : null;
    const isCareer = savedState?.gameState === 'PLAYING';
    const isPersonality = savedState?.gameState === 'PERSONALITY_TEST';

    const getProgress = () => {
        if (isCareer) {
            const total = savedState.currentCareer?.activeScenarios?.length || 40;
            const current = savedState.currentScenarioIndex || 0;
            return Math.round((current / total) * 100);
        }
        if (isPersonality) {
            const current = savedState.ptIndex || 0;
            return Math.round((current / 100) * 100);
        }
        return 0;
    };

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="resume-modal"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
                <div className="resume-icon">
                    <Clock size={48} />
                </div>

                <h2 className="resume-title">Resume Session?</h2>

                <p className="resume-desc">
                    You have an unfinished {isCareer ? 'career simulation' : 'personality test'}.
                </p>

                {/* Session Info */}
                <div className="session-info">
                    {isCareer && savedState.currentCareer && (
                        <div className="session-detail">
                            <span className="session-emoji">{savedState.currentCareer.emoji || '💼'}</span>
                            <span className="session-name">
                                {savedState.currentCareer.title?.en || 'Career'}
                            </span>
                        </div>
                    )}

                    <div className="session-progress">
                        <span>Progress: {getProgress()}%</span>
                        <div className="progress-bar mini">
                            <div
                                className="progress-fill"
                                style={{ width: `${getProgress()}%` }}
                            />
                        </div>
                    </div>

                    {savedAt && (
                        <div className="session-time">
                            Saved: {savedAt.toLocaleDateString()} {savedAt.toLocaleTimeString()}
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="resume-actions">
                    <button className="btn btn-secondary" onClick={onDiscard}>
                        <Trash2 size={18} />
                        Start Fresh
                    </button>
                    <button className="btn btn-primary" onClick={onResume}>
                        <Play size={18} />
                        Continue
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

ResumeModal.propTypes = {
    savedState: PropTypes.object.isRequired,
    onResume: PropTypes.func.isRequired,
    onDiscard: PropTypes.func.isRequired,
    language: PropTypes.string
};

ResumeModal.defaultProps = {
    language: 'en'
};

export default ResumeModal;
