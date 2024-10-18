import {Request,Response,NextFunction} from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const jwt_secret_key = process.env.JWT_SECRET_KEY;
function AuthTokenCheck (req:Request , res:Response,next:NextFunction){
    const token = req.cookies.token;
    if(!token){
        res.status(401).send("No token");
    }
    else{
        try{
        const decoded = jwt.verify(token,jwt_secret_key as string) as JwtPayload;
        res.locals.userId = decoded.id;
        next();
        }
        catch(e){
            res.status(403).send("Invalid token")
        }
    }
}
export default AuthTokenCheck;