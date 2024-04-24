import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8},
    email: { type: String, lowercase: true }
})


userSchema.path('password').validate(function(value) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex(value);
},"Password must contain at least one uppercase and lowercase letter and number");

export default userSchema;