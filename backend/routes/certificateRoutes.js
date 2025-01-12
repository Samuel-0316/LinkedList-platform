import express from 'express';
import generateCertificate from '../controllers/certificateController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/',protect, generateCertificate);

export default router;