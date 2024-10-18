import express , {Request,Response} from 'express'
import z from 'zod'
import { PrismaClient} from '@prisma/client'
import cors from 'cors'
import jwt,{JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

const app = express();
const prisma  = new PrismaClient();
const userSchema = z.object({
    username : z.string(),
    email : z.coerce.string().email(),
    password : z.string().min(8 , "Password must be of min 8 letters")
})

dotenv.config();
const jwt_secret_key = process.env.JWT_SECRET_KEY;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))
app.use(express.urlencoded({ extended: true }));


app.get('/' , (req,res)=>{
    res.send("Hello world");
})

app.post('/api/signin', async (req: Request, res: Response)=> {
    const { email, password } = req.body;
  
    // Validate input using Zod schema
    const inputValidation = userSchema.safeParse({ email, password });
  
    if (!inputValidation.success) {
      return res.status(400).send("Invalid email or password");
    }
  
    try {
      // Find the user by email
      const user = await prisma.user.findUnique({
        where: {
          email: email
        }
      });
  
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(400).send("Invalid Password");
      }
  
      // Generate JWT token
      const token = jwt.sign({
        id: user.id
      }, jwt_secret_key as string, { expiresIn: '1h' });
  
      // Set token as a cookie
      res.cookie("token", token, { maxAge: 60 * 60 * 1000 });
  
      return res.send("logged in");
    } catch (error) {
      return res.status(500).send("Error signing in");
    }
  });
  

app.listen(3000 , ()=>{
    console.log("app listening to port ",3000);
})