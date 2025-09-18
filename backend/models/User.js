import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female", "Other"]
        },
        password: {
            type: String,
            required: true,
        }
    }
);

export default mongoose.model("User", userSchema);