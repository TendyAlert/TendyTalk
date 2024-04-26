import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

import db from '../db/connection.js'


//May not need this here but will need when getting forumposts by id
/*import { ObjectId} from 'mongodb';
router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });
  router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    */

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const userData = { username, password };
        if (email) {
            userData.email = email
        }

        const user = new User(userData);
        await user.save();

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
        if (user) { console.log("User found: ", user)}
        if(!user) { return res.status(401).json({message: "Invalid username or password"}); }
        
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) { return res.status(401).json({message: "Invalid username or password"}); }

        res.status(200).json({ message: "Login Succesful" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
