import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import authRoutes from './routes/auth.js';

const PORT = process.env.PORT || 3000
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose.connect('mongodb://localhost:27017/TendyTalk')
.then(() => {
    console.log("Connected to MongoDB at port 27017")
});