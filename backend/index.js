import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {connectDB} from './src/lib/db.js';

import authRoutes from './src/routes/auth.routes.js';
import messageRoutes from './src/routes/message.routes.js';

import { app, server } from './src/lib/socket.js';



dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  "http://localhost:5173"
];

if (process.env.NODE_ENV === "production") {
  allowedOrigins.push("https://frontend-on-render.com");  //TODO: Add render frontend site
}

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

