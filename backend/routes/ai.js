import express, { response } from 'express';
import { chat, deleteChat, fetchAllChats } from '../ai/chat.js';
import { createNewChat } from '../ai/chat.js';
import consoleLogs from '../middleware/consoleLogs.js';
import fetchUser from '../middleware/fetchUser.js';


const router = express.Router();


router.use(express.json());
router.use(consoleLogs);



router.post('/create-new-chat', fetchUser, async (req, res) => {

    const { userId } = req.body;
    try {
        const response = await createNewChat(userId);
        res.status(200).json({ success: true, response: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Internal Server Error!" })
    }

});



router.post('/chat', fetchUser, async (req, res) => {

    const { chatId, message } = req.body;

    try {
        const response = await chat(chatId, message);
        res.json({ success: true, response: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, "error": "Internal Server Error!" });
    }

})

router.post('/delete-chat', fetchUser, async (req, res) => {

    const { chatId } = req.body;

    try {
        deleteChat({ _id: chatId });
        res.status(200).json({ success: true, response: "Deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Some Error Occured!" });

    }
});

router.post('/fetch-chats', fetchUser, async (req, res) => {
    try {
        const chats = await fetchAllChats(req.body.userId);
        return res.json(chats);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Problem" })
    }
})




export default router;