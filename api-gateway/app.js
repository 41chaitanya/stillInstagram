import express from "express";
import dotenv from "dotenv";
import { authProxy } from "./proxies/auth.proxy.js";
import { verifyToken } from "./middelewares/auth.middleware.js";
import { postProxy } from "./proxies/post.proxy.js";
import { followProxy } from "./proxies/follow.proxy.js";
import { messageProxy } from "./proxies/message.proxy.js";

dotenv.config();
const app = express();

// Test middleware
app.use((req, res, next) => {
    console.log('Request:', req.method, req.url);
    next();
});

// ALL proxy routes FIRST - NO express.json() before any proxy
app.use("/api/auth", authProxy)
app.use("/api/post", verifyToken, postProxy)
app.use("/api/follow", verifyToken, followProxy);
app.use("/api/messages", verifyToken, messageProxy);

// express.json() at the end (optional - only if you have non-proxy routes)
// app.use(express.json());

export default app;