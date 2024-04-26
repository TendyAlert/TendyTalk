import { Router } from 'express';
import Post from '../models/Post.js'


const router = Router();

router.post('/newpost', async (req, res) => {
    try {

        console.log(req.body)
        const { title, body } = req.body;
        console.log(title, body)
        const postData = { title, body, upvotes: 0 }
        console.log(postData)
        
        console.log('creating new post')
        const post = new Post(postData);
        await post.save();
        console.log("post saved")

        res.status(201).json({ message: "Succesfully created a new post"})

    } catch (error) {
        console.error({ error: error.message })
        res.status(500).json({ error: error.message, "message": "Error saving new post" })
    }

})


export default router;