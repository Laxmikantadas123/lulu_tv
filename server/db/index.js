import mongoose from "mongoose";

const connectDB= async ()=>{
  // await mongoose.connect(`mongodb+srv://laxmikantadas585:laxmi0@cluster0.9fpw3.mongodb.net/VTube`)
  await mongoose.connect(`${process.env.DB_URL}/VTube`)
  .then(()=>{
    console.log("database is created")
  })
  .catch(()=>{
    console.log("database dose not created");
    
  })
}
export default connectDB