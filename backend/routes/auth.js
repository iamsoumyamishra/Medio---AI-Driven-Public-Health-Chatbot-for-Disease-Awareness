import express, { response } from "express"


const router = express.Router();


router.post('/create-user', (res, req) => {
    res.send({success: true, response: "User Created"});
})







export default router;