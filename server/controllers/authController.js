import User from "../models/userModel.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandel from "../utils/asyncHandler.js"
import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"
// ------------------------------create user-----------------------
export const signUp=asyncHandel(async (req,res)=>{
try {
    const {name,email,password}=req.body
    if(!name||!email||!password){
        throw ApiError(400,"Fill the all field")
    }
    const user=await User.findOne({email})
    if(user){
        throw ApiError(400,"User Already exist")
    }
   const hashPassword= await bcrypt.hash(req.body.password,10)
   const createUser=new User({...req.body,password:hashPassword})
   await createUser.save()
   res.json(ApiResponse(201,createUser,"User is created"))
} catch (error) {
    throw ApiError(error.code,error.message)
}
})

// ------------------------------login --------------------------
export const signIn=asyncHandel(async (req,res)=>{
 try {
    const{email,password}=req.body
    if(!email||!password){
        throw ApiError(404,"field are require for singin")
    }
    const user=await User.findOne({email})
    if(!user){
        throw ApiError(404,"User is not Found")
    }
    const isCorrect= bcrypt.compare(req.body.password,user.password)
    if(!isCorrect){
        throw ApiError(404,"User is not Found")
    }
    const token=jwt.sign({id:user._id},process.env.JWT_KEY)
    res.cookie("access_token",token,{
        httpOnly:true
    }).json(ApiResponse(200,user,"Successfuly login"))
    // res.json(ApiResponse(200,user,"User has been signin"))
 } catch (error) {
    throw ApiError(error.code,error.message)
 }
})



