import { Request, Response } from 'express';
import { chatService } from '../services/chatService';
import { sanitizeString } from '../utils/validation';

export class ChatController {
  /**
   * POST /chat/:sessionId/send - Send a chat message
   */
  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const content = sanitizeString(req.body.content || '');

      if (!content) {
        res.status(400).json({ error: 'Message content is required' });
        return;
      }

      const result = await chatService.sendMessage(sessionId, req.player.playerId, content);

      if ('error' in result) {
        res.status(429).json(result);
        return;
      }

      res.json({ message: result });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * GET /chat/:sessionId/history - Get message history
   */
  async getHistory(req: Request, res: Response): Promise<void> {
    try {
      if (!req.player) {
        res.status(401).json({ error: 'Authentication required' });
        return;
      }

      const { sessionId } = req.params;
      const limit = Math.min(Number.parseInt(req.query.limit as string) || 50, 100);
      const before = req.query.before as string | undefined;

      const messages = await chatService.getHistory(sessionId, limit, before);

      res.json({ messages });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

export const chatController = new ChatController();
