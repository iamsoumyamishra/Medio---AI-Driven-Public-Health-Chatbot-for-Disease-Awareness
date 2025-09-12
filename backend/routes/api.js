import express, { response } from 'express';
import { chat, deleteChat } from '../ai/chat.js';
import { createNewChat } from '../ai/chat.js';
import consoleLogs from '../middleware/consoleLogs.js';


const routes = express.Router();



routes.use(express.json());
routes.use(consoleLogs);




routes.post('/create-new-chat', async (req, res) => {

    const { userId, chatId } = req.body;
    try {
        const response = await createNewChat(userId, chatId);
        res.status(200).send({ "success": true, response: response });
    } catch {
        res.status(500).send({ "success": false, error: "Internal Server Error!" })
    }

});




routes.post('/chat', async (req, res) => {

    const { userId, chatId, message } = req.body;

    try {
        const response = await chat(userId, chatId, message);
        res.send({"success": true, response: response });
    } catch(error) {
        console.log(error);
        res.status(500).send({"success": false, "error": "Internal Server Error!"});
    }

})

routes.post('/delete-chat', async (req, res) => {

    const chatId = req.body.chatId;

    try {
        deleteChat({chatId});
        res.status(200).send({"success":true, response: "Deleted"})
    } catch(error) {
        console.log(error);
        res.status(500).send({"success":False, error: "Some Error Occured!"})
        
    }
})




export default routes;