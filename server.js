const express = require('express');
const path = require('path');
const app = express();

const authRoutesPromise = import ('./server/routes/auth.js');
const postRoutesPromise = import ('./server/routes/posts.js');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/tendytalk/favicon.ico', (req, res) => {
    res.status(204).end()
})

app.get('/tendytalk/', (req, res) => {
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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})