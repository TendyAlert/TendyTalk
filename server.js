const express = require('express');
const path = require('path');
const app = express();

const authRoutes = require('server/routes/auth.js');
const postRoutes = require('server/routes/posts.js');

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.use('/api', authRoutes)
app.use('/api', postRoutes)


const PORT = proces.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})