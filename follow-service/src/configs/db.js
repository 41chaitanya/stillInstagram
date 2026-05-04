import mongoose from "mongoose"
import {ENV} from "./env.js"

export const connectDB =()=>{

    try {
        mongoose.connect(ENV.MONGO_URI)
        console.log("auht db connected successfully ")
        
    } catch (error) {
        console.log("DB connection error",error.message)
        process.exit(1)
    }
}

    
