import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';
import fs from 'fs';

const prisma = new PrismaClient();

const serializeBigInt = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
};

// Get all CMS entries
export const getUsers = async (req, res) => {
  const usersList = await prisma.users.findMany();
  if (!usersList || usersList.length === 0) {
    return res.status(404).json({ error: 'No users found' });
  }
  // Serialize BigInt values to strings for JSON compatibility
  // This is necessary because JSON does not support BigInt natively
  // and Prisma returns BigInt for ID fields.
  // We convert them to strings before sending the response.
  // This is a workaround for the JSON serialization issue with BigInt.
  res.json(serializeBigInt(usersList));
};

// Get CMS entry by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
      where: { id: BigInt(id) },
    });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(serializeBigInt(user));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create CMS entry
export const createUser = async (req, res) => {
  const { password, ...rest } = req.body;
  let profilePicPath = null;

  if (req.file) {
    // Construct the URL path for the uploaded file
    // Assuming your uploads folder is served statically at /uploads
    profilePicPath = `/uploads/${req.file.filename}`;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
    const user = await prisma.users.create({
      data: {
        ...rest,
        password: hashedPassword,
        profilePic: profilePicPath, // Add profilePic path to data
      },
    });

    res.status(201).json(serializeBigInt(user));
  } catch (error) {
    console.error('Error creating user:', error);
    // If there's an error and a file was uploaded, attempt to delete it
    if (req.file && profilePicPath) {
      try {
        fs.unlinkSync(req.file.path); // req.file.path is the absolute path on the server
        console.log('Cleaned up uploaded file due to error:', req.file.filename);
      } catch (cleanupError) {
        console.error('Error cleaning up file:', cleanupError);
      }
    }
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Update CMS entry
export const updateUser = async (req, res) => {
  const { id } = req.params;
  let data = req.body;
  let profilePicPath = null;

  if (req.file) {
    profilePicPath = `/uploads/${req.file.filename}`;
    data = { ...data, profilePic: profilePicPath };
  }

  try {
    // If password is provided in the request, hash it
    if (data.password && data.password.trim() !== '') {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data = { ...data, password: hashedPassword };
    } else {
      const { password, ...restOfData } = data; // Use a different name to avoid conflict
      data = restOfData;
    }

    const user = await prisma.users.update({
      where: { id: BigInt(id) },
      data,
    });
    res.json(serializeBigInt(user));
  } catch (error) {
    console.error('Error updating user:', error);
    // If there's an error and a file was uploaded, attempt to delete it
    if (req.file && profilePicPath) {
      try {
        fs.unlinkSync(req.file.path);
        console.log('Cleaned up uploaded file due to error:', req.file.filename);
      } catch (cleanupError) {
        console.error('Error cleaning up file:', cleanupError);
      }
    }
    // Check for specific Prisma errors, like record not found
    if (error.code === 'P2025') {
      // Prisma's error code for "Record to update not found."
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(500).json({ message: 'Error updating user' });
  }
};

// Delete CMS entry
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await prisma.users.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};