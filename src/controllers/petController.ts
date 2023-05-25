import { Request, Response, NextFunction } from "express";
import { addPet, deletePet} from "../services/pets";
import { IUserRequest } from "../interfaces/IUserRequest";

export const addPetCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  console.log(req.user.userId);
  
  const response = await addPet(req.body, req.user.userId);
  return res.status(201).json({ message: "Pet added", response });
};

export const deletePetCTRL = async (
  req: IUserRequest,
  res: Response,
  next: NextFunction
) => {
  const { petId } = req.params;
  const response = await deletePet(petId, req.user.userId);
  return res.status(201).json({message:'Pet deleted', response });
};
