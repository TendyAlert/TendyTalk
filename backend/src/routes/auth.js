const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User')


router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.post('/login/', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user) { return res.status(401).json({message: "Invalid username or password"}); }
        
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) { return res.status(401).json({message: "Invalid username or password"}); }

        res.status(200).json({ message: "Login Succesful" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
