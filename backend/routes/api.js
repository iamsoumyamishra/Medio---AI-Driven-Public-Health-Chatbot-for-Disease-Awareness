import express, { response } from 'express';
import { chat, deleteChat } from '../ai/chat.js';
import { createNewChat } from '../ai/chat.js';
import consoleLogs from '../middleware/consoleLogs.js';


const router = express.Router();



router.use(express.json());
router.use(consoleLogs);




router.post('/create-new-chat', async (req, res) => {

    const { userId, chatId } = req.body;
    try {
        const response = await createNewChat(userId, chatId);
        res.status(200).send({ "success": true, response: response });
    } catch {
        res.status(500).send({ "success": false, error: "Internal Server Error!" })
    }

});




router.post('/chat', async (req, res) => {

    const { userId, chatId, message } = req.body;

    try {
        const response = await chat(userId, chatId, message);
        res.send({"success": true, response: response });
    } catch(error) {
        console.log(error);
        res.status(500).send({"success": false, "error": "Internal Server Error!"});
    }

})

router.post('/delete-chat', async (req, res) => {

    const {chatId} = req.body;

    try {
        deleteChat({chatId});
        res.status(200).send({"success":true, response: "Deleted"})
    } catch(error) {
        console.log(error);
        res.status(500).send({"success":false, error: "Some Error Occured!"})
        
    }
})




export default router;