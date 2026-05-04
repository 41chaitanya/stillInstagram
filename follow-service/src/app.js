import express from "express";
import followRoutes from "./routes/follow.routes.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/follow", followRoutes);
app.use(errorHandler);
export default app;
