import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', authRoutes)
app.use('/api', postRoutes)

mongoose.connect(process.env.ATLAS_URI || '', {
    dbName: "TendyTalk"
})
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch ((error) => {
    console.error("Error from app.js mongoose connection", error)
});


export default app;