import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandel from "../utils/asyncHandler.js";
import Video from "../models/videoModel.js";

export const addVideo = asyncHandel(async (req, res) => {
  try {
    const newVideo = new Video({ userId: req.user.id, ...req.body });
    console.log(newVideo);
    const savedVideo = await newVideo.save();
    res.json(ApiResponse(201, savedVideo, "video is sucessfuly save"));
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const updateVideo = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const getVideo = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const deleteVideo = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});
