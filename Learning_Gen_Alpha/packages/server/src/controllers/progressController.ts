import { Request, Response } from 'express';
import { progressTracker } from '../services/progressTracker';

export class ProgressController {
  /**
   * GET /progress/:playerId - Get player progress and stats
   */
  async getProgress(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { playerId } = req.params;

      // Players can only view their own progress
      if (req.player.playerId !== playerId) {
        res.status(403).json({ error: 'You can only view your own progress' });
        return;
      }

      const stats = await progressTracker.getStats(playerId);

      res.json(stats);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * GET /progress/:playerId/achievements - Get player achievements
   */
  async getAchievements(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { playerId } = req.params;

      if (req.player.playerId !== playerId) {
        res.status(403).json({ error: 'You can only view your own achievements' });
        return;
      }

      const progress = await progressTracker.getProgress(playerId);

      res.json({ achievements: progress.achievements });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export const progressController = new ProgressController();
