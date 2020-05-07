import { decode } from "jsonwebtoken";


const authHelper = ({req}) =>{
        const token = req.headers.authorization ? String(req.headers.authorization).replace('Bearer ', ''): '';
        const user = decode(token, process.env.JWT_SECRET)
        if (user) return { user };
    }


export default authHelper