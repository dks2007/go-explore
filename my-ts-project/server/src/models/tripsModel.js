import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    title:{type: String, required: true}, description: String, contry: String, city: String
}, {timestamps: true});

export default mongoose.model('Trip', tripSchema);