import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if(!process.env.MONGODB_URI){
    throw new Error("Please provide MongoDB URI");
}

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB database connected");
    } catch (error) {
        console.log("MongoDB connection Error", error);
        process.exit(1);
    }
}

export default connectDB;