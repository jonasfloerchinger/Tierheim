import express from "express";
import {
    getDog,
    getDogByDogBreed,
    getDogById,
    addDog,
    newDogValidators,
  } from "../controllers/dogsControllers.js";

  const router = express.Router();

  router.get("/", getDog);
  router.get("/search", getDogByDogBreed);
  router.get("/:id", getDogById);
  router.post("/", newDogValidators, addDog);

  export default router;