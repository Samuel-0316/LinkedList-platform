import express from 'express';
import { createQuiz, getQuizzes } from '../controllers/quizController.js';

const router = express.Router();

router.post('/create', createQuiz);
router.get('/', getQuizzes);

export default router;
