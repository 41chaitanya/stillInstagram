import mongoose from 'mongoose'
const postSchema=new mongoose.Schema({
   userId: {
      type: String, // from auth service
      required: true
    },
    caption: String,
    imageUrl: {
      type: String,
      required: true
    }
},{timestamps:true})
export default mongoose.model("Post", postSchema);