import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser"; // Import cookie-parser

import cmsRoutes from "./routes/cmsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import seoRoutes from "./routes/seoRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import invoiceDetailRoutes from "./routes/invoiceDetailRoutes.js";
import invoiceRoutes from "./routes/inoviceRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import paymentMethodRoutes from "./routes/paymentMethodRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // Import authRoutes

dotenv.config();

const app = express();

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json()); // use built-in JSON parser
app.use(cookieParser()); // Use cookie-parser middleware

// Static file serving for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the KDL Backend API");
});

app.use("/api/auth", authRoutes); // Mount authRoutes
app.use("/api/cms", cmsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/invoiceDetails", invoiceDetailRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/paymentMethods", paymentMethodRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/settings", settingRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`✅ Backend running on port ${PORT}`);
});
