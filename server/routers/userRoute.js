import express from "express";
const router=express.Router()
import {updateUser,getUser,deleteUser,subscribe,unsubscribe,like,dislike} from "../controllers/userController.js"

//upadte user
router.put("/update/:id",updateUser)
//get user
router.get("/getdata/:id",getUser)
//delete user
router.delete("/delete/:id",deleteUser)
//subscribe user
router.put("/subscribe/:id",subscribe)
//unsubscribe the user
router.put("/unsubscribe/:id",unsubscribe)
//like user
router.put("/like/:videoId",like)
//dislike user
router.put("/dislike/:videoId",dislike)



export default router