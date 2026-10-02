import { motion } from 'framer-motion';
import { ChevronRight, Lock, Crown } from 'lucide-react';
import PropTypes from 'prop-types';
import { canAccessCareer } from '../utils/premiumAccess.js';
import './CareerSelection.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    },
    exit: { opacity: 0 }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
};

function CareerSelection({ mode, groups, careers, onSelect, language }) {
    const items = mode === 'group' ? groups : careers;

    return (
        <motion.div
            className="career-selection"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="selection-grid">
                {items?.map((item, index) => (
                    <motion.button
                        key={item.id}
                        className={`selection-card ${item.isPremium && !canAccessCareer(item) ? 'premium-locked' : ''} ${item.isPremium && canAccessCareer(item) ? 'premium-unlocked' : ''}`}
                        onClick={() => {
                            if (item.isPremium && !canAccessCareer(item)) {
                                alert("🔒 Premium Content\n\nThis career is available in the Premium version.\nUpgrade to unlock all premium careers!\n\nเนื้อหานี้สำหรับเวอร์ชันพรีเมียมเท่านั้น");
                                return;
                            }
                            onSelect(item);
                        }}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ '--delay': `${index * 0.05}s` }}
                    >
                        <div className="selection-emoji">
                            {item.emoji || '💼'}
                            {item.isPremium && !canAccessCareer(item) && <div className="lock-badge"><Lock size={12} /></div>}
                            {item.isPremium && canAccessCareer(item) && <div className="crown-badge"><Crown size={12} /></div>}
                        </div>
                        <div className="selection-info">
                            <h3 className="selection-title">
                                {item.title?.[language] || item.title?.en || item.title}
                            </h3>
                            {item.description && (
                                <p className="selection-desc">
                                    {item.description?.[language] || item.description?.en || item.description}
                                </p>
                            )}
                            {mode === 'group' && item.careers && (
                                <span className="selection-count">
                                    {item.careers.length} careers
                                </span>
                            )}
                        </div>
                        <div className="selection-arrow">
                            {item.isPremium && !canAccessCareer(item) ? <Lock size={20} /> : <ChevronRight size={24} />}
                        </div>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}

CareerSelection.propTypes = {
    mode: PropTypes.oneOf(['group', 'career']).isRequired,
    groups: PropTypes.array,
    careers: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
    language: PropTypes.string
};

CareerSelection.defaultProps = {
    language: 'en',
    groups: [],
    careers: []
};

export default CareerSelection;
