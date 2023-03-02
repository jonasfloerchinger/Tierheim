import express from "express";
import {
    getHams,
    getHamsByHamsBreed,
    getHamsById,
    addHams,
    deleteHams,
    newHamsValidators,
  } from "../controllers/hamstersControllers.js";

  const router = express.Router();

  router.get("/", getHams);
  router.get("/search", getHamsByHamsBreed);
  router.get("/:id", getHamsById);
  router.get("/", deleteHams);
  router.post("/", newHamsValidators, addHams);

  export default router;