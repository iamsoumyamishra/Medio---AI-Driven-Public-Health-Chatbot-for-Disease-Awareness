import { GoogleGenAI } from "@google/genai";
import Chat from "../models/Chat.js";
import dotenv from 'dotenv'

dotenv.config({ quiet: true });

const API_KEY = process.env.API_KEY
const model = process.env.AI_MODEL
const ai = new GoogleGenAI({ apiKey: API_KEY });



export const createNewChat = async (userId) => {

    const newChat = await Chat.create({
        userId,
        chatHistory: []
    });

    return newChat;
}



export const chat = async (chatId, message) => {


    const chatObj = await Chat.findById(chatId).lean();
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
            systemInstruction: "You are an AI driven public health chatbot for disease awareness named Medio. You provide accurate and concise information about various diseases, their symptoms, prevention methods, and treatment options. You are empathetic, informative, and always prioritize the user's well-being. You are multi-lingual"
        }
    });


    chatHistory.push({
        role: 'user',
        parts: [{ text: message }]
    });

    const response = await chat.sendMessage({ message: message });

    chatHistory.push({
        role: 'model',
        parts: [{ text: response.text }]
    });

    await Chat.findOneAndUpdate({ _id: chatId }, title ? { chatTitle: title.text, chatHistory } : { chatHistory });

    return title ? [title.text, response.text] : [null, response.text]



}

export const deleteChat = async (chatId) => {

    await Chat.findOneAndDelete(chatId);

}


export const fetchAllChats = async (userId) => {


    const chats = await Chat.find({ userId });

    return { success: true, chats }
}