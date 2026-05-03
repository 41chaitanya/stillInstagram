import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    mongoose.connect(ENV.MONGO_URI);
    console.log("post service db connected sucessfully");
  } catch (error) {
    console.error(err);
    process.exit(1);
  }
};
