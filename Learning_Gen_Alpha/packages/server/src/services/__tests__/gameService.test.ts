/**
 * GameService unit tests
 * Tests the complete gameplay flow: create session -> join -> start -> play -> end
 */

import { GameService } from '../gameService';
import { sessionManager } from '../sessionManager';
import { contentGenerator } from '../contentGenerator';
import { progressTracker } from '../progressTracker';
import { postgresClient } from '../../db/postgres';
import { SessionState, ActivityType, SkillCategory } from '@game/shared';

// Mock all external dependencies
jest.mock('../sessionManager');
jest.mock('../contentGenerator');
jest.mock('../progressTracker');
jest.mock('../../db/postgres');
jest.mock('../../db/redis');

// Helper factories
function makeSession(overrides: Record<string, any> = {}) {
  return {
    id: 'session-1',
    joinCode: 'ABC123',
    hostPlayerId: 'host-1',
    players: [
      { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
    ],
    state: SessionState.WAITING,
    settings: { minPlayers: 2, maxPlayers: 5, difficulty: 1, activityTypes: [], allowHints: true },
    activityHistory: [],
    createdAt: new Date(),
    ...overrides,
  };
}

function makeActivity(overrides: Record<string, any> = {}) {
  return {
    id: 'activity-1',
    type: ActivityType.CODE_CHALLENGE,
    title: 'Code Together: Build a Calculator',
    description: 'Work together to build a calculator',
    difficulty: 1,
    requiredPlayers: 2,
    roles: [
      { roleId: 'role_1', name: 'Leader', description: 'Leads', capabilities: [], restrictions: [] },
      { roleId: 'role_2', name: 'Analyst', description: 'Analyzes', capabilities: [], restrictions: [] },
    ],
    content: { scenario: 'Test', objectives: [], resources: {}, constraints: [], visualAssets: [] },
    solution: { type: 'COLLABORATIVE', expectedAnswer: {}, validationRules: [], requiresAllPlayers: false },
    hints: [
      { level: 1, content: 'Hint 1', unlockAfterAttempts: 3 },
      { level: 2, content: 'Hint 2', unlockAfterAttempts: 5 },
    ],
    timeEstimate: 300,
    skillsRequired: { technicalSkills: ['coding'], softSkills: ['collaboration'], minimumSkillLevel: 1 },
    steps: [
      { stepNumber: 1, title: 'Understand', description: 'Read the problem', coopRequirement: 'All', estimatedTime: 60 },
      { stepNumber: 2, title: 'Discuss', description: 'Plan approach', coopRequirement: 'Leader + Analyst', estimatedTime: 90 },
      { stepNumber: 3, title: 'Build', description: 'Implement', coopRequirement: 'All', estimatedTime: 120 },
    ],
    educationalMeta: {
      skillCategories: [SkillCategory.SOFTWARE],
      learningObjectives: ['Learn coding'],
      realWorldApplication: 'Real devs do this',
      aiEraRelevance: 'AI helps but you need to understand',
      assessmentCriteria: ['Quality'],
    },
    createdAt: new Date(),
    ...overrides,
  };
}

describe('GameService', () => {
  let gameService: GameService;
  let mockWsManager: { broadcastToSession: jest.Mock };

  beforeEach(() => {
    jest.clearAllMocks();
    gameService = new GameService();
    mockWsManager = { broadcastToSession: jest.fn() };
    gameService.setWebSocketManager(mockWsManager as any);
  });

  describe('createSession', () => {
    it('should create a session and emit session_created event', async () => {
      const session = makeSession();
      (sessionManager.createSession as jest.Mock).mockResolvedValue(session);

      const result = await gameService.createSession('host-1', { difficulty: 2 });

      expect(sessionManager.createSession).toHaveBeenCalledWith('host-1', { difficulty: 2 });
      expect(result.id).toBe('session-1');
      expect(result.joinCode).toBe('ABC123');
      expect(mockWsManager.broadcastToSession).toHaveBeenCalledWith(
        'session-1',
        'session_created',
        expect.objectContaining({ sessionId: 'session-1', joinCode: 'ABC123' }),
      );
    });

    it('should propagate errors from sessionManager', async () => {
      (sessionManager.createSession as jest.Mock).mockRejectedValue(new Error('DB error'));

      await expect(gameService.createSession('host-1', {})).rejects.toThrow('DB error');
    });
  });

  describe('joinSession', () => {
    it('should join a session by code and emit player_joined', async () => {
      const session = makeSession({
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
        ],
        state: SessionState.READY,
      });
      (sessionManager.addPlayer as jest.Mock).mockResolvedValue(session);

      const result = await gameService.joinSession('ABC123', 'player-2');

      expect(sessionManager.addPlayer).toHaveBeenCalledWith('ABC123', 'player-2');
      expect(result.players).toHaveLength(2);
      expect(mockWsManager.broadcastToSession).toHaveBeenCalledWith(
        'session-1',
        'player_joined',
        expect.objectContaining({ playerId: 'player-2', playerCount: 2 }),
      );
    });

    it('should reject joining with invalid join code', async () => {
      (sessionManager.addPlayer as jest.Mock).mockRejectedValue(
        new Error('Session not found with this join code'),
      );

      await expect(gameService.joinSession('BADCOD', 'player-2'))
        .rejects.toThrow('Session not found with this join code');
    });

    it('should reject joining a full session', async () => {
      (sessionManager.addPlayer as jest.Mock).mockRejectedValue(new Error('Session is full'));

      await expect(gameService.joinSession('ABC123', 'player-6'))
        .rejects.toThrow('Session is full');
    });
  });

  describe('startGame', () => {
    it('should start the game and generate first activity', async () => {
      const session = makeSession({
        state: SessionState.IN_PROGRESS,
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
        ],
      });
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      const result = await gameService.startGame('session-1', 'host-1');

      expect(result.session.state).toBe(SessionState.IN_PROGRESS);
      expect(result.activity.id).toBe('activity-1');
      expect(result.activity.roles[0].assignedPlayerId).toBe('host-1');
      expect(result.activity.roles[1].assignedPlayerId).toBe('player-2');
      expect(mockWsManager.broadcastToSession).toHaveBeenCalledWith(
        'session-1',
        'game_started',
        expect.objectContaining({ sessionId: 'session-1' }),
      );
    });

    it('should reject starting game if not the host', async () => {
      (sessionManager.startGame as jest.Mock).mockRejectedValue(
        new Error('Only the host can start the game'),
      );

      await expect(gameService.startGame('session-1', 'player-2'))
        .rejects.toThrow('Only the host can start the game');
    });

    it('should reject starting game if not enough players', async () => {
      (sessionManager.startGame as jest.Mock).mockRejectedValue(
        new Error('Not enough players to start'),
      );

      await expect(gameService.startGame('session-1', 'host-1'))
        .rejects.toThrow('Not enough players to start');
    });
  });

  describe('submitSolution', () => {
    beforeEach(async () => {
      // Set up an active game with an activity
      const session = makeSession({
        state: SessionState.IN_PROGRESS,
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
        ],
      });
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      await gameService.startGame('session-1', 'host-1');
    });

    it('should reject submission if game is not in progress', async () => {
      (sessionManager.getSession as jest.Mock).mockResolvedValue(
        makeSession({ state: SessionState.WAITING }),
      );

      await expect(
        gameService.submitSolution('session-1', {
          playerId: 'host-1',
          activityId: 'activity-1',
          answer: 'test',
          explanation: 'This is my explanation for this thing',
        }),
      ).rejects.toThrow('Game is not in progress');
    });

    it('should reject submission with missing explanation', async () => {
      (sessionManager.getSession as jest.Mock).mockResolvedValue(
        makeSession({ state: SessionState.IN_PROGRESS }),
      );

      const result = await gameService.submitSolution('session-1', {
        playerId: 'host-1',
        activityId: 'activity-1',
        answer: 'test',
        explanation: 'short',
      });

      expect(result.correct).toBe(false);
      expect(result.feedback).toContain('explanation');
    });

    it('should accept a valid submission and return correct result', async () => {
      const session = makeSession({ state: SessionState.IN_PROGRESS });
      (sessionManager.getSession as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({ rows: [] });
      (progressTracker.updateProgress as jest.Mock).mockResolvedValue({});
      (contentGenerator.adaptDifficultyUp as jest.Mock).mockReturnValue(2);

      const result = await gameService.submitSolution('session-1', {
        playerId: 'host-1',
        activityId: 'activity-1',
        answer: { code: 'function add(a,b) { return a+b; }' },
        explanation: 'We implemented an add function that takes two parameters and returns their sum.',
      });

      expect(result.correct).toBe(true);
      expect(result.partialCredit).toBe(100);
      expect(result.feedback).toContain('Excellent work');
    });

    it('should handle incorrect submission with feedback', async () => {
      const session = makeSession({ state: SessionState.IN_PROGRESS });
      (sessionManager.getSession as jest.Mock).mockResolvedValue(session);

      const result = await gameService.submitSolution('session-1', {
        playerId: 'host-1',
        activityId: 'activity-1',
        answer: null,
        explanation: '',
      });

      expect(result.correct).toBe(false);
    });

    it('should return error for non-existent activity', async () => {
      (sessionManager.getSession as jest.Mock).mockResolvedValue(
        makeSession({ state: SessionState.IN_PROGRESS }),
      );

      await expect(
        gameService.submitSolution('session-1', {
          playerId: 'host-1',
          activityId: 'non-existent-activity',
          answer: 'test',
          explanation: 'This is a long enough explanation',
        }),
      ).rejects.toThrow('Activity not found');
    });
  });

  describe('completeStep', () => {
    beforeEach(async () => {
      const session = makeSession({ state: SessionState.IN_PROGRESS, players: [
        { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
        { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
      ]});
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      await gameService.startGame('session-1', 'host-1');
    });

    it('should complete a step and return the next step', async () => {
      const result = await gameService.completeStep('session-1', 'activity-1', 1, 'host-1');

      expect(result.nextStep).toBe(2);
      expect(result.message).toContain('Step 1 complete');
      expect(mockWsManager.broadcastToSession).toHaveBeenCalledWith(
        'session-1',
        'step_completed',
        expect.objectContaining({ stepNumber: 1, completedBy: 'host-1' }),
      );
    });

    it('should return null nextStep when all steps are done', async () => {
      const result = await gameService.completeStep('session-1', 'activity-1', 3, 'host-1');

      expect(result.nextStep).toBeNull();
      expect(result.message).toContain('Submit your final solution');
    });

    it('should throw for non-existent activity', async () => {
      await expect(
        gameService.completeStep('session-1', 'non-existent', 1, 'host-1'),
      ).rejects.toThrow('Activity not found');
    });
  });

  describe('requestHint', () => {
    beforeEach(async () => {
      const session = makeSession({ state: SessionState.IN_PROGRESS, players: [
        { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
        { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
      ]});
      const activity = makeActivity();

      (sessionManager.startGame as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      await gameService.startGame('session-1', 'host-1');
    });

    it('should return null when no hints are unlocked yet', () => {
      const hint = gameService.requestHint('session-1', 'activity-1', 'host-1');
      expect(hint).toBeNull();
    });

    it('should return null for non-existent activity', () => {
      const hint = gameService.requestHint('session-1', 'non-existent', 'host-1');
      expect(hint).toBeNull();
    });
  });

  describe('nextActivity', () => {
    it('should generate the next activity for the session', async () => {
      const session = makeSession({
        state: SessionState.IN_PROGRESS,
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 0 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 0 },
        ],
      });
      const activity = makeActivity({ id: 'activity-2', title: 'New Activity' });

      (sessionManager.getSession as jest.Mock).mockResolvedValue(session);
      (postgresClient.query as jest.Mock).mockResolvedValue({
        rows: [{ display_name: 'Player', technical_skill_level: 1, soft_skill_level: 1 }],
      });
      (contentGenerator.generateActivity as jest.Mock).mockReturnValue(activity);
      (sessionManager.setCurrentActivity as jest.Mock).mockResolvedValue(undefined);

      const result = await gameService.nextActivity('session-1');

      expect(result.id).toBe('activity-2');
      expect(mockWsManager.broadcastToSession).toHaveBeenCalledWith(
        'session-1',
        'activity_started',
        expect.objectContaining({ activity: expect.any(Object) }),
      );
    });

    it('should throw if session not found', async () => {
      (sessionManager.getSession as jest.Mock).mockResolvedValue(null);

      await expect(gameService.nextActivity('bad-session')).rejects.toThrow('Session not found');
    });
  });

  describe('endGame', () => {
    it('should end the session and return stats', async () => {
      const session = makeSession({
        state: SessionState.COMPLETED,
        players: [
          { playerId: 'host-1', joinedAt: new Date(), isConnected: true, currentRole: 'host', score: 200 },
          { playerId: 'player-2', joinedAt: new Date(), isConnected: true, currentRole: 'participant', score: 150 },
        ],
        activityHistory: ['activity-1'],
        startedAt: new Date(Date.now() - 600000),
        endedAt: new Date(),
      });

      (sessionManager.endSession as jest.Mock).mockResolvedValue(session);
      (progressTracker.incrementGamesPlayed as jest.Mock).mockResolvedValue(undefined);

      const result = await gameService.endGame('session-1');

      expect(result.teamStats.activitiesCompleted).toBe(1);
      expect(result.teamStats.totalScore).toBe(350);
      expect(result.teamStats.averageScore).toBe(175);
      expect(result.playerStats).toHaveLength(2);
      expect(progressTracker.incrementGamesPlayed).toHaveBeenCalledTimes(2);
      expect(mockWsManager.broadcastToSession).toHaveBeenCalledWith(
        'session-1',
        'game_completed',
        expect.objectContaining({ sessionId: 'session-1' }),
      );
    });
  });

  describe('getActivityState', () => {
    it('should return an activity after a game has been started', async () => {
      // Activities were added by earlier tests (module-level Map), so state should exist
      const result = gameService.getActivityState('session-1');
      // After startGame was called in previous tests, there should be an active activity
      expect(result).not.toBeNull();
      expect((result as NonNullable<typeof result>).id).toBeDefined();
      expect((result as NonNullable<typeof result>).type).toBeDefined();
    });
  });
});
