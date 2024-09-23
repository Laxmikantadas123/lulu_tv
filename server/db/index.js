import mongoose from "mongoose";

const connectDB= async ()=>{
  await mongoose.connect('mongodb://localhost:27017/Vtube')
  .then(()=>{
    console.log("database is created")
  })
  .catch(()=>{
    console.log("database dose not created");
    
  })
}
export default connectDB