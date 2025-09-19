import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../index.js";
import cors from 'cors'
import consoleLogs from "../middleware/consoleLogs.js";



const router = express.Router();

router.use(cors());
router.use(consoleLogs);
router.use(express.json());


router.post('/create-user', [
    body('username').isString().withMessage("the username must be a string").isLength({ min: 3, max: 100 }).withMessage("the length of the username should be 3 to 100"),
    body('email').isEmail().withMessage("the email is invalid").isLength({ min: 3, max: 100 }),
    body('address').isString().withMessage("the email is invalid").isLength({ min: 5, max: 300 }),
    body('gender').isString().withMessage("the email is invalid").isIn(["Male", "Female", "Other"]).withMessage("Gender must be Male, Female and Other"),
    body('password').isString().isLength({ min: 8, max: 16 }).withMessage("length of the password should be 8 to 16")
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, error: errors.array()[0].msg });
    }

    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ success: false, error: "User already Exist" })
        }


        let hashSalt = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, hashSalt);

        const newUser = await User.create({
            username: req.body.username,
            address: req.body.address,
            gender: req.body.gender,
            email: req.body.email,
            password: hashedPassword
        });


        const authToken = jwt.sign({ id: newUser.id }, JWT_TOKEN);


        return res.json({
            success: true, auth: {
                userId: newUser.id,
                username: newUser.username,
                email: newUser.email,
                address: newUser.address,
                gender: newUser.gender,
                'auth-token': authToken
            }
        });
    } catch (error) {

        console.log(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });

    }

});


router.post('/log-in', [
    body('email').isEmail().withMessage("the email is invalid").isLength({ min: 3, max: 100 }),
    body('password').isString().isLength({ min: 8, max: 16 }).withMessage("length of the password should be 8 to 16")
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.json({ success: false, error: errors.array()[0].message })
    }

    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.json({ success: false, error: "user does not exist" })
        }

        const result = await bcrypt.compare(req.body.password, user.password);
        if (!result) {
            return res.status(400).json({ success: false, error: "Incorrect Password" });
        }

        const authToken = jwt.sign({ id: user.id }, JWT_TOKEN);

        return res.json({
            success: true,
            auth: {
                userId: user.id,
                username: user.username,
                email: user.email,
                'auth-token': authToken
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }


});


router.post('/get-user', async (req, res) => {

    const authToken = req.body.auth["auth-token"];

    if (!authToken) {
        return res.status(200).json({ success: false, response: "Log in first" });
    }

    try {

        let id = null;
        try {
            id = jwt.verify(authToken, JWT_TOKEN);
            id = id["id"];
        } catch (error) {
            console.log(error)
            return res.status(400).json({ success: false, error: "Invalid auth-token" });
        }
        const user = await User.findById(id).select("-password").lean();

        res.json({ success: true, auth: user });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, error: "Internal Server Error" })
    }

})




export default router;