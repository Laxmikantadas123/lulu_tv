import User from "../models/userModel.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandel from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";

// ------------------update--------------
export const updateUser = asyncHandel(async (req, res) => {
  try {
    const _id = req.params.id;
    if (!(_id === req.user.id)) {
      throw ApiError(403, "You can update only your account");
    }
    if (req.body.password) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashPassword;
    }
    const userUpadate = await User.findByIdAndUpdate(
      _id,
      {
        $set: req.body,
      },
      {},
      { new: true }
    );
    res.json(ApiResponse(200, userUpadate, "User has been updated"));
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

//-------------------get--------------
export const getUser = asyncHandel(async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id) {
      throw ApiError(400, "Id is not valid");
    }
    const user = await User.findById(_id);
    if (!user) {
      throw ApiError(404, "User is not found");
    }
    res.json(ApiResponse(200, user, "User are get successfuly"));
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

//-------------------delete--------------
export const deleteUser = asyncHandel(async (req, res) => {
  try {
    const _id = req.params.id;
    if (!_id) {
      throw ApiError(400, "Id is not valided");
    }
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      throw ApiError(404, "User Not Found");
    }
    res.json(ApiResponse(200, user, "User has been successfuly deleted"));
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

//-------------------subscribe------------
export const subscribe = asyncHandel(async (req, res) => {
  try {
    const sub = await User.findById(req.user.id, {
      $push: { subcribedUser: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subcribers: 1 },
    });
    res.json(ApiResponse(200, sub, "successfuly Subcribed"));
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

//-------------------unsubscribe----------
export const unsubscribe = asyncHandel(async (req, res) => {
  try {
    const sub = await User.findById(req.user.id, {
      $pull: { subcribedUser: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subcribers: -1 },
    });
    res.json(ApiResponse(200, sub, "successfuly Subcribed"));
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

//-------------------like------------
export const like = asyncHandel(async (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});

//-------------------dislike--------------------
export const dislike = asyncHandel(async (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    throw ApiError(error.code, error.message);
  }
});
