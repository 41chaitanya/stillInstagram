import express from 'express'
import { upload } from '../middlewares/multer.upload.post.middleware.js'
import { createPost } from '../controller/post.controller.js'

const router=express.Router()

router.post("/",upload.single("image"),createPost)

export default router