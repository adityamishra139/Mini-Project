import axios from "axios"
import { BACKEND_URL } from "./config"

export const authorizeCheck = async()=>{
    try{
        const response = await axios.get(`${BACKEND_URL}/verifyToken`,{
            withCredentials:true
        })
        if(response.status === 200)
        {
            return true;
        }
        return false;
    }
    catch(e)
    {
        return false;
    }
}