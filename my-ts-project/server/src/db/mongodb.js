import mongoose from 'mongoose';
import 'dotenv/config'

export async function connectToMongoDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}
export async function checkMongoDB() {
    await mongoose.connection.db.admin().ping({ping: 1});
}