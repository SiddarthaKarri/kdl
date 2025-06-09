import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const name = "Siddartha";
  const email = "siddarthak03@gmail.com";
  const password = "qwertyuiop";
  const mobile = "9876543210";
  const role = "admin"; // Explicitly set role to admin

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        mobile,
        role, // Ensure role is included
        // address can be added here if needed, e.g., address: "123 Main St"
      },
    });
    console.log(`Successfully created new admin user: ${newUser.email} with ID: ${newUser.id} and Role: ${newUser.role}`);
  } catch (error) {
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      console.error(`Error: A user with the email "${email}" already exists.`);
    } else {
      console.error("Error creating new admin user:", error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });