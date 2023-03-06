import express from "express";
import {
    getCat,
    getCatByCatBreed,
    getCatById,
    addCat,
    newCatValidators,
  } from "../controllers/catsControllers.js";

  const router = express.Router();

  router.get("/", getCat);
  router.get("/search", getCatByCatBreed);
  router.get("/:id", getCatById);
  router.post("/", newCatValidators, addCat);

  export default router;