import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const saltRounds = 10;


const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
            if(!passwordRegex.test(password)) {
                return res.status(400).json({ message: "Password must cotain a capital and lowcase letter and a number"})
            }
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const userData = { username, password: hashedPassword };
        if (email) {
            userData.email = email
        }
        const user = new User(userData);
        try {
            await user.save();
        }
        catch (error) {
            res.status(500).json({ error: error.message, "message": "Error saving new user" })
        }
        

        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if(!user) { return res.status(401).json({message: "Invalid username or password"}); }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) { return res.status(401).json({message: "Invalid username or password"}); }
        res.status(200).json({ message: "Login Succesful", token: [username, user._id] });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
