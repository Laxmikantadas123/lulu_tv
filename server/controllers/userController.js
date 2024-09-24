import User from "../models/userModel.js"
import ApiError from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import asyncHandel from "../utils/asyncHandler.js"


// ------------------update--------------
export const updateUser=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    
//-------------------get--------------
export const getUser=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    
//-------------------delete--------------
export const deleteUser=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    
//-------------------subscribe------------
export const subscribe=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    
//-------------------unsubscribe----------
export const unsubscribe=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    
//-------------------like------------
export const like=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    
//-------------------dislike--------------------
export const dislike=asyncHandel(async (req,res)=>{
    try {
        const {}=req.body
    } catch (error) {
        throw ApiError(error.code,error.message)
    }
    })
    





