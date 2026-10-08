import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { checkMongoDB } from './db/mongodb.js';
import app from './app.js';
import { connectToMongoDB } from './db/mongodb.js';


const PORT = process.env.PORT || 3000;


async function startServer() {
    try {
        await connectToMongoDB();
    } catch (error) {
        console.error("Failed to connect to MongoDB. Server will not start.", error);
        process.exit(1);
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

startServer();
