import { Request, Response, NextFunction } from "express";
import { addPet, deletePet, getAllPets } from "../services/pets";

type user = {
  user: string;
  email: string;
};

interface UserRequest extends Request {
  user: user 
}

export const addPetCTRL = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  
  
  const response = await addPet(req.body);
  return res.status(201).json({ message: "Pet added", response });
};

export const getAllPetsCTRL = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user);
  
  const response = await getAllPets(req.user);
  return res.status(201).json({message:'Success', response });
};

export const deletePetCTRL = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { petId } = req.params;
  const response = await deletePet(petId);
  return res.status(201).json({message:'Pet deleted', response });
};
