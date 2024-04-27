const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();

const authRoutesPromise = import ('./server/routes/auth.js');
const postRoutesPromise = import ('./server/routes/posts.js');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/tendytalk/manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    res.sendFile(path.join(__dirname, 'client/build'))
})

app.get('/tendytalk/static/js/main.2e48c3f3.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript')

    res.sendFile(path.join(__dirname, 'client/build/static/js/main.2e48c3f3.js'))
})

app.get('/tendytalk/static/css/main.d58047a7.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css')

    res.sendFile(path.join(__dirname, 'client/build/static/css/main.d58047a7.css'))
})

app.get('/tendytalk/favicon.ico', (req, res) => {
    res.status(204).end()
})

app.get('/', (req, res) => {
    res.status(204).end()
})

authRoutesPromise.then(authRoutesModule => {
    const authRoutes = authRoutesModule.default;
    app.use('/tendytalk/api', authRoutes)
})
postRoutesPromise.then(postRoutesModule => {
    const postRoutes = postRoutesModule.default;
    app.use('/tendytalk/api', postRoutes)
})


app.get('/tendytalk/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://tedma:1L1kech33se%21@tendytalk.ccbhle8.mongodb.net/?retryWrites=true&w=majority&appName=TendyTalk" || '', {
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