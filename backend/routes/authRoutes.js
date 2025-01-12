import express from 'express';
import { signup, login, updateProfile} from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/update', protect, updateProfile);

export default router;
