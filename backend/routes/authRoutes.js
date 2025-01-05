import express from 'express';
import { signup, login, updateProfile, authenticateUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/update', authenticateUser, updateProfile);

export default router;
