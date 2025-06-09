import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("FATAL ERROR: JWT_SECRET is not defined in .env file.");
  process.exit(1); // Exit if JWT_SECRET is not set
}

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' }); // User not found
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' }); // Password incorrect
    }

    // User is authenticated, generate a JWT
    const tokenPayload = {
      userId: user.id.toString(), // Convert BigInt to string for JWT payload
      role: user.role,
      name: user.name,
      email: user.email
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, {
      expiresIn: '15m', // Access token expires in 15 minutes
    });

    const refreshToken = jwt.sign({ userId: user.id.toString() }, JWT_SECRET, {
      expiresIn: '7d', // Refresh token expires in 7 days
    });

    // Prepare user data for the response, excluding password and serializing BigInts
    const userForResponse = serializeBigInt({ ...user }); // Create a copy and serialize
    delete userForResponse.password; // Remove password after serialization

    res.status(200).json({
      message: 'Login successful',
      token,
      refreshToken, // Add refreshToken to the response
      user: userForResponse, // Send the serialized user object
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const refreshToken = async (req, res) => {
  const { token: refreshTokenFromCookie } = req.cookies; // Assuming refresh token is sent in a cookie
  const { refreshToken: refreshTokenFromBody } = req.body; // Fallback to checking request body

  const refreshToken = refreshTokenFromBody || refreshTokenFromCookie;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not provided' });
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_SECRET);
    const userId = decoded.userId;

    // Optional: Check if user still exists or is active in the database
    const user = await prisma.users.findUnique({
      where: { id: BigInt(userId) }, // Convert userId back to BigInt for Prisma query
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid refresh token: User not found' });
    }

    // Generate a new access token
    const newTokenPayload = {
      userId: user.id.toString(),
      role: user.role,
      name: user.name,
      email: user.email
    };

    const newAccessToken = jwt.sign(newTokenPayload, JWT_SECRET, {
      expiresIn: '15m', // New access token expires in 15 minutes
    });

    // Optionally, generate a new refresh token and send it back
    // This can help in implementing refresh token rotation for better security
    const newRefreshToken = jwt.sign({ userId: user.id.toString() }, JWT_SECRET, {
        expiresIn: '7d',
    });

    // It's good practice to send the new refresh token via an HttpOnly cookie
    // For simplicity, we'll include it in the JSON response here.
    // Consider setting it in an HttpOnly cookie in a production environment.
    res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(200).json({
      message: 'Token refreshed successfully',
      token: newAccessToken,
      refreshToken: newRefreshToken // Send the new refresh token
    });

  } catch (error) {
    console.error('Refresh token error:', error);
    if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Refresh token expired' });
    }
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
};
