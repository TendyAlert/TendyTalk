const express = require('express');
const path = require('path');
const app = express();

const authRoutes = require('./server/routes/auth.js');
const postRoutes = require('./server/routes/posts.js');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/favicon.ico', (req, res) => {
    res.status(204).end()
})

app.get('/', (req, res) => {
    res.status(204).end()
})

app.use('/api', authRoutes)
app.use('/api', postRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})