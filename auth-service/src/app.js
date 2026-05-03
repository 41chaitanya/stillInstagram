import express from "express";
import auth_router from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());


app.use("/api/auth",auth_router)
app.use(errorHandler);
export default app;
