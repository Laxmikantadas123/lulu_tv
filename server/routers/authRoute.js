import express from "express";
const router=express.Router()
import {signUp,signIn} from "../controllers/authController.js"

router.post("/signup",signUp)
router.post("/signin",signIn)
// router.post("/google")




export default router