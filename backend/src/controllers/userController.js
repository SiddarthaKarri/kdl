import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';

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

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
    const user = await prisma.users.create({
      data: {
        ...rest,
        password: hashedPassword,
      },
    });

    res.status(201).json(serializeBigInt(user));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Update CMS entry
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const user = await prisma.users.update({
    where: { id: BigInt(id) },
    data,
  });
  res.json(serializeBigInt(user));
};

// Delete CMS entry
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await prisma.users.delete({
    where: { id: BigInt(id) },
  });
  res.status(204).send();
};