import { Router } from 'express';
import Post from '../models/Post.js'


const router = Router();

router.post('/newpost', async (req, res) => {
    try {
        const { title, body } = req.body;
        const postData = { title, body, upvotes: 0, comments: [] }
        
        const post = new Post(postData);
        await post.save();

        res.status(201).json({ message: "Succesfully created a new post"})

    } catch (error) {
        console.error({ error: error.message })
        res.status(500).json({ error: error.message, "message": "Error saving new post" })
    }

})
router.post('/updatepost', async (req,res) => {
    try {
        const { id, username, comment } = req.body;
        const post = await Post.findById(id);
        if(!post) {
            return res.status(404).json({error: "Post not found"})
        }
        post.comments.push({username: username, comment: comment});
        await post.save();
        res.status(200).json({message: "Comments updated successfully"})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
router.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();

        res.status(200).json({ posts })
    }
    catch(error) {
        console.error({ error: error.message })
        res.status(500).json({ error: error.message, message: "Error getting posts"})
    }
    
})


export default router;