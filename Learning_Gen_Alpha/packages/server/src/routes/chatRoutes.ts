import { Router } from 'express';
import { chatController } from '../controllers/chatController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.post('/:sessionId/send', (req, res) => chatController.sendMessage(req, res));
router.get('/:sessionId/history', (req, res) => chatController.getHistory(req, res));

export default router;
