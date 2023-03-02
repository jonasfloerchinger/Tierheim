import express from "express";
import {
    getDog,
    getDogByDogBreed,
    getDogById,
    addDog,
    deleteDog,
    deleteDogByAge,
    newDogValidators,
  } from "../controllers/dogsControllers.js";

  const router = express.Router();

  router.get("/", getDog);
  router.get("/search", getDogByDogBreed);
  router.get("/:id", getDogById);
  router.delete("/", deleteDog);
  router.delete("/search", deleteDogByAge)
  router.post("/", newDogValidators, addDog);
  
  export default router;