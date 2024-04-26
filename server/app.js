import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv'

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000
const staticPath = path.join(__dirname, '..', 'client', 'public')
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use(express.static(staticPath))

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