import { Request, Response, NextFunction } from "express";
import { addPet } from "../services/pets";
export const addPetCTRL = async (req:Request, res: Response, next: NextFunction) => {
    
    const response = await addPet(req.body)
    return res.status(201).json({ message: "Contact Added", response });
  };


