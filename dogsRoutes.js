import express from "express";
import {
    findDogs,
    findDogsById,
    getDogs,
    addDog,
    newDogValidators,
  } from "./dogsControllers.js";

  const router = express.Router();

  router.get("/", getDogs);
  router.get("/search", findDogs);
  router.get("/:id", findDogsById);
  router.post("/", newDogValidators, addDog);

  export default router;