import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"
import auth from "./routers/authRoute.js"
import userRoute from "./routers/userRoute.js";
import videoRoute from "./routers/videoRoute.js"
// import commentRoute from "./routers/commentRoute.js"
// import authRoute from "./routers/authRoute.js"
const app=express()
const port=process.env.PORT||8080
dotenv.config()
connectDB()
app.use(cookieParser())
app.use(morgan())
app.use(cors())
app.use(express.json())

// ---------------------------routes------------------
app.use("/auth",auth)
app.use("/user",userRoute)
app.use("/video",videoRoute)
// app.use("/comment",commentRoute)






app.listen(port,()=>{
    console.log(`server is runnning in ${port}`);
    
})
