const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth')

const app = express();

mongoose.connect('mongodb://localhost:27017/TendyTalk', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.use('auth/', authRoutes)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));