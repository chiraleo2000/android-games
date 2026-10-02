import { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, Menu, ArrowLeft, Volume2, VolumeX, Sun, Moon,
    Brain, Briefcase, Play, Pause, Settings, X, ChevronRight,
    Trophy, Heart, Zap, Target, Star, Sparkles, Compass
} from 'lucide-react';
import Confetti from 'react-confetti';

// Import game data with code splitting
const gameContentPromise = import('./data/gameContent.js');
const mbtiQuestionsPromise = import('./questions/personality/mbtiQuestionBank.js');
const mbtiScoringPromise = import('./utils/mbtiScoringEngine.js');

// Lazy load components
const HomeScreen = lazy(() => import('./components/HomeScreen.jsx'));
const CareerSelection = lazy(() => import('./components/CareerSelection.jsx'));
const GameScreen = lazy(() => import('./components/GameScreen.jsx'));
const ResultScreen = lazy(() => import('./components/ResultScreen.jsx'));
const PersonalityTest = lazy(() => import('./components/PersonalityTest.jsx'));
const PersonalityResult = lazy(() => import('./components/PersonalityResult.jsx'));
const SettingsModal = lazy(() => import('./components/SettingsModal.jsx'));
const ResumeModal = lazy(() => import('./components/ResumeModal.jsx'));

// Import utilities
import { canAccessCareer, isPremiumUser, togglePremium } from './utils/premiumAccess.js';
import { saveCareerResult, savePersonalityResult } from './utils/dataManager.js';

// Import contexts
import { ThemeProvider } from './contexts/ThemeContext.jsx';

// Import components that are always needed
import NavBar from './components/NavBar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Game States
const GAME_STATES = {
    HOME: 'HOME',
    SELECT_GROUP: 'SELECT_GROUP',
    SELECT_JOB: 'SELECT_JOB',
    PLAYING: 'PLAYING',
    RESULT: 'RESULT',
    PERSONALITY_TEST: 'PERSONALITY_TEST',
    PT_RESULT: 'PT_RESULT'
};

// Default stats
const DEFAULT_STATS = {
    competence: 50,
    ethics: 50,
    leadership: 50,
    innovation: 50
};

// Fisher-Yates shuffle
const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

function App() {
    // Lazy loaded modules state
    const [gameContent, setGameContent] = useState(null);
    const [loadCareerQuestions, setLoadCareerQuestions] = useState(null);
    const [getShuffledQuestions, setGetShuffledQuestions] = useState(null);
    const [calculateMBTIType, setCalculateMBTIType] = useState(null);

    // Load modules on mount
    useEffect(() => {
        Promise.all([gameContentPromise, mbtiQuestionsPromise, mbtiScoringPromise]).then(
            ([gameModule, mbtiModule, scoringModule]) => {
                setGameContent(gameModule.gameContent);
                setLoadCareerQuestions(() => gameModule.loadCareerQuestions);
                setGetShuffledQuestions(() => mbtiModule.getShuffledQuestions);
                setCalculateMBTIType(() => scoringModule.calculateMBTIType);
            }
        );
    }, []);

    // Audio state
    const [musicEnabled, setMusicEnabled] = useState(() => {
        const saved = localStorage.getItem('careerquest_music');
        return saved !== 'false';
    });
    const [musicVolume, setMusicVolume] = useState(() => {
        const saved = localStorage.getItem('careerquest_volume');
        return saved ? parseFloat(saved) : 0.5;
    });
    const audioRef = useRef(null);

    // Audio control effect
    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.volume = musicVolume;

        if (musicEnabled) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Auto-play was prevented or file not found
                    console.log("Audio play failed/prevented:", error);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }, [musicEnabled, musicVolume]);

    // Language state
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('careerquest_language');
        return saved || 'en';
    });

    // Game state
    const [gameState, setGameState] = useState(GAME_STATES.HOME);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [currentCareer, setCurrentCareer] = useState(null);
    const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
    const [stats, setStats] = useState(DEFAULT_STATS);
    const [feedback, setFeedback] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    // Personality test state
    const [ptIndex, setPtIndex] = useState(0);
    const [ptAnswers, setPtAnswers] = useState({});
    const [ptQuestions, setPtQuestions] = useState([]);
    const [mbtiResult, setMbtiResult] = useState(null);

    // UI state
    const [showSettings, setShowSettings] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showResumeModal, setShowResumeModal] = useState(false);
    const [pendingSavedState, setPendingSavedState] = useState(null);
    const [premiumActive, setPremiumActive] = useState(() => isPremiumUser());

    // Refs
    const lastActionTimeRef = useRef(0);
    const transitionTimerRef = useRef(null);
    const DEBOUNCE_MS = 300;

    // Check for saved session on load and when returning to home
    useEffect(() => {
        if (gameState === GAME_STATES.HOME) {
            try {
                const savedState = localStorage.getItem('careerQuestState');
                if (savedState) {
                    const parsed = JSON.parse(savedState);
                    // Valid saved state must be PLAYING or PERSONALITY_TEST
                    if (parsed && (parsed.gameState === 'PLAYING' || parsed.gameState === 'PERSONALITY_TEST')) {
                        // Only show resume if there is actual progress
                        const hasProgress = (parsed.gameState === 'PLAYING' && parsed.currentScenarioIndex > 0) ||
                            (parsed.gameState === 'PERSONALITY_TEST' && parsed.ptIndex > 0);

                        if (hasProgress) {
                            setPendingSavedState(parsed);
                        } else {
                            setPendingSavedState(null);
                        }
                    } else {
                        setPendingSavedState(null);
                    }
                } else {
                    setPendingSavedState(null);
                }
            } catch (e) {
                console.error('Failed to load saved state:', e);
                localStorage.removeItem('careerQuestState');
                setPendingSavedState(null);
            }
        }
    }, [gameState]);

    // Auto-save game state
    useEffect(() => {
        if (gameState === 'PLAYING' && currentCareer) {
            const saveData = {
                gameState,
                currentCareer,
                currentScenarioIndex,
                stats,
                feedback,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem('careerQuestState', JSON.stringify(saveData));
        } else if (gameState === 'PERSONALITY_TEST') {
            const saveData = {
                gameState,
                ptIndex,
                ptAnswers,
                ptQuestions,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem('careerQuestState', JSON.stringify(saveData));
        }
    }, [gameState, currentCareer, currentScenarioIndex, stats, feedback, ptIndex, ptAnswers, ptQuestions]);

    // Save on visibility change
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                // Force save
                if (gameState === 'PLAYING' || gameState === 'PERSONALITY_TEST') {
                    // State is already auto-saved via useEffect
                }
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [gameState]);

    // Music toggle
    const toggleMusic = useCallback(() => {
        setMusicEnabled(prev => {
            const newValue = !prev;
            localStorage.setItem('careerquest_music', newValue);
            return newValue;
        });
    }, []);

    // Premium toggle
    const handleTogglePremium = useCallback(() => {
        const newState = togglePremium();
        setPremiumActive(newState);
    }, []);

    // Navigation handlers
    const goHome = useCallback(() => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        lastActionTimeRef.current = now;

        setGameState(GAME_STATES.HOME);
        setSelectedGroup(null);
        setCurrentCareer(null);
        setShowMenu(false);
    }, []);

    const goBack = useCallback(() => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        lastActionTimeRef.current = now;

        switch (gameState) {
            case GAME_STATES.SELECT_GROUP:
                setGameState(GAME_STATES.HOME);
                break;
            case GAME_STATES.SELECT_JOB:
                setGameState(GAME_STATES.SELECT_GROUP);
                break;
            case GAME_STATES.PLAYING:
                // Confirm before leaving game
                if (window.confirm('Are you sure you want to leave? Your progress will be saved.')) {
                    setGameState(GAME_STATES.HOME);
                }
                break;
            default:
                setGameState(GAME_STATES.HOME);
        }
        setShowMenu(false);
    }, [gameState]);

    // Start career simulation
    const startCareerGame = useCallback(async (career) => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        lastActionTimeRef.current = now;

        if (!loadCareerQuestions) return;

        try {
            // Premium access check (secondary defense)
            if (career.isPremium && !canAccessCareer(career)) {
                alert("🔒 Premium Content\n\nThis career requires Premium access.");
                return;
            }

            // Load questions dynamically based on the career file key
            const questions = await loadCareerQuestions(career.questionsFile);

            if (!questions || questions.length === 0) {
                console.error("No questions found for career:", career.id);
                alert("Sorry, this career simulation is not ready yet.");
                return;
            }

            // Shuffle and select 40 questions
            // Use the loaded questions, NOT career.scenarios which is undefined
            const shuffledScenarios = shuffleArray(questions).slice(0, 40);

            setCurrentCareer({
                ...career,
                activeScenarios: shuffledScenarios
            });
            setCurrentScenarioIndex(0);
            setStats(DEFAULT_STATS);
            setFeedback(null);
            setGameState(GAME_STATES.PLAYING);
        } catch (error) {
            console.error("Failed to start career:", error);
            alert("Error starting career simulation. Please try again.");
        }
    }, [loadCareerQuestions]);

    // Start personality test
    const startPersonalityTest = useCallback(() => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        lastActionTimeRef.current = now;

        if (!getShuffledQuestions) return;

        const shuffled = getShuffledQuestions();
        setPtQuestions(shuffled);
        setPtIndex(0);
        setPtAnswers({});
        setMbtiResult(null);
        setGameState(GAME_STATES.PERSONALITY_TEST);
    }, [getShuffledQuestions]);

    // Handle answer selection
    const handleAnswer = useCallback((option) => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        if (feedback) return; // Prevent multiple clicks during feedback
        lastActionTimeRef.current = now;

        // Apply stat changes
        const newStats = { ...stats };
        if (option.stats) {
            Object.keys(option.stats).forEach(key => {
                newStats[key] = Math.max(0, Math.min(100, (newStats[key] || 50) + (option.stats[key] || 0)));
            });
        }
        setStats(newStats);
        setFeedback(option.consequence);

        // Clear any existing timer
        if (transitionTimerRef.current) {
            clearTimeout(transitionTimerRef.current);
        }

        // Check if game is complete
        if (currentScenarioIndex >= currentCareer.activeScenarios.length - 1) {
            transitionTimerRef.current = setTimeout(() => {
                setShowConfetti(true);
                setGameState(GAME_STATES.RESULT);
                // Save result to data manager
                try {
                    saveCareerResult({
                        careerId: currentCareer.id,
                        careerName: currentCareer.name,
                        careerEmoji: currentCareer.emoji,
                        category: currentCareer.group || 'unknown',
                        scores: { ...newStats },
                        questionsAnswered: currentScenarioIndex + 1,
                        totalQuestions: currentCareer.activeScenarios.length,
                        completed: true,
                    });
                } catch (e) { /* silently fail */ }
                localStorage.removeItem('careerQuestState');
                setTimeout(() => setShowConfetti(false), 5000);
                transitionTimerRef.current = null;
            }, 2000);
        } else {
            transitionTimerRef.current = setTimeout(() => {
                setCurrentScenarioIndex(prev => prev + 1);
                setFeedback(null);
                transitionTimerRef.current = null;
            }, 3000); // Increased to 3s for better reading time
        }
    }, [stats, currentScenarioIndex, currentCareer, feedback]);

    const handleContinue = useCallback(() => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        lastActionTimeRef.current = now;

        // Clear automatic transition timer
        if (transitionTimerRef.current) {
            clearTimeout(transitionTimerRef.current);
            transitionTimerRef.current = null;
        }

        if (currentScenarioIndex >= currentCareer.activeScenarios.length - 1) {
            setShowConfetti(true);
            setGameState(GAME_STATES.RESULT);
            // Save result to data manager
            try {
                saveCareerResult({
                    careerId: currentCareer.id,
                    careerName: currentCareer.name,
                    careerEmoji: currentCareer.emoji,
                    category: currentCareer.group || 'unknown',
                    scores: { ...stats },
                    questionsAnswered: currentScenarioIndex + 1,
                    totalQuestions: currentCareer.activeScenarios.length,
                    completed: true,
                });
            } catch (e) { /* silently fail */ }
            localStorage.removeItem('careerQuestState');
            setTimeout(() => setShowConfetti(false), 5000);
        } else {
            setCurrentScenarioIndex(prev => prev + 1);
            setFeedback(null);
        }
    }, [currentScenarioIndex, currentCareer, stats]);

    // Handle personality test answer
    const handlePTAnswer = useCallback((rating) => {
        const now = Date.now();
        if (now - lastActionTimeRef.current < DEBOUNCE_MS) return;
        lastActionTimeRef.current = now;

        if (!calculateMBTIType) return;

        // Save answer
        setPtAnswers(prev => ({ ...prev, [`q${ptIndex}`]: rating }));

        // Next question or finish
        if (ptIndex >= ptQuestions.length - 1) {
            // Calculate MBTI type
            const finalAnswers = { ...ptAnswers, [`q${ptIndex}`]: rating };
            const result = calculateMBTIType(finalAnswers, ptQuestions);
            setMbtiResult(result);

            setTimeout(() => {
                setShowConfetti(true);
                setGameState(GAME_STATES.PT_RESULT);
                // Save personality result to data manager
                try {
                    savePersonalityResult({
                        mbtiType: result.type,
                        dimensions: result.dimensions,
                        percentages: result.percentages,
                    });
                } catch (e) { /* silently fail */ }
                localStorage.removeItem('careerQuestState');
                setTimeout(() => setShowConfetti(false), 5000);
            }, 500);
        } else {
            setPtIndex(prev => prev + 1);
        }
    }, [ptIndex, ptQuestions, ptAnswers, calculateMBTIType]);

    // Handle personality test back
    const handlePTBack = useCallback(() => {
        if (ptIndex > 0) {
            setPtIndex(prev => prev - 1);
        }
    }, [ptIndex]);

    // Resume session
    const handleResume = useCallback(() => {
        if (!pendingSavedState) return;

        try {
            if (pendingSavedState.gameState === 'PLAYING') {
                setCurrentCareer(pendingSavedState.currentCareer);
                setCurrentScenarioIndex(pendingSavedState.currentScenarioIndex || 0);
                setStats(pendingSavedState.stats || DEFAULT_STATS);
                setFeedback(pendingSavedState.feedback || null);
            } else if (pendingSavedState.gameState === 'PERSONALITY_TEST') {
                setPtIndex(pendingSavedState.ptIndex || 0);
                setPtAnswers(pendingSavedState.ptAnswers || {});
                setPtQuestions(pendingSavedState.ptQuestions || []);
            }
            setGameState(pendingSavedState.gameState);
            setShowResumeModal(false);
            setPendingSavedState(null);
        } catch (e) {
            console.error('Failed to resume:', e);
            localStorage.removeItem('careerQuestState');
            setShowResumeModal(false);
        }
    }, [pendingSavedState]);

    // Discard saved state
    const handleDiscard = useCallback(() => {
        localStorage.removeItem('careerQuestState');
        setShowResumeModal(false);
        setPendingSavedState(null);
    }, []);

    // Calculate MBTI Type
    const mbtiType = useMemo(() => {
        if (mbtiResult) {
            return mbtiResult.type;
        }
        return 'INTJ'; // Default fallback
    }, [mbtiResult]);

    // Current screen title
    const screenTitle = useMemo(() => {
        switch (gameState) {
            case GAME_STATES.SELECT_GROUP: return 'Select Category';
            case GAME_STATES.SELECT_JOB: return selectedGroup?.title?.[language] || 'Select Career';
            case GAME_STATES.PLAYING: return currentCareer?.title?.[language] || 'Career Quest';
            case GAME_STATES.RESULT: return 'Results';
            case GAME_STATES.PERSONALITY_TEST: return 'Personality Test';
            case GAME_STATES.PT_RESULT: return 'Your Personality';
            default: return 'Career Quest';
        }
    }, [gameState, selectedGroup, currentCareer, language]);

    // Show back button
    const showBackButton = gameState !== GAME_STATES.HOME && gameState !== GAME_STATES.RESULT && gameState !== GAME_STATES.PT_RESULT;

    // Loading fallback component
    const LoadingFallback = () => (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            color: 'var(--primary-cyan)'
        }}>
            <div>Loading...</div>
        </div>
    );

    // Don't render until modules are loaded
    if (!gameContent || !loadCareerQuestions || !getShuffledQuestions || !calculateMBTIType) {
        return <LoadingFallback />;
    }

    return (
        <ThemeProvider>
            <ErrorBoundary name="App" fallbackMessage="The application encountered an error. Please refresh the page.">
                {/* Grid Background */}
                <div className="grid-bg" />

                {/* Background Music */}
                <audio ref={audioRef} loop>
                    <source src="/bgm.mp3" type="audio/mp3" />
                </audio>

                {/* Confetti */}
                {showConfetti && (
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        recycle={false}
                        numberOfPieces={500}
                        colors={['#00f5ff', '#ff00ff', '#8b5cf6', '#00ff88', '#ff6b35']}
                    />
                )}

                {/* Navigation Bar */}
                <NavBar
                    title={screenTitle}
                    showBack={showBackButton}
                    onBack={goBack}
                    onHome={goHome}
                    onSettings={() => setShowSettings(true)}
                    onMenu={() => setShowMenu(true)}
                    musicEnabled={musicEnabled}
                    onToggleMusic={toggleMusic}
                />

                {/* Main Content */}
                <main className="content-area">
                    <AnimatePresence mode="wait">
                        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--primary-cyan)' }}>Loading...</div>}>
                            <ErrorBoundary name="MainContent">
                                {gameState === GAME_STATES.HOME && (
                                    <HomeScreen
                                        key="home"
                                        onStartCareer={() => setGameState(GAME_STATES.SELECT_GROUP)}
                                        onStartPersonality={startPersonalityTest}
                                        language={language}
                                        savedState={pendingSavedState}
                                        onResume={handleResume}
                                    />
                                )}

                                {gameState === GAME_STATES.SELECT_GROUP && (
                                    <CareerSelection
                                        key="select-group"
                                        mode="group"
                                        groups={gameContent.groups}
                                        onSelect={(group) => {
                                            setSelectedGroup(group);
                                            setGameState(GAME_STATES.SELECT_JOB);
                                        }}
                                        language={language}
                                    />
                                )}

                                {gameState === GAME_STATES.SELECT_JOB && selectedGroup && (
                                    <CareerSelection
                                        key="select-job"
                                        mode="career"
                                        careers={selectedGroup.careers}
                                        onSelect={startCareerGame}
                                        language={language}
                                    />
                                )}

                                {gameState === GAME_STATES.PLAYING && currentCareer && (
                                    <GameScreen
                                        key="playing"
                                        career={currentCareer}
                                        scenarioIndex={currentScenarioIndex}
                                        stats={stats}
                                        feedback={feedback}
                                        onAnswer={handleAnswer}
                                        onContinue={handleContinue}
                                        onHome={goHome}
                                        language={language}
                                    />
                                )}

                                {gameState === GAME_STATES.RESULT && (
                                    <ResultScreen
                                        key="result"
                                        career={currentCareer}
                                        stats={stats}
                                        onHome={goHome}
                                        onRetry={() => startCareerGame(currentCareer)}
                                        language={language}
                                    />
                                )}

                                {gameState === GAME_STATES.PERSONALITY_TEST && ptQuestions.length > 0 && (
                                    <PersonalityTest
                                        key="pt"
                                        questionIndex={ptIndex}
                                        totalQuestions={ptQuestions.length}
                                        question={ptQuestions[ptIndex]}
                                        onAnswer={handlePTAnswer}
                                        onBack={handlePTBack}
                                        language={language}
                                    />
                                )}

                                {gameState === GAME_STATES.PT_RESULT && mbtiResult && (
                                    <PersonalityResult
                                        key="pt-result"
                                        mbtiType={mbtiResult.type}
                                        dimensions={mbtiResult.dimensions}
                                        percentages={mbtiResult.percentages}
                                        onHome={goHome}
                                        language={language}
                                    />
                                )}
                            </ErrorBoundary>
                        </Suspense>
                    </AnimatePresence>
                </main>

                {/* Settings Modal */}
                <AnimatePresence>
                    {showSettings && (
                        <Suspense fallback={null}>
                            <ErrorBoundary name="SettingsModal">
                                <SettingsModal
                                    onClose={() => setShowSettings(false)}
                                    musicEnabled={musicEnabled}
                                    onMusicToggle={toggleMusic}
                                    volume={musicVolume}
                                    onVolumeChange={(v) => {
                                        setMusicVolume(v);
                                        localStorage.setItem('careerquest_volume', v);
                                    }}
                                    language={language}
                                    onLanguageChange={(l) => {
                                        setLanguage(l);
                                        localStorage.setItem('careerquest_language', l);
                                    }}
                                    isPremium={premiumActive}
                                    onTogglePremium={handleTogglePremium}
                                />
                            </ErrorBoundary>
                        </Suspense>
                    )}
                </AnimatePresence>

                {/* Resume Modal */}
                <AnimatePresence>
                    {showResumeModal && pendingSavedState && (
                        <Suspense fallback={null}>
                            <ErrorBoundary name="ResumeModal">
                                <ResumeModal
                                    savedState={pendingSavedState}
                                    onResume={handleResume}
                                    onDiscard={handleDiscard}
                                    onHome={() => {
                                        setShowResumeModal(false);
                                    }}
                                    language={language}
                                />
                            </ErrorBoundary>
                        </Suspense>
                    )}
                </AnimatePresence>
            </ErrorBoundary>
        </ThemeProvider>
    );
}

export default App;
