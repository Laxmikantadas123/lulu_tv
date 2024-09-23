import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
const app=express()
dotenv.config()
connectDB()
const port=process.env.PORT||8080





app.listen(port,()=>{
    console.log(`server is runnning in ${port}`);
    
})
