import express from 'express'
import { erroHandler } from './middlewares/erro.handler.middlware.js'
import postRoutes from './routers/post.route.js'

const app=express()
app.use(express.json())
app.use("/api/post",postRoutes)
app.use(erroHandler)

export default app