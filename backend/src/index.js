import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dogrouter from "./routes/dogsRoutes.js";
import catrouter from "./routes/catsRoutes.js";
import hamsterrouter from "./routes/hamstersRoutes.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/dogs", dogrouter);
app.use("/cats", catrouter);
app.use("/hamsters", hamsterrouter);

app.listen(port, () => {
    console.log("Server running on: http://localhost:${port}");
});
mongoose.connect("mongodb://mongo:27017/test").then(() => {
    console.log("Database connected");
});