import express from "express";
import cors from "cors";
import {checkMongoDB} from "./db/mongodb.js";
import tripsRoutes from './routes/tripsRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/trips', tripsRoutes);

app.get("/api/health" , async(req, res) => {
    try {
     await checkMongoDB();
        res.json({server: "ok", database: "ok"});
    } catch (error) {
        console.error("Health check failed:", error);
        res.status(503).json({server: "ok", database: "error"});
    }
});

export default app;