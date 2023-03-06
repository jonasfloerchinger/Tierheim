import { check, validationResult } from "express-validator";

const dogs =[
    {
        id: 0,
        dogBreed: "akita ino",
        colour: "orange",
        age: 2,
    },
    {
        id: 1,
        dogBreed: "schäferhund",
        colour: "braun",
        age: 5,
    },
];

export const getDogs=(req,res)=> {
    res.status(200).send(dogs);
};

export const findDogs=(req,res)=> {
    let result = dogs.filter((dog)=>dog.dogBreed == req.query.dogBreed);
    res.status(200).send(result);
};

export const findDogsById=(req,res)=> {
    let dog = dogs.find((b)=> b.id == req.params.id);
    res.status(200).send(dog);
};

export const addDog=(req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    let dog = req.body;
    dogs.push(dog);
    res.status(201).send(`Added ${dog.dogBreed} to dog collection`);
};

export const newDogValidators = [
    check("dogBreed").notEmpty().withMessage("DogBreed field required"),
    check("colour").notEmpty().withMessage("Colour field required"),
];

