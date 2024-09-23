import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
const app=express()
const port=process.env.PORT||8080
dotenv.config()
connectDB()






app.listen(port,()=>{
    console.log(`server is runnning in ${port}`);
    
})
