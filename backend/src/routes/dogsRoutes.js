import express from "express";
import {
    getDog,
    getDogByDogBreed,
    getDogById,
    addDog,
    deleteDog,
    deleteDogById,
    updateDogAge,
    newDogValidators,
  } from "../controllers/dogsControllers.js";

  const router = express.Router();

  router.get("/", getDog);
  router.get("/search", getDogByDogBreed);
  router.get("/:id", getDogById);
  router.delete("/", deleteDog);
  router.delete("/:id", deleteDogById);
  router.put("/:id", updateDogAge);
  router.post("/", newDogValidators, addDog);
  
  export default router;