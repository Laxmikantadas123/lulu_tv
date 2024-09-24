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
    const video = await Video.findById(req.params.id);
    if (!video) {
      throw ApiError(404, "Video not found");
    }
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      throw ApiError(403, "You can update only your video!");
    }
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const getVideo = asyncHandel(async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    throw ApiError(err.code, err.message);
  }
});

export const deleteVideo = asyncHandel(async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      throw ApiError(404, "Video not found");
    }
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been deleted.");
    } else {
      throw ApiError(403, "You can update only your video!");
    }
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const addView = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const trend = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const random = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

export const sub = asyncHandel(async (req, res) => {
  try {
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});
