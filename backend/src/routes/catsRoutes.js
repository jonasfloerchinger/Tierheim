import express from "express";
import {
    getCat,
    getCatByCatBreed,
    getCatById,
    addCat,
    deleteCat,
    newCatValidators,
  } from "../controllers/catsControllers.js";

  const router = express.Router();

  router.get("/", getCat);
  router.get("/search", getCatByCatBreed);
  router.get("/:id", getCatById);
  router.delete("/", deleteCat);
  router.post("/", newCatValidators, addCat);

  export default router;