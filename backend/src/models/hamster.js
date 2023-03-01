import mongoose from "mongoos";

const hamsSchema = new mongoose.Schema({
    hamsBreed: String,
    colour: String,
    age: Number,
  });
  
  export const Hams = mongoose.model("Hamster", hamsSchema);