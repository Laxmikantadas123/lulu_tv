import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError.js"
export const authontication= async (req,res,next)=>{
    try {
        const token=req.cookies.access_token
    if(!token){
        throw ApiError(401,"You are not authentication")
    }
    jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
        if(err){
            throw ApiError(403,"token is not valid")
        }
        req.user=user
        next()
    })
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    
}