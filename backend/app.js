
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

// Load environment variables
dotenv.config({ path: "./config/config.env" });

const app = express();

// Allowed frontend origins
const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL
].filter(Boolean);

// CORS configuration
app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
    res.status(200).send("Restaurant Management API is running!");
});

// API routes
app.use("/api/v1/reservation", reservationRouter);

// Database connection
dbConnection();

// Error handling middleware (keep this after routes)
app.use(errorMiddleware);

export default app;
