import express from "express";
import bodyParser from "bodyParser";
import router from "./dogsRoutes";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/dogs", router);

app.listen(port, () => {
    console.log("Server running on: http://localhost:${port}");
});