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
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'User'
    },
    chatId:{
        type: String,
        unique: true,
        required: true,
    },
    chatTitle:{
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