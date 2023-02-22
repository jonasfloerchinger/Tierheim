import express from "express";
import { getDog, getDogByDogBreed, getDogById } from "../controllers/dogsControllers.js";
import {
    getDog,
    getDogByDogBreed,
    getDogById,
    addDog,
    newDogValidators,
  } from "./dogsControllers.js";

  const router = express.Router();

  router.get("/", getDog);
  router.get("/search", getDogByDogBreed);
  router.get("/:id", getDogById);
  router.post("/", newDogValidators, addDog);

  export default router;