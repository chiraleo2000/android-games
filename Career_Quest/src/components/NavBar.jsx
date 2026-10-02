import { motion } from 'framer-motion';
import { Home, ArrowLeft, Settings, Volume2, VolumeX, Sun, Moon, Menu } from 'lucide-react';
import PropTypes from 'prop-types';
import ThemeToggle from './ThemeToggle';
import './NavBar.css';

function NavBar({
    title,
    showBack,
    onBack,
    onHome,
    onSettings,
    musicEnabled,
    onToggleMusic
}) {
    return (
        <nav className="nav-bar">
            <div className="nav-left">
                {showBack ? (
                    <motion.button
                        className="btn-icon nav-btn"
                        onClick={onBack}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Go back"
                    >
                        <ArrowLeft size={22} />
                    </motion.button>
                ) : (
                    <motion.button
                        className="btn-icon nav-btn"
                        onClick={onHome}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Home"
                    >
                        <Home size={22} />
                    </motion.button>
                )}
            </div>

            <div className="nav-center">
                <motion.h1
                    className="nav-title"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={title}
                >
                    {title}
                </motion.h1>
            </div>

            <div className="nav-right">
                <motion.button
                    className="btn-icon nav-btn"
                    onClick={onToggleMusic}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={musicEnabled ? 'Mute music' : 'Enable music'}
                >
                    {musicEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </motion.button>

                <ThemeToggle />

                <motion.button
                    className="btn-icon nav-btn"
                    onClick={onSettings}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Settings"
                >
                    <Settings size={20} />
                </motion.button>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    showBack: PropTypes.bool,
    onBack: PropTypes.func,
    onHome: PropTypes.func.isRequired,
    onSettings: PropTypes.func.isRequired,
    musicEnabled: PropTypes.bool.isRequired,
    onToggleMusic: PropTypes.func.isRequired
};

NavBar.defaultProps = {
    showBack: false,
    onBack: () => { }
};

export default NavBar;
