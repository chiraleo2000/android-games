import { Request, Response } from 'express';
import { gameService } from '../services/gameService';
import { sanitizeString } from '../utils/validation';

export class GameController {
  /**
   * POST /game/sessions - Create a new game session
   */
  async createSession(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const settings = req.body.settings || {};
      const session = await gameService.createSession(req.player.playerId, settings);

      res.status(201).json({
        session: {
          id: session.id,
          joinCode: session.joinCode,
          state: session.state,
          players: session.players,
          settings: session.settings,
        },
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/join - Join a session with a join code
   */
  async joinSession(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const joinCode = sanitizeString(req.body?.joinCode ?? '').toUpperCase();
      if (!joinCode || joinCode.length !== 6) {
        res.status(400).json({ error: 'Invalid join code. Must be 6 characters.' });
        return;
      }

      const session = await gameService.joinSession(joinCode, req.player.playerId);

      res.json({
        session: {
          id: session.id,
          joinCode: session.joinCode,
          state: session.state,
          players: session.players,
          settings: session.settings,
        },
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/:sessionId/start - Start the game
   */
  async startGame(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const { session, activity } = await gameService.startGame(sessionId, req.player.playerId);

      res.json({
        session: {
          id: session.id,
          state: session.state,
          players: session.players,
        },
        activity: {
          id: activity.id,
          type: activity.type,
          title: activity.title,
          description: activity.description,
          difficulty: activity.difficulty,
          roles: activity.roles,
          steps: activity.steps,
          educationalMeta: activity.educationalMeta,
          hints: [], // Don't send hint content until unlocked
          timeEstimate: activity.timeEstimate,
        },
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/:sessionId/submit - Submit a solution
   */
  async submitSolution(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const { activityId, answer, explanation } = req.body;

      if (!activityId) {
        res.status(400).json({ error: 'activityId is required' });
        return;
      }

      const sanitizedExplanation = sanitizeString(explanation || '');
      if (sanitizedExplanation.length > 5000) {
        res.status(400).json({ error: 'Explanation exceeds maximum length of 5000 characters' });
        return;
      }

      const result = await gameService.submitSolution(sessionId, {
        playerId: req.player.playerId,
        activityId,
        answer,
        explanation: sanitizedExplanation,
      });

      res.json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/:sessionId/step - Complete a step
   */
  async completeStep(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const { activityId, stepNumber } = req.body;

      if (!activityId || !stepNumber) {
        res.status(400).json({ error: 'activityId and stepNumber are required' });
        return;
      }

      const result = await gameService.completeStep(
        sessionId, activityId, stepNumber, req.player.playerId,
      );

      res.json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/:sessionId/hint - Request a hint
   */
  async requestHint(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const { activityId } = req.body;

      const hint = gameService.requestHint(sessionId, activityId, req.player.playerId);

      if (!hint) {
        res.status(404).json({ error: 'No hints available yet. Keep trying!' });
        return;
      }

      res.json(hint);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/:sessionId/next - Move to next activity
   */
  async nextActivity(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const activity = await gameService.nextActivity(sessionId);

      res.json({
        activity: {
          id: activity.id,
          type: activity.type,
          title: activity.title,
          description: activity.description,
          difficulty: activity.difficulty,
          roles: activity.roles,
          steps: activity.steps,
          educationalMeta: activity.educationalMeta,
          timeEstimate: activity.timeEstimate,
        },
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * POST /game/sessions/:sessionId/end - End the game
   */
  async endGame(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const result = await gameService.endGame(sessionId);

      res.json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export const gameController = new GameController();
