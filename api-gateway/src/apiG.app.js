import express from "express";
import dotenv from "dotenv";
import { postProxy } from "./routes/apiG.post.routes.js";
import { followProxy } from "./routes/apiG.follow.routes.js";
import { messageProxy } from "./routes/apiG.message.routes.js";
import { authProxy } from "./routes/apiG.auth.routes.js";



dotenv.config();

const app = express();

app.use(express.json());

// public routes
app.use("/api/auth", authProxy);

// protected routes
app.use("/api/posts", verifyToken, postProxy);
app.use("/api/follow", verifyToken, followProxy);
app.use("/api/message", verifyToken, messageProxy);

export default app;