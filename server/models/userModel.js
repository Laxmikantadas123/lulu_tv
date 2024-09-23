import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unqui: true,
  },
  password: {
    type: String,
  },
  img: {
    type: String,
  },
  subcribers: {
    type: Number,
    default: 0,
  },
  subcribedUser: {
    type: [String],
  },
  fromGoogle: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

const userModels = mongoose.model("user", userSchema);
export default userModels;
