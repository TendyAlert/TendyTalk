const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')

dotenv.config();


const authRoutesPromise = import ('./server/routes/auth.js');
const postRoutesPromise = import ('./server/routes/posts.js');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/tendytalk/manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    res.sendFile(path.join(__dirname, 'client/build'))
})

app.get('/tendytalk/static/js/main.0be6c208.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript')

    res.sendFile(path.join(__dirname, 'client/build/static/js/main.0be6c208.js'))
})

app.get('/tendytalk/static/css/main.500ba0b4.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css')

    res.sendFile(path.join(__dirname, 'client/build/static/css/main.500ba0b4.css'))
})

app.get('/tendytalk', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.get('/tendytalk/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.get('/favicon.ico', (req, res) => {
    res.status(204).end()
})

app.get('/', (req, res) => {
    res.status(204).end()
})

app.use(express.json())

authRoutesPromise.then(authRoutesModule => {
    const authRoutes = authRoutesModule.default;
    app.use('/api', authRoutes)
})
postRoutesPromise.then(postRoutesModule => {
    const postRoutes = postRoutesModule.default;
    app.use('/api', postRoutes)
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI || '', {
    dbName: 'TendyTalk'
})
.then(() => {
    console.log("Connected to MogoDB Atlas")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
    
})
.catch((error) => {
    console.error("Error connecting to MongoDB", error)
})