import { Router } from 'express';
import { gameController } from '../controllers/gameController';
import { authenticate } from '../middleware/auth';

const router = Router();

// All game routes require authentication
router.use(authenticate);

router.post('/sessions', (req, res) => gameController.createSession(req, res));
router.post('/sessions/join', (req, res) => gameController.joinSession(req, res));
router.post('/sessions/:sessionId/start', (req, res) => gameController.startGame(req, res));
router.post('/sessions/:sessionId/submit', (req, res) => gameController.submitSolution(req, res));
router.post('/sessions/:sessionId/step', (req, res) => gameController.completeStep(req, res));
router.post('/sessions/:sessionId/hint', (req, res) => gameController.requestHint(req, res));
router.post('/sessions/:sessionId/next', (req, res) => gameController.nextActivity(req, res));
router.post('/sessions/:sessionId/end', (req, res) => gameController.endGame(req, res));

export default router;
