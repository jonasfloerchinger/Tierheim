import express from "express";
import {
    getDog,
    getDogByDogBreed,
    getDogById,
    addDog,
    deleteDog,
    newDogValidators,
  } from "../controllers/dogsControllers.js";

  const router = express.Router();

  router.get("/", getDog);
  router.get("/search", getDogByDogBreed);
  router.get("/:id", getDogById);
  router.delete("/", deleteDog);
  router.post("/", newDogValidators, addDog);
  
  export default router;