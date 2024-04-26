import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, lowercase: true }
}, {
    collection: "users_collection"
});


const User = mongoose.model('User', userSchema, "users_collection");

export default User;