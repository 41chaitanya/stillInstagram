import imagekit from "../config/imagekit.js"
import { upload } from "../middlewares/multer.upload.post.middleware.js"
import postModel from "../models/post.model.js"

export const createPostSrvice=async ({userId,caption,file}) => {
    const uploaded=await imagekit.upload({
        file:file.buffer.toString("base64"),
        fileName:Date.now()+"--"+file.originalname,
        folder:"/stillInstaPost"
    })
 

    const newPost=await postModel.create({
        userId,
        caption,
        imageUrl:uploaded.url
    })
  
    return newPost
} 