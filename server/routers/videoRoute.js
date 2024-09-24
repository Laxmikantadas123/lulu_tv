import express from "express";
const router = express.Router();
import { authontication } from "../middlewares/auth.js";
import {
  addVideo,
  updateVideo,
  getVideo,
  deleteVideo,
} from "../controllers/videoController.js";

router.post("/", authontication, addVideo);
router.put("/:id", authontication, updateVideo);
router.delete("/:id", authontication, deleteVideo);
router.get("/search/:id", authontication, getVideo);

export default router;
