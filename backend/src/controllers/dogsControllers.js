import { check, validationResult } from "express-validator";
import { Dog } from "../models/dog.js";


export const getDog=async (req,res)=> {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const dogs = await Dog.find();
    res.status(200).send(dogs);
};

export const getDogByDogBreed=async (req,res)=> {
    let result = await Dog.find({dogBreed: req.query.dogBreed});
    res.status(200).send(result);
};

export const getDogById=async (req,res)=> {
    let dog = await Dog.findById(req.params.id);
    res.status(200).send(dog);
};

export const deleteDog=async (req,res)=> {
    const dogs = await Dog.deleteMany();
    res.status(204).send("Alle Hunde wurden entfernt");
};

export const deleteDogById=async (req,res)=> {
    let dog = await Dog.deleteOne({id: req.params.id});
    res.status(204).send("Hund wurde entfernt");
};

export const updateDogAge=async (req,res)=> {
    let dog = await Dog.updateOne({id: req.params.id}, {age:req.query.age});
    res.status(200).send(dog);
};

export const addDog=async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(201).json({errors: errors.array()});
    }
    const dog = new Dog({
        dogBreed: req.body.dogBreed,
        colour: req.body.colour,
        age: req.body.age,
      });

      dog.save(dog).then((todo) => res.status(201).send(todo));
};

export const newDogValidators = [
    check("dogBreed").notEmpty().withMessage("DogBreed field required"),
    check("colour").notEmpty().withMessage("Colour field required"),
];

