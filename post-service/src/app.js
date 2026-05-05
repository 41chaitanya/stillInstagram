import express from 'express'
import { errorHandler } from './middlewares/errorHandler.middleware.js'
import postRoutes from './routers/post.route.js'

const app=express()
app.use(express.json())
app.use("/api/post",postRoutes)
app.use(errorHandler)

export default app