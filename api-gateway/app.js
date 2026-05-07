import express from "express";
import dotenv from "dotenv";
import { authProxy } from "./proxies/auth.proxy.js";
import { verifyToken } from "./middelewares/auth.middleware.js";
import { postProxy } from "./proxies/post.proxy.js";
import { followProxy } from "./proxies/follow.proxy.js";
import { messageProxy } from "./proxies/message.proxy.js";

dotenv.config();
const app = express();
app.use(express.json());


// public route

app.use("/api/auth",authProxy)


//protrected. route

app.use("/api/post",verifyToken,postProxy)


app.use("/api/follow", verifyToken, followProxy);

app.use("/api/messages", verifyToken, messageProxy);

export default app;