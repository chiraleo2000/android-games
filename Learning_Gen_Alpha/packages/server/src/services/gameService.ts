import {
  GameSession, SessionState, SessionPlayer, Activity, ActivityType,
  GameEventType, PlayerProfile, Hint,
} from '@game/shared';
import { sessionManager } from './sessionManager';
import { contentGenerator } from './contentGenerator';
import { WebSocketManager } from './webSocketManager';
import { progressTracker } from './progressTracker';
import { postgresClient } from '../db/postgres';

interface SolutionSubmission {
  playerId: string;
  activityId: string;
  answer: any;
  explanation: string;
}

interface SolutionResult {
  correct: boolean;
  feedback: string;
  partialCredit: number; // 0-100
  hintsUnlocked: number[];
}

// In-memory activity state (would be Redis in production)
const activeActivities: Map<string, Activity> = new Map();
const activityAttempts: Map<string, Map<string, number>> = new Map(); // activityId -> playerId -> attempts
const playerContributions: Map<string, Set<string>> = new Map(); // activityId -> set of playerIds who contributed
const sessionDifficulties: Map<string, number> = new Map(); // sessionId -> current difficulty

export class GameService {
  private wsManager?: WebSocketManager;

  setWebSocketManager(wsManager: WebSocketManager) {
    this.wsManager = wsManager;
  }

  /**
   * Create a new game session
   */
  async createSession(hostPlayerId: string, settings: any): Promise<GameSession> {
    const session = await sessionManager.createSession(hostPlayerId, settings);
    sessionDifficulties.set(session.id, session.settings.difficulty);

    this.emitToSession(session.id, 'session_created', {
      sessionId: session.id,
      joinCode: session.joinCode,
      eventType: GameEventType.SESSION_CREATED,
    });

    return session;
  }

  /**
   * Join a session with a join code
   */
  async joinSession(joinCode: string, playerId: string): Promise<GameSession> {
    const session = await sessionManager.addPlayer(joinCode, playerId);

    this.emitToSession(session.id, 'player_joined', {
      playerId,
      playerCount: session.players.length,
      eventType: GameEventType.PLAYER_JOINED,
    });

    return session;
  }

  /**
   * Start the game and generate first activity
   */
  async startGame(sessionId: string, hostPlayerId: string): Promise<{ session: GameSession; activity: Activity }> {
    const session = await sessionManager.startGame(sessionId, hostPlayerId);
    const profiles = await this.getPlayerProfiles(session);
    const difficulty = sessionDifficulties.get(sessionId) || session.settings.difficulty;

    const activity = contentGenerator.generateActivity(
      session.players.length,
      profiles,
      difficulty,
    );

    // Assign roles to players
    for (let i = 0; i < session.players.length; i++) {
      if (activity.roles[i]) {
        activity.roles[i].assignedPlayerId = session.players[i].playerId;
        session.players[i].currentRole = activity.roles[i].name;
      }
    }

    activeActivities.set(activity.id, activity);
    activityAttempts.set(activity.id, new Map());
    playerContributions.set(activity.id, new Set());
    await sessionManager.setCurrentActivity(sessionId, activity.id);

    this.emitToSession(sessionId, 'game_started', {
      sessionId,
      activity: this.sanitizeActivityForPlayers(activity),
      eventType: GameEventType.GAME_STARTED,
    });

    return { session, activity };
  }

  /**
   * Submit a solution for an activity
   */
  async submitSolution(sessionId: string, submission: SolutionSubmission): Promise<SolutionResult> {
    const session = await sessionManager.getSession(sessionId);
    if (session?.state !== SessionState.IN_PROGRESS) {
      throw new Error('Game is not in progress');
    }

    const activity = activeActivities.get(submission.activityId);
    if (!activity) {
      throw new Error('Activity not found');
    }

    // Validate format
    if (!submission.answer || !submission.explanation || submission.explanation.length < 20) {
      return {
        correct: false,
        feedback: 'Please provide both an answer and an explanation (at least 20 characters).',
        partialCredit: 0,
        hintsUnlocked: [],
      };
    }

    // Track contribution
    const contributions = playerContributions.get(activity.id) || new Set();
    contributions.add(submission.playerId);
    playerContributions.set(activity.id, contributions);

    // Track attempts
    const attempts = activityAttempts.get(activity.id) || new Map();
    const playerAttempts = (attempts.get(submission.playerId) || 0) + 1;
    attempts.set(submission.playerId, playerAttempts);
    activityAttempts.set(activity.id, attempts);

    // Check if solution requires all players
    if (activity.solution.requiresAllPlayers) {
      if (contributions.size < activity.requiredPlayers) {
        const remaining = activity.requiredPlayers - contributions.size;
        return {
          correct: false,
          feedback: `Good contribution! Waiting for ${remaining} more team member(s) to submit their part.`,
          partialCredit: 25,
          hintsUnlocked: this.getUnlockedHints(activity, playerAttempts),
        };
      }
    }

    // Evaluate solution (simplified — in production this would be more sophisticated)
    const isCorrect = this.evaluateSolution(activity, submission);

    if (isCorrect) {
      return await this.handleCorrectSolution(sessionId, session, activity, submission);
    } else {
      return this.handleIncorrectSolution(activity, submission, playerAttempts);
    }
  }

  /**
   * Get current activity state for a session
   */
  getActivityState(sessionId: string): Activity | null {
    // Find active activity for this session
    const entries = Array.from(activeActivities.values());
    return entries.length > 0 ? entries[0] : null;
  }

  /**
   * Request a hint for the current activity
   */
  requestHint(sessionId: string, activityId: string, playerId: string): { hint: string; level: number } | null {
    const activity = activeActivities.get(activityId);
    if (!activity) return null;

    const attempts = activityAttempts.get(activityId) || new Map();
    const playerAttempts = attempts.get(playerId) || 0;

    const unlockedHints = this.getUnlockedHints(activity, playerAttempts);
    if (unlockedHints.length === 0) {
      return null;
    }

    const highestHint = activity.hints.find(h => h.level === Math.max(...unlockedHints));
    if (!highestHint) return null;

    this.emitToSession(sessionId, 'hint_unlocked', {
      activityId,
      hint: highestHint.content,
      level: highestHint.level,
      eventType: GameEventType.HINT_UNLOCKED,
    });

    return { hint: highestHint.content, level: highestHint.level };
  }

  /**
   * Complete current step in the activity
   */
  async completeStep(
    sessionId: string,
    activityId: string,
    stepNumber: number,
    playerId: string,
  ): Promise<{ nextStep: number | null; message: string }> {
    const activity = activeActivities.get(activityId);
    if (!activity) throw new Error('Activity not found');

    const totalSteps = activity.steps.length;
    if (stepNumber > totalSteps) {
      return { nextStep: null, message: 'All steps completed!' };
    }

    this.emitToSession(sessionId, 'step_completed', {
      activityId,
      stepNumber,
      completedBy: playerId,
      totalSteps,
      eventType: GameEventType.STEP_COMPLETED,
    });

    if (stepNumber >= totalSteps) {
      return { nextStep: null, message: 'All steps completed! Submit your final solution.' };
    }

    const nextStep = activity.steps[stepNumber]; // steps are 0-indexed in array, stepNumber is 1-indexed
    return {
      nextStep: stepNumber + 1,
      message: `Step ${stepNumber} complete! Next: ${nextStep?.title || 'Final step'}`,
    };
  }

  /**
   * Move to next activity after completion
   */
  async nextActivity(sessionId: string): Promise<Activity> {
    const session = await sessionManager.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    const profiles = await this.getPlayerProfiles(session);
    const difficulty = sessionDifficulties.get(sessionId) || session.settings.difficulty;
    const completedTypes = this.getCompletedActivityTypes(session);

    const activity = contentGenerator.generateActivity(
      session.players.length,
      profiles,
      difficulty,
      completedTypes,
    );

    // Assign roles
    for (let i = 0; i < session.players.length; i++) {
      if (activity.roles[i]) {
        activity.roles[i].assignedPlayerId = session.players[i].playerId;
      }
    }

    activeActivities.set(activity.id, activity);
    activityAttempts.set(activity.id, new Map());
    playerContributions.set(activity.id, new Set());
    await sessionManager.setCurrentActivity(sessionId, activity.id);

    this.emitToSession(sessionId, 'activity_started', {
      activity: this.sanitizeActivityForPlayers(activity),
      eventType: GameEventType.ACTIVITY_STARTED,
    });

    return activity;
  }

  /**
   * End the game session
   */
  async endGame(sessionId: string): Promise<{
    session: GameSession;
    teamStats: any;
    playerStats: any[];
  }> {
    const session = await sessionManager.endSession(sessionId);

    // Calculate statistics
    const teamStats = {
      activitiesCompleted: session.activityHistory.length,
      totalScore: session.players.reduce((s: number, p: SessionPlayer) => s + p.score, 0),
      averageScore: session.players.reduce((s: number, p: SessionPlayer) => s + p.score, 0) / session.players.length,
      duration: session.endedAt && session.startedAt
        ? Math.floor((new Date(session.endedAt).getTime() - new Date(session.startedAt).getTime()) / 1000)
        : 0,
    };

    const playerStats = session.players.map((p: SessionPlayer) => ({
      playerId: p.playerId,
      score: p.score,
      role: p.currentRole,
    }));

    // Update progress for all players
    for (const player of session.players) {
      await progressTracker.incrementGamesPlayed(player.playerId);
    }

    this.emitToSession(sessionId, 'game_completed', {
      sessionId,
      teamStats,
      playerStats,
      eventType: GameEventType.GAME_COMPLETED,
    });

    return { session, teamStats, playerStats };
  }

  // --- Private helpers ---

  private evaluateSolution(activity: Activity, submission: SolutionSubmission): boolean {
    // Simplified evaluation: checks explanation length, keywords, etc.
    // In production, this would use the activity's validationRules
    const hasExplanation = Boolean(submission.explanation && submission.explanation.length >= 20);
    const hasAnswer = submission.answer !== null && submission.answer !== undefined;

    // For collaborative solutions, check that enough players contributed
    if (activity.solution.requiresAllPlayers) {
      const contributions = playerContributions.get(activity.id) || new Set();
      if (contributions.size < activity.requiredPlayers) {
        return false;
      }
    }

    return hasExplanation && hasAnswer;
  }

  private async handleCorrectSolution(
    sessionId: string,
    session: GameSession,
    activity: Activity,
    submission: SolutionSubmission,
  ): Promise<SolutionResult> {
    // Award points
    const basePoints = activity.difficulty * 100;
    for (const player of session.players) {
      await postgresClient.query(
        `UPDATE session_players SET score = score + $1 WHERE session_id = $2 AND player_id = $3`,
        [basePoints, sessionId, player.playerId]
      );
    }

    // Update progress
    for (const player of session.players) {
      await progressTracker.updateProgress(player.playerId, activity);
    }

    // Increase difficulty for next activity
    const currentDiff = sessionDifficulties.get(sessionId) || session.settings.difficulty;
    sessionDifficulties.set(sessionId, contentGenerator.adaptDifficultyUp(currentDiff));

    // Clean up activity state
    activeActivities.delete(activity.id);
    activityAttempts.delete(activity.id);
    playerContributions.delete(activity.id);

    this.emitToSession(sessionId, 'activity_completed', {
      activityId: activity.id,
      correct: true,
      points: basePoints,
      educationalSummary: {
        learningObjectives: activity.educationalMeta.learningObjectives,
        realWorldApplication: activity.educationalMeta.realWorldApplication,
        aiRelevance: activity.educationalMeta.aiEraRelevance,
      },
      eventType: GameEventType.ACTIVITY_COMPLETED,
    });

    return {
      correct: true,
      feedback: `Excellent work, team! You earned ${basePoints} points. ${activity.educationalMeta.realWorldApplication}`,
      partialCredit: 100,
      hintsUnlocked: [],
    };
  }

  private handleIncorrectSolution(
    activity: Activity,
    submission: SolutionSubmission,
    attempts: number,
  ): SolutionResult {
    const _difficulty = sessionDifficulties.get(activity.id);
    const feedbacks = [
      'Not quite right. Think about the problem from a different angle. What does each team member see from their role?',
      'Close, but the solution needs more detail. Have you considered all the constraints?',
      'Good effort! Try discussing with your teammates — maybe another role has a key insight.',
      'Remember to use each team member\'s unique abilities. The answer requires collaboration!',
    ];

    return {
      correct: false,
      feedback: feedbacks[Math.min(attempts - 1, feedbacks.length - 1)],
      partialCredit: Math.min(20 * attempts, 80),
      hintsUnlocked: this.getUnlockedHints(activity, attempts),
    };
  }

  private getUnlockedHints(activity: Activity, attempts: number): number[] {
    return activity.hints
      .filter((h: Hint) => attempts >= h.unlockAfterAttempts)
      .map((h: Hint) => h.level);
  }

  private sanitizeActivityForPlayers(activity: Activity): any {
    // Remove solution data before sending to players
    const { solution, ...activityData } = activity;
    return activityData;
  }

  private async getPlayerProfiles(session: GameSession): Promise<PlayerProfile[]> {
    const profiles: PlayerProfile[] = [];
    for (const player of session.players) {
      const result = await postgresClient.query(
        `SELECT display_name, technical_skill_level, soft_skill_level FROM players WHERE id = $1`,
        [player.playerId]
      );
      if (result.rows[0]) {
        profiles.push({
          displayName: result.rows[0].display_name || 'Player',
          avatarUrl: '',
          technicalSkillLevel: result.rows[0].technical_skill_level || 1,
          softSkillLevel: result.rows[0].soft_skill_level || 1,
          businessSkillLevel: 1,
          aiLiteracyLevel: 1,
          preferredRoles: [],
          achievements: [],
          totalGamesPlayed: 0,
          totalGamesWon: 0,
        });
      }
    }
    return profiles;
  }

  private getCompletedActivityTypes(session: GameSession): ActivityType[] {
    // In a full implementation, we'd look up the activity types from history
    return [];
  }

  private emitToSession(sessionId: string, event: string, data: any) {
    if (this.wsManager) {
      this.wsManager.broadcastToSession(sessionId, event, data);
    }
  }
}

export const gameService = new GameService();
