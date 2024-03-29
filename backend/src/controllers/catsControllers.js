import { check, validationResult } from "express-validator";
import { Cat } from "../models/cat.js";


export const getCat=async (req,res)=> {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const cats = await Cat.find();
    res.status(200).send(cats);
};

export const getCatByCatBreed=async (req,res)=> {
    let result = await Cat.find({catBreed: req.query.catBreed});
    res.status(200).send(result);
};

export const getCatById=async (req,res)=> {
    let cat = await Cat.findById(req.params.id);
    res.status(200).send(cat);
};

export const deleteCat=async (req,res)=> {
    const cats = await Cat.deleteMany();
    res.status(204).send("Alle Katzen wurden entfernt");
};

export const deleteCatById=async (req,res)=> {
    let cat = await Cat.deleteOne({id: req.params.id});
    res.status(204).send("Katze wurde entfernt");
};

export const updateCatAge=async (req,res)=> {
    let cat = await Cat.updateOne({id: req.params.id}, {age:req.query.age});
    res.status(200).send(cat);
};

export const addCat=async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(201).json({errors: errors.array()});
    }
    const cat = new Cat({
        catBreed: req.body.catBreed,
        colour: req.body.colour,
        age: req.body.age,
      });

      cat.save(cat).then((todo) => res.status(201).send(todo));
};

export const newCatValidators = [
    check("catBreed").notEmpty().withMessage("CatBreed field required"),
    check("colour").notEmpty().withMessage("Colour field required"),
];
