import express from "express";
const router=express.Router()
import {updateUser,getUser,deleteUser,subscribe,unsubscribe,like,dislike} from "../controllers/userController.js"
import { authontication } from "../middlewares/auth.js";
//upadte user
router.put("/update/:id",authontication,updateUser)
//get user
router.get("/getdata/:id",getUser)
//delete user
router.delete("/delete/:id",authontication,deleteUser)
//subscribe user
router.put("/subscribe/:id",authontication,subscribe)
//unsubscribe the user
router.put("/unsubscribe/:id",authontication,unsubscribe)
//like user
router.put("/like/:videoId",authontication,like)
//dislike user
router.put("/dislike/:videoId",authontication,dislike)



export default router