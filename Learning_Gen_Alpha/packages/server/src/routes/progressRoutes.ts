import { Router } from 'express';
import { progressController } from '../controllers/progressController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/:playerId', (req, res) => progressController.getProgress(req, res));
router.get('/:playerId/achievements', (req, res) => progressController.getAchievements(req, res));

export default router;
