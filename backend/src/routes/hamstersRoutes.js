import express from "express";
import {
    getHams,
    getHamsByHamsBreed,
    getHamsById,
    addHams,
    deleteHams,
    deleteHamsById,
    updateHamsAge,
    newHamsValidators,
  } from "../controllers/hamstersControllers.js";

  const router = express.Router();

  router.get("/", getHams);
  router.get("/search", getHamsByHamsBreed);
  router.get("/:id", getHamsById);
  router.delete("/", deleteHams);
  router.delete("/search", deleteHamsById);
  router.put("/:id", updateHamsAge);
  router.post("/", newHamsValidators, addHams);

  export default router;