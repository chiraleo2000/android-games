/**
 * Data Manager
 * 
 * Centralized data persistence layer for tracking gameplay results,
 * personality test outcomes, and computing aggregate statistics.
 * 
 * Best Practices Applied:
 *   - UUID generation for unique result identification
 *   - Data integrity validation on read/write
 *   - Configurable storage limits to prevent localStorage overflow
 *   - Export/import for data portability
 *   - GDPR-compliant data deletion
 *   - Statistics computed lazily with caching
 */

// ──────────────────────────────────────────────
//  Constants
// ──────────────────────────────────────────────

const STORAGE_KEYS = {
    CAREER_RESULTS: 'careerquest_career_results',
    PERSONALITY_RESULTS: 'careerquest_personality_results',
    STATISTICS_CACHE: 'careerquest_statistics_cache',
};

// Maximum number of results to store (prevent localStorage overflow ~5MB)
const MAX_CAREER_RESULTS = 500;
const MAX_PERSONALITY_RESULTS = 50;

// ──────────────────────────────────────────────
//  UUID Generator (v4-like, no crypto dependency)
// ──────────────────────────────────────────────

const generateId = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    return `${s4()}${s4()}-${s4()}-4${s4().substring(1)}-${s4()}-${s4()}${s4()}${s4()}`;
};

// ──────────────────────────────────────────────
//  Storage Helpers
// ──────────────────────────────────────────────

const storage = {
    get(key) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch {
            console.warn(`[DataManager] Failed to read ${key}`);
            return null;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error(`[DataManager] Failed to write ${key}:`, e);
            return false;
        }
    },
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    },
};

// ──────────────────────────────────────────────
//  Career Results
// ──────────────────────────────────────────────

/**
 * Save a career simulation result
 * @param {Object} result
 * @param {string} result.careerId - Career identifier
 * @param {string} result.careerName - Career display name
 * @param {string} result.careerEmoji - Career emoji
 * @param {string} result.category - Career category group
 * @param {Object} result.scores - { competence, ethics, leadership, innovation }
 * @param {number} result.questionsAnswered - Number of questions answered
 * @param {number} result.totalQuestions - Total questions in session
 * @param {boolean} result.completed - Whether the session was completed
 * @param {number} [result.duration] - Session duration in milliseconds
 * @returns {Object} Saved result with generated ID
 */
export const saveCareerResult = (result) => {
    const results = getCareerResults();

    const averageScore = result.scores
        ? Math.round(
              (result.scores.competence +
                  result.scores.ethics +
                  result.scores.leadership +
                  result.scores.innovation) /
                  4
          )
        : 0;

    const rating = getRatingFromScore(averageScore);

    const entry = {
        id: generateId(),
        type: 'career',
        careerId: result.careerId,
        careerName: result.careerName,
        careerEmoji: result.careerEmoji || '💼',
        category: result.category || 'unknown',
        scores: { ...result.scores },
        averageScore,
        rating,
        questionsAnswered: result.questionsAnswered || 0,
        totalQuestions: result.totalQuestions || 40,
        completed: result.completed !== false,
        duration: result.duration || null,
        timestamp: new Date().toISOString(),
    };

    results.unshift(entry); // Most recent first

    // Enforce storage limit
    if (results.length > MAX_CAREER_RESULTS) {
        results.splice(MAX_CAREER_RESULTS);
    }

    storage.set(STORAGE_KEYS.CAREER_RESULTS, results);
    invalidateStatsCache();

    return entry;
};

/**
 * Get all career results
 * @returns {Array}
 */
export const getCareerResults = () => {
    return storage.get(STORAGE_KEYS.CAREER_RESULTS) || [];
};

/**
 * Get career results filtered by career ID
 * @param {string} careerId
 * @returns {Array}
 */
export const getCareerResultsById = (careerId) => {
    return getCareerResults().filter((r) => r.careerId === careerId);
};

/**
 * Get career results filtered by category
 * @param {string} category
 * @returns {Array}
 */
export const getCareerResultsByCategory = (category) => {
    return getCareerResults().filter((r) => r.category === category);
};

// ──────────────────────────────────────────────
//  Personality Results
// ──────────────────────────────────────────────

/**
 * Save a personality test result
 * @param {Object} result
 * @param {string} result.mbtiType - 4-letter MBTI type (e.g., "ENFP")
 * @param {Object} result.dimensions - { EI, NS, FT, PJ } raw scores
 * @param {Object} result.traits - Trait descriptions
 * @returns {Object} Saved result with generated ID
 */
export const savePersonalityResult = (result) => {
    const results = getPersonalityResults();

    const entry = {
        id: generateId(),
        type: 'personality',
        mbtiType: result.mbtiType,
        dimensions: { ...result.dimensions },
        dimensionPercentages: computeDimensionPercentages(result.dimensions),
        traits: result.traits || {},
        timestamp: new Date().toISOString(),
    };

    results.unshift(entry);

    if (results.length > MAX_PERSONALITY_RESULTS) {
        results.splice(MAX_PERSONALITY_RESULTS);
    }

    storage.set(STORAGE_KEYS.PERSONALITY_RESULTS, results);
    invalidateStatsCache();

    return entry;
};

/**
 * Get all personality test results
 * @returns {Array}
 */
export const getPersonalityResults = () => {
    return storage.get(STORAGE_KEYS.PERSONALITY_RESULTS) || [];
};

/**
 * Get the most recent personality result
 * @returns {Object|null}
 */
export const getLatestPersonalityResult = () => {
    const results = getPersonalityResults();
    return results.length > 0 ? results[0] : null;
};

// ──────────────────────────────────────────────
//  Statistics
// ──────────────────────────────────────────────

/**
 * Compute aggregate statistics from all results
 * Uses a cache to avoid recomputing on every call.
 * @returns {Object}
 */
export const getStatistics = () => {
    // Check cache first
    const cached = storage.get(STORAGE_KEYS.STATISTICS_CACHE);
    if (cached && cached._version === getDataVersion()) {
        return cached;
    }

    const careerResults = getCareerResults();
    const personalityResults = getPersonalityResults();
    const completedResults = careerResults.filter((r) => r.completed);

    // Basic counts
    const totalGamesPlayed = careerResults.length;
    const totalGamesCompleted = completedResults.length;
    const totalPersonalityTests = personalityResults.length;

    // Score statistics
    const scores = completedResults.map((r) => r.averageScore);
    const averageScore =
        scores.length > 0
            ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
            : 0;
    const bestScore = scores.length > 0 ? Math.max(...scores) : 0;
    const worstScore = scores.length > 0 ? Math.min(...scores) : 0;

    // Dimension averages
    const dimensionAverages = computeDimensionAverages(completedResults);

    // Career completion map
    const careersCompleted = [
        ...new Set(completedResults.map((r) => r.careerId)),
    ];
    const categoriesExplored = [
        ...new Set(completedResults.map((r) => r.category)),
    ];

    // Streaks
    const { currentStreak, bestStreak } = computeStreaks(completedResults);

    // Rating distribution
    const ratingDistribution = computeRatingDistribution(completedResults);

    // Favorite category
    const categoryFrequency = {};
    completedResults.forEach((r) => {
        categoryFrequency[r.category] = (categoryFrequency[r.category] || 0) + 1;
    });
    const favoriteCategory =
        Object.keys(categoryFrequency).sort(
            (a, b) => categoryFrequency[b] - categoryFrequency[a]
        )[0] || null;

    // Most played career
    const careerFrequency = {};
    careerResults.forEach((r) => {
        careerFrequency[r.careerId] = (careerFrequency[r.careerId] || 0) + 1;
    });
    const mostPlayedCareer =
        Object.keys(careerFrequency).sort(
            (a, b) => careerFrequency[b] - careerFrequency[a]
        )[0] || null;

    // Recent activity (last 7 days)
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const recentGames = careerResults.filter(
        (r) => new Date(r.timestamp) > weekAgo
    ).length;

    const stats = {
        totalGamesPlayed,
        totalGamesCompleted,
        totalPersonalityTests,
        completionRate:
            totalGamesPlayed > 0
                ? Math.round((totalGamesCompleted / totalGamesPlayed) * 100)
                : 0,
        averageScore,
        bestScore,
        worstScore,
        dimensionAverages,
        careersCompleted,
        careersCompletedCount: careersCompleted.length,
        categoriesExplored,
        categoriesExploredCount: categoriesExplored.length,
        currentStreak,
        bestStreak,
        ratingDistribution,
        favoriteCategory,
        mostPlayedCareer,
        recentGames,
        lastPlayedAt:
            careerResults.length > 0 ? careerResults[0].timestamp : null,
        _version: getDataVersion(),
    };

    // Cache the computed statistics
    storage.set(STORAGE_KEYS.STATISTICS_CACHE, stats);

    return stats;
};

// ──────────────────────────────────────────────
//  Data Export / Import
// ──────────────────────────────────────────────

/**
 * Export all data as a JSON string
 * @returns {string} JSON string of all data
 */
export const exportData = () => {
    const exportObj = {
        version: '1.0.0',
        exportedAt: new Date().toISOString(),
        app: 'Career Quest',
        careerResults: getCareerResults(),
        personalityResults: getPersonalityResults(),
        statistics: getStatistics(),
    };

    return JSON.stringify(exportObj, null, 2);
};

/**
 * Export data as a downloadable JSON file
 */
export const downloadDataExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `career-quest-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

/**
 * Import data from a JSON string
 * @param {string} jsonString - Previously exported JSON data
 * @returns {Object} Import result { success, imported, errors }
 */
export const importData = (jsonString) => {
    try {
        const data = JSON.parse(jsonString);
        const errors = [];
        let imported = 0;

        if (data.careerResults && Array.isArray(data.careerResults)) {
            const existing = getCareerResults();
            const existingIds = new Set(existing.map((r) => r.id));
            const newResults = data.careerResults.filter(
                (r) => !existingIds.has(r.id)
            );
            const merged = [...newResults, ...existing].slice(
                0,
                MAX_CAREER_RESULTS
            );
            storage.set(STORAGE_KEYS.CAREER_RESULTS, merged);
            imported += newResults.length;
        }

        if (data.personalityResults && Array.isArray(data.personalityResults)) {
            const existing = getPersonalityResults();
            const existingIds = new Set(existing.map((r) => r.id));
            const newResults = data.personalityResults.filter(
                (r) => !existingIds.has(r.id)
            );
            const merged = [...newResults, ...existing].slice(
                0,
                MAX_PERSONALITY_RESULTS
            );
            storage.set(STORAGE_KEYS.PERSONALITY_RESULTS, merged);
            imported += newResults.length;
        }

        invalidateStatsCache();

        return { success: true, imported, errors };
    } catch (e) {
        return {
            success: false,
            imported: 0,
            errors: [`Failed to parse import data: ${e.message}`],
        };
    }
};

// ──────────────────────────────────────────────
//  Data Deletion (GDPR Compliant)
// ──────────────────────────────────────────────

/**
 * Clear all stored data
 * @returns {boolean}
 */
export const clearAllData = () => {
    Object.values(STORAGE_KEYS).forEach((key) => storage.remove(key));
    return true;
};

/**
 * Delete a specific career result by ID
 * @param {string} resultId
 * @returns {boolean}
 */
export const deleteCareerResult = (resultId) => {
    const results = getCareerResults().filter((r) => r.id !== resultId);
    storage.set(STORAGE_KEYS.CAREER_RESULTS, results);
    invalidateStatsCache();
    return true;
};

/**
 * Delete a specific personality result by ID
 * @param {string} resultId
 * @returns {boolean}
 */
export const deletePersonalityResult = (resultId) => {
    const results = getPersonalityResults().filter((r) => r.id !== resultId);
    storage.set(STORAGE_KEYS.PERSONALITY_RESULTS, results);
    invalidateStatsCache();
    return true;
};

// ──────────────────────────────────────────────
//  Helper Functions
// ──────────────────────────────────────────────

/**
 * Get rating string from average score
 * @param {number} score
 * @returns {string}
 */
const getRatingFromScore = (score) => {
    if (score >= 85) return 'Expert';
    if (score >= 70) return 'Advanced';
    if (score >= 50) return 'Intermediate';
    return 'Novice';
};

/**
 * Compute average for each scoring dimension
 * @param {Array} results - Completed career results
 * @returns {Object}
 */
const computeDimensionAverages = (results) => {
    if (results.length === 0) {
        return { competence: 0, ethics: 0, leadership: 0, innovation: 0 };
    }

    const totals = { competence: 0, ethics: 0, leadership: 0, innovation: 0 };
    results.forEach((r) => {
        if (r.scores) {
            totals.competence += r.scores.competence || 0;
            totals.ethics += r.scores.ethics || 0;
            totals.leadership += r.scores.leadership || 0;
            totals.innovation += r.scores.innovation || 0;
        }
    });

    const count = results.length;
    return {
        competence: Math.round(totals.competence / count),
        ethics: Math.round(totals.ethics / count),
        leadership: Math.round(totals.leadership / count),
        innovation: Math.round(totals.innovation / count),
    };
};

/**
 * Compute win streaks from results (consecutive above-average scores)
 * @param {Array} results
 * @returns {Object} { currentStreak, bestStreak }
 */
const computeStreaks = (results) => {
    if (results.length === 0) return { currentStreak: 0, bestStreak: 0 };

    // Reverse to chronological order
    const chronological = [...results].reverse();
    let currentStreak = 0;
    let bestStreak = 0;
    let streak = 0;

    chronological.forEach((r) => {
        if (r.averageScore >= 70) {
            // "Advanced" or better
            streak++;
            bestStreak = Math.max(bestStreak, streak);
        } else {
            streak = 0;
        }
    });

    // Current streak is from the most recent results
    currentStreak = 0;
    for (let i = results.length - 1; i >= 0; i--) {
        if (results[i].averageScore >= 70) {
            currentStreak++;
        } else {
            break;
        }
    }

    return { currentStreak, bestStreak };
};

/**
 * Compute rating distribution
 * @param {Array} results
 * @returns {Object}
 */
const computeRatingDistribution = (results) => {
    const dist = { Expert: 0, Advanced: 0, Intermediate: 0, Novice: 0 };
    results.forEach((r) => {
        if (r.rating && dist[r.rating] !== undefined) {
            dist[r.rating]++;
        }
    });
    return dist;
};

/**
 * Compute MBTI dimension percentages
 * @param {Object} dimensions - Raw dimension scores
 * @returns {Object} Percentage pairs
 */
const computeDimensionPercentages = (dimensions) => {
    if (!dimensions) return {};

    const compute = (score, totalQuestions = 25) => {
        // Normalize score to percentage
        const maxScore = totalQuestions * 2; // Max deviation from center
        const pct = Math.round(50 + (score / maxScore) * 50);
        return Math.max(0, Math.min(100, pct));
    };

    return {
        EI: { E: compute(dimensions.EI || 0), I: 100 - compute(dimensions.EI || 0) },
        NS: { N: compute(dimensions.NS || 0), S: 100 - compute(dimensions.NS || 0) },
        FT: { F: compute(dimensions.FT || 0), T: 100 - compute(dimensions.FT || 0) },
        PJ: { P: compute(dimensions.PJ || 0), J: 100 - compute(dimensions.PJ || 0) },
    };
};

/**
 * Get a version hash of the data for cache invalidation
 * @returns {string}
 */
const getDataVersion = () => {
    const careers = getCareerResults();
    const personality = getPersonalityResults();
    return `${careers.length}-${personality.length}-${careers[0]?.id || 'none'}`;
};

/**
 * Invalidate the statistics cache
 */
const invalidateStatsCache = () => {
    storage.remove(STORAGE_KEYS.STATISTICS_CACHE);
};

// ──────────────────────────────────────────────
//  Public Summary
// ──────────────────────────────────────────────

/**
 * Get a quick summary for display on home screen
 * @returns {Object}
 */
export const getQuickSummary = () => {
    const stats = getStatistics();
    const latestPersonality = getLatestPersonalityResult();

    return {
        gamesPlayed: stats.totalGamesPlayed,
        gamesCompleted: stats.totalGamesCompleted,
        averageScore: stats.averageScore,
        careersExplored: stats.careersCompletedCount,
        personalityType: latestPersonality?.mbtiType || null,
        currentStreak: stats.currentStreak,
        lastPlayedAt: stats.lastPlayedAt,
    };
};
