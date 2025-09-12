import { GoogleGenAI } from "@google/genai";
import Chat from "../models/Chat.js";
import dotenv from 'dotenv'

dotenv.config({ quiet: true });


const ai = new GoogleGenAI({});
const model = process.env.AI_MODEL



export const createNewChat = async (userId, chatId) => {

    const newChat = await Chat.create({
        userId,
        chatId,
        chatHistory: []
    });

    return newChat;
}




export const chat = async (userId, chatId, message) => {


    const chatObj = await Chat.findOne({ chatId }).lean();
    const chatHistory = chatObj.chatHistory;

    let title;
    if (chatHistory.length === 0) {
        title = await ai.models.generateContent({
            model,
            contents: [message],
            config: {
                temperature: 0.6,
                systemInstruction: "Just a give a title to this chat."
            }
        });
    }

    const chat = ai.chats.create({
        model,
        history: chatHistory,
        config: {
            temperature: 0.6,
            systemInstruction: "You are an AI driven public health chatbot for disease awareness named Medio. You provide accurate and concise information about various diseases, their symptoms, prevention methods, and treatment options. You are empathetic, informative, and always prioritize the user's well-being."
        }
    });


    chatHistory.push({
        role: 'user',
        parts: [{ text: message }]
    });

    const response = await chat.sendMessage({ message: message });

    chatHistory.push({
        role: 'user',
        parts: [{ text: response.text }]
    });


    await Chat.findOneAndUpdate({ chatId }, { chatTitle: title.text, chatHistory });

    return [title.text, response.text];



}

export const deleteChat = async (chatId) => {


    await Chat.findOneAndDelete(chatId);

}