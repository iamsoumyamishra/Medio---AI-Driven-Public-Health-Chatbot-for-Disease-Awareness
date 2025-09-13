import express, { response } from "express"


const router = express.Router();


router.post('/create-user', (req, res) => {
    res.send({"success": true, "response": "User Created!"});
});

router.post('/log-in', (req, res) => {
    res.send({"success": true, "response": "User Logged In!"})
});



export default router;