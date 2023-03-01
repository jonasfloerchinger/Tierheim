import mongoose from "mongoos";

const dogSchema = new mongoose.Schema({
    dogBreed: String,
    colour: String,
    age: Number,
  });
  
  export const Dog = mongoose.model("Dog", dogSchema);