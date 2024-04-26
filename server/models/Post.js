import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: {type: String, required: true },
    body: {type: String, required: true },
    comments: {type: Array},
    upvotes: {type: Number}
})


const Post = mongoose.model('Post', postSchema, "posts_collection");


export default Post;