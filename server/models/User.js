import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { 
        type: String, 
        required: true, 
        minlength: 8,
        validate: {
            validator: function(value) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
                return passwordRegex.test(value);
            },
            message: "Password must contain at least one uppercase and lowercase letter and a number"
        }},
    email: { type: String, lowercase: true }
}, {
    collection: "users_collection"
});


const User = mongoose.model('User', userSchema, "users_collection");

export default User;