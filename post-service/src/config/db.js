import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("post service db connected sucessfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
