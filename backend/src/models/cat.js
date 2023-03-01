import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
    catBreed: String,
    colour: String,
    age: Number,
  });
  
  export const Cat = mongoose.model("Cat", catSchema);