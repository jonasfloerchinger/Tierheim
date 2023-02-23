import { check, validationResult } from "express-validator";
import { Hams } from "../models/hamster.js"; 


export const getHams=async (req,res)=> {
    const hams = await Hams.find();
    res.status(200).send(hams);
};

export const getHamsByHamsBreed=async (req,res)=> {
    let result = await Hams.find({hamsBreed: req.query.hamsBreed});
    res.status(200).send(result);
};

export const getHamsById=async (req,res)=> {
    let hams = await Hams.findById(req.params.id);
    res.status(200).send(hams);
};

export const addHams=async (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const hams = new Hams({
        hamsBreed: req.body.hamsBreed,
        colour: req.body.colour,
        age: req.body.age,
      });

      hams.save(hams).then((todo) => res.status(201).send(todo));
};

export const newHamsValidators = [
    check("hamsBreed").notEmpty().withMessage("HamsBreed field required"),
    check("colour").notEmpty().withMessage("Colour field required"),
];
