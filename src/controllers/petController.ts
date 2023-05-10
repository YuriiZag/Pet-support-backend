import { Request, Response, NextFunction } from "express";
import { addPet, getAllPets } from "../services/pets";

export const addPetCTRL = async (req:Request, res: Response, next: NextFunction) => {
    const response = await addPet(req.body)
    return res.status(201).json({ message: "Contact Added", response });
  };


  export const getAllPetsCTRL = async (req:Request, res: Response, next: NextFunction) => {
    const response = await getAllPets()
    return res.status(201).json({response})
  }


