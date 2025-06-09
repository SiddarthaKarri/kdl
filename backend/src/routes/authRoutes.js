import { Router } from 'express';
import { loginUser, refreshToken } from '../controllers/authController.js'; // Import refreshToken

const router = Router();

// Login route
router.post('/login', loginUser);

// Refresh token route
router.post('/refresh-token', refreshToken);

export default router;
