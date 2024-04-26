import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use('/api', authRoutes)

mongoose.connect(process.env.ATLAS_URI || '')
.then(() => {
    console.log("Connected to MongoDB at port 27017")
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch ((error) => {
    console.error("Error from app.js mongoose connection", error)
});


export default app;