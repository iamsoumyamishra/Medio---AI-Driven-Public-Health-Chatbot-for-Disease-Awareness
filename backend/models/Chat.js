import mongoose from "mongoose";


const chatHistorySchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user', 'model'],
    },
    parts: [{
        text: {
            type: String,
        }
    }]

})

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    chatTitle: {
        type: String,
        unique: false,
        required: false,
        default: "New Chat"
    },
    chatHistory: [chatHistorySchema],
    timeStamp: {
        type: Date,
        default: Date.now(),
        required: true,
    }
})

export default mongoose.model("Chats", chatSchema)