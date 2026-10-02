import React, { useState, useEffect, useRef } from 'react';
import { getRandomWord, type Difficulty, type WordEntry } from './words';
import { SettingsPanel } from './components/SettingsPanel.js';
import { FRESH_START_MESSAGE } from './utils/clearLocalData.js';

type GameScreen = 'start' | 'game' | 'gameover';
type Theme = 'light' | 'dark';
type FeedbackState = 'correct' | 'wrong' | 'timeout' | null;
type GameOverReason = 'time' | 'misses' | 'exit' | null;

const WORD_TIME_LIMIT = 15;
const ROUND_TIME_LIMIT = 10 * 60;
const MAX_MISSES_IN_ROW = 5;
const ANSWER_REVEAL_MS = 3000;
const CORRECT_FEEDBACK_MS = 1500;
const STORE_SCREENSHOT_QUERY = 'storeScreenshot';

const DIFFICULTY_OPTIONS: Array<{ value: Difficulty; label: string; icon: string; helper: string }> = [
  { value: 'easy', label: 'Easy', icon: 'ABC', helper: 'More letters shown' },
  { value: 'medium', label: 'Medium', icon: 'A?C', helper: 'Some letters shown' },
  { value: 'hard', label: 'Hard', icon: '???', helper: 'No letters shown' }
];

const getInitialTheme = (): Theme => {
  const savedTheme = globalThis.localStorage.getItem('wordsprint-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getDifficultyMeta = (difficulty: Difficulty) => {
  return DIFFICULTY_OPTIONS.find(option => option.value === difficulty) ?? DIFFICULTY_OPTIONS[0];
};

const getRevealIndexes = (word: string, difficulty: Difficulty) => {
  const indexes = new Set<number>();

  if (difficulty === 'hard' || word.length === 0) {
    return indexes;
  }

  indexes.add(0);

  if (difficulty === 'easy') {
    indexes.add(word.length - 1);

    for (let index = 2; index < word.length - 1; index += 3) {
      indexes.add(index);
    }
  }

  if (difficulty === 'medium' && word.length > 5) {
    indexes.add(Math.floor(word.length / 2));
  }

  return indexes;
};

const getRevealNote = (difficulty: Difficulty) => {
  if (difficulty === 'easy') return 'Easy help: first, last, and bonus letters are showing.';
  if (difficulty === 'medium') return 'Medium help: a few letters are showing.';
  return 'Hard mode: use the clue and letter count.';
};

const getInputFeedbackClass = (feedback: FeedbackState) => {
  if (feedback === 'correct') return 'correct';
  if (feedback === 'wrong' || feedback === 'timeout') return 'wrong';
  return '';
};

const getFeedbackLabel = (feedback: Exclude<FeedbackState, null>) => {
  if (feedback === 'correct') return 'CORRECT!';
  if (feedback === 'wrong') return 'INCORRECT';
  return 'TIME IS UP!';
};

const formatClock = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
};

const getGameOverMessage = (reason: GameOverReason) => {
  if (reason === 'time') return '10 minute round complete';
  if (reason === 'misses') return '5 misses in a row';
  if (reason === 'exit') return 'Exited game';
  return 'Round complete';
};

const renderLetterTiles = (word: string, difficulty: Difficulty) => {
  const revealIndexes = getRevealIndexes(word, difficulty);

  return word.split('').map((letter, index) => {
    const isLetter = /[a-z]/i.test(letter);
    const isVisible = !isLetter || revealIndexes.has(index);

    return (
      <span className={`letter-tile ${isVisible ? 'revealed' : 'hidden'}`} key={`${letter}-${index}`}>
        {isVisible ? letter.toUpperCase() : ''}
      </span>
    );
  });
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<GameScreen>('start');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  
  // Game State
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [wordsSpelled, setWordsSpelled] = useState(0);
  const [missesInRow, setMissesInRow] = useState(0);
  const [gameOverReason, setGameOverReason] = useState<GameOverReason>(null);
  const [currentWord, setCurrentWord] = useState<WordEntry | null>(null);
  
  // Word State
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(WORD_TIME_LIMIT);
  const [roundTimeLeft, setRoundTimeLeft] = useState(ROUND_TIME_LIMIT);
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [pointsGained, setPointsGained] = useState(0);
  const [freshNotice, setFreshNotice] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const difficultyMeta = getDifficultyMeta(difficulty);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    globalThis.localStorage.setItem('wordsprint-theme', theme);
  }, [theme]);

  // Timer Effect
  useEffect(() => {
    if (screen !== 'game' || feedback !== null) return;
    
    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, screen, feedback]);

  useEffect(() => {
    if (screen !== 'game' || feedback !== null) return;

    if (roundTimeLeft <= 0) {
      endGame('time');
      return;
    }

    const timer = setInterval(() => {
      setRoundTimeLeft(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [roundTimeLeft, screen, feedback]);

  // Focus input when game starts or word changes
  useEffect(() => {
    const isStoreScreenshot = new URLSearchParams(globalThis.location.search).has(STORE_SCREENSHOT_QUERY);
    if (isStoreScreenshot) return;

    if (screen === 'game' && feedback === null) {
      inputRef.current?.focus();
    }
  }, [screen, currentWord, feedback]);

  const handleFreshStart = () => {
    setTheme(getInitialTheme());
    setDifficulty('easy');
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setWordsSpelled(0);
    setMissesInRow(0);
    setGameOverReason(null);
    setCurrentWord(null);
    setInput('');
    setTimeLeft(WORD_TIME_LIMIT);
    setRoundTimeLeft(ROUND_TIME_LIMIT);
    setFeedback(null);
    setPointsGained(0);
    setScreen('start');
    setFreshNotice(FRESH_START_MESSAGE);
  };

  const startGame = () => {
    setFreshNotice('');
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setWordsSpelled(0);
    setMissesInRow(0);
    setRoundTimeLeft(ROUND_TIME_LIMIT);
    setGameOverReason(null);
    nextWord();
    setScreen('game');
  };

  const nextWord = () => {
    setCurrentWord(getRandomWord(difficulty));
    setInput('');
    setTimeLeft(WORD_TIME_LIMIT);
    setFeedback(null);
  };

  const handleTimeout = () => {
    handleMiss('timeout');
  };

  const handleMiss = (result: 'wrong' | 'timeout') => {
    const nextMissesInRow = missesInRow + 1;

    setStreak(0);
    setMissesInRow(nextMissesInRow);
    setFeedback(result);

    setTimeout(() => {
      if (nextMissesInRow >= MAX_MISSES_IN_ROW) {
        endGame('misses');
        return;
      }

      nextWord();
    }, ANSWER_REVEAL_MS);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!currentWord || feedback !== null || input.trim() === '') return;

    const isCorrect = input.toLowerCase().trim() === currentWord.english.toLowerCase();

    if (isCorrect) {
      const charCount = currentWord.english.length;
      const streakMultiplier = Math.min(1 + streak * 0.1, 2.5); // Max 2.5x
      const points = Math.round(charCount * 10 * streakMultiplier);
      
      setScore(prev => prev + points);
      setPointsGained(points);
      
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setMissesInRow(0);
      
      setWordsSpelled(prev => prev + 1);
      setFeedback('correct');

      setTimeout(() => {
        nextWord();
      }, CORRECT_FEEDBACK_MS);
    } else {
      handleMiss('wrong');
    }
  };

  const endGame = (reason: GameOverReason = 'exit') => {
    setGameOverReason(reason);
    setFeedback(null);
    setScreen('gameover');
  };

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      {screen === 'start' && (
        <div className="start-screen card">
          <div className="start-toolbar">
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>

          <div className="bee-logo">🐝</div>
          <h1>SpellingBee Dictionary</h1>
          <p className="tagline">English Spelling Practice Game</p>

          <div className="section-label">Choose Level</div>
          <div className="difficulty-select" aria-label="Choose difficulty level">
            {DIFFICULTY_OPTIONS.map(option => (
              <button
                className={`difficulty-btn ${difficulty === option.value ? 'selected' : ''}`}
                key={option.value}
                type="button"
                onClick={() => setDifficulty(option.value)}
                aria-pressed={difficulty === option.value}
              >
                <span className="difficulty-icon">{option.icon}</span>
                <span className="difficulty-label">{option.label}</span>
                <span className="difficulty-helper">{option.helper}</span>
              </button>
            ))}
          </div>

          <div className="rules-grid">
            <div className="rule-item">
              <span className="rule-icon">⏱️</span>
              <span>15 seconds per word</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">🕒</span>
              <span>10 minutes active play</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">💡</span>
              <span>Hints always stay open</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">🛑</span>
              <span>5 misses in a row ends game</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">✅</span>
              <span>Answers show for 3 seconds</span>
            </div>
            <div className="rule-item">
              <span className="rule-icon">🔤</span>
              <span>Levels change letter help</span>
            </div>
          </div>

          <button className="btn btn-primary" onClick={startGame} style={{ width: '100%', fontSize: '1.3rem' }}>
            START SPELLING
          </button>

          <SettingsPanel notice={freshNotice} onFreshStart={handleFreshStart} />
        </div>
      )}

      {screen === 'game' && currentWord && (
        <div className="game-screen">
          <div className="game-header">
            <div className="score-display">
              <span className="score-label">Score</span>
              <span className="score-value">{score}</span>
            </div>

            <div className="level-display">
              <span className="score-label">Level</span>
              <span className="level-value">{difficultyMeta.label}</span>
            </div>

            <div className="level-display round-display">
              <span className="score-label">Round</span>
              <span className="level-value">{formatClock(roundTimeLeft)}</span>
            </div>
            
            <div className="round-timer-bar">
              <span className="round-timer-label">Time Left: {timeLeft}s</span>
              <div className="round-bar-track">
                <div 
                  className="round-bar-fill" 
                  style={{ 
                    width: `${(timeLeft / WORD_TIME_LIMIT) * 100}%`,
                    backgroundColor: timeLeft <= 5 ? 'var(--color-danger)' : 'var(--color-accent2)'
                  }} 
                />
              </div>
            </div>

            <div className="game-actions">
              <button className="theme-toggle compact" type="button" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
                {theme === 'light' ? 'Dark' : 'Light'}
              </button>
              <button className="btn btn-ghost btn-small" onClick={() => endGame('exit')}>
                EXIT GAME
              </button>
            </div>
          </div>

          <div className="streak-row">
            {streak > 2 && (
              <div className="streak-badge fire">
                🔥 {streak} Streak
              </div>
            )}
            {streak > 0 && (
              <div className="streak-badge multi">
                ✨ {Math.min(1 + streak * 0.1, 2.5).toFixed(1)}x Multiplier
              </div>
            )}
            <div className={`streak-badge miss ${missesInRow >= 3 ? 'warning' : ''}`}>
              Misses {missesInRow}/{MAX_MISSES_IN_ROW}
            </div>
          </div>

          <div className="word-card">
            <div className="word-language-badge">
              Spell the Word
            </div>
            
            <div className="letter-reveal word-english-display" aria-label={`${difficultyMeta.label} letter help`}>
              {renderLetterTiles(currentWord.english, difficulty)}
            </div>
            
            {currentWord.pos ? <div className="word-pos">{currentWord.pos}</div> : null}
            
            <div className="word-char-count">
              {currentWord.english.length} letters · {difficultyMeta.label}
            </div>

            <div className="hint-panel">
              <strong>Hint:</strong> {currentWord.hint}
              <small>{getRevealNote(difficulty)}</small>
            </div>

            <form className="input-area" onSubmit={handleSubmit}>
              <input 
                ref={inputRef}
                type="text" 
                className={`spell-input ${getInputFeedbackClass(feedback)}`}
                placeholder="Type here..." 
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={feedback !== null}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
              <button type="submit" className="submit-btn" disabled={feedback !== null || !input.trim()}>
                SUBMIT
              </button>
            </form>

            {feedback && (
              <div className="feedback-overlay">
                <div className={`feedback-badge ${feedback}`}>
                  {getFeedbackLabel(feedback)}
                </div>
                {feedback === 'correct' && (
                  <div className="feedback-points">+{pointsGained} pts</div>
                )}
                {(feedback === 'wrong' || feedback === 'timeout') && (
                  <div className="answer-reveal-panel">
                    Correct answer: <strong>{currentWord.english}</strong>
                    <span>Next in 3 seconds</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="word-counter">
            Words spelled: {wordsSpelled} · {difficultyMeta.label} level
          </div>
        </div>
      )}

      {screen === 'gameover' && (
        <div className="gameover-screen card">
          <div className="start-toolbar">
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>

          <div className="gameover-title">Game Over</div>
          <div className="gameover-score">{score}</div>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 20 }}>{getGameOverMessage(gameOverReason)}</p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-icon">📝</span>
              <span className="stat-value">{wordsSpelled}</span>
              <span className="stat-label">Words</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔥</span>
              <span className="stat-value">{maxStreak}</span>
              <span className="stat-label">Best Streak</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">⭐</span>
              <span className="stat-value">{wordsSpelled > 0 ? Math.round(score / wordsSpelled) : 0}</span>
              <span className="stat-label">Avg Points</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🔤</span>
              <span className="stat-value text-stat">{difficultyMeta.label}</span>
              <span className="stat-label">Level</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🛑</span>
              <span className="stat-value">{missesInRow}</span>
              <span className="stat-label">Miss Row</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon">🕒</span>
              <span className="stat-value text-stat">{formatClock(ROUND_TIME_LIMIT - roundTimeLeft)}</span>
              <span className="stat-label">Active Time</span>
            </div>
          </div>

          <div className="gameover-actions">
            <button className="btn btn-primary" onClick={startGame}>
              PLAY AGAIN
            </button>
            <button className="btn btn-ghost" onClick={() => setScreen('start')}>
              MENU
            </button>
          </div>

          <SettingsPanel notice={freshNotice} onFreshStart={handleFreshStart} />
        </div>
      )}
    </div>
  );
};

export default App;
