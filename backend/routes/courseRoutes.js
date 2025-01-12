import express from 'express';
import { completeCourse, getUserProgress,} from '../controllers/courseController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to update course progress
router.post('/update-progress',protect, completeCourse);

// Route to get user progress
router.get('/progress',protect, getUserProgress);

export default router;