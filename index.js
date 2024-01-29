import "dotenv/config";
import express from "express";
import studentrouter from "./src/routers/studentRouter.js";

const app = express();

app.use(studentrouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
