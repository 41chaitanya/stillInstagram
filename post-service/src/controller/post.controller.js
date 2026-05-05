import { asynHandler } from "../middlewares/asynHandler.middleware.js";
import { createPostSrvice } from "../service/post.service.js";

export const createPost = asynHandler(async (req, res) => {
  const { caption } = req.body;

  const userId = req.userId || Date.now().toString; //custom header ha abhi ke liye dummy ha baad me hum asli user pr aajye ge
  if (!req.file) {
    throw new Error("Image is required");
  }
  const post =  await createPostSrvice({ userId, caption, file: req.file });
  res.status(201).json({
    success: true,
    post,
  });
});
