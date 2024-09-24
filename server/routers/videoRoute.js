import express from "express";
const router = express.Router();
import { authontication } from "../middlewares/auth.js";
import {
  addVideo,
  updateVideo,
  getVideo,
  deleteVideo,
  addView,
  trend,
  random,
  sub
} from "../controllers/videoController.js";

router.post("/", authontication, addVideo);
router.put("/:id", authontication, updateVideo);
router.delete("/:id", authontication, deleteVideo);
router.get("/search/:id", authontication, getVideo);
router.put("/view/:id",addView)
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub",sub)
export default router;
