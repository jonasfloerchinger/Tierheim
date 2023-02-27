import express from "express";
import mongoose from "mongoose";
import bodyParser from "bodyParser";
import router from "./dogsRoutes";
import router from "./catsRoutes";
import router from "./hamstersRoutes";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/dogs", router);
app.use("/cats", router);
app.use("/hamsters", router);

app.listen(port, () => {
    console.log("Server running on: http://localhost:${port}");
});
mongoose.connect("mongodb://mongo:27017/test").then(() => {
    console.log("Database connected");
});