const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/TendyTalk')
.then(() => {
    console.log("Connected to MongoDB at port 27017")
});

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/auth', authRoutes)

app.use(express.static(path.join(__dirname, '../../tendy-talk-app/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../tendy-talk-app/src/index.js'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));