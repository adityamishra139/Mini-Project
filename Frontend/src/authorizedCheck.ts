import axios from "axios"
import { BACKEND_URL } from "./config"

export const authorizeCheck = async()=>{
    try{
        const response = await axios.get(`${BACKEND_URL}/verifyToken`,{
            withCredentials:true
        })
        if(response.status === 200)
        {
            return response.data.id;
        }
        return -1;
    }
    catch(e)
    {
        return -1;
    }
}