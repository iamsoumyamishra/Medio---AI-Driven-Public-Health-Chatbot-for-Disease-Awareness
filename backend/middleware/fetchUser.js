import jwt from "jsonwebtoken"
import { JWT_TOKEN } from "../index.js"

const fetchUser = async (req, res, next) => {
    
    try{
        const authToken = req.body.auth["auth-token"];

        try{

            const result = jwt.verify(authToken, JWT_TOKEN)

            req.body.userId = result.id;
            next();

        } catch {
            res.status(400).json({success: false, error: "Invalid auth-token"})
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: "Internal Server Error"});
    }
}

export default fetchUser;