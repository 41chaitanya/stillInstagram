import app from "./src/app.js";
import { connectDB } from "./src/configs/db.js";
import { ENV } from "./src/configs/env.js";

const startServer = async () => {
  await connectDB();

  app.listen(ENV.PORT, () => {
    console.log(
      `Server is  follow server Running on http://localhost:${ENV.PORT}`,
    );
  });
};
startServer()