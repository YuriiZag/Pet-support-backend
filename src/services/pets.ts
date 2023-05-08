import { IPet } from "../interfaces/IPet";
import Pet from "../models/pet.model";
export const addPet = async (body: IPet) => {
    const newPet = new Pet(body)
    await newPet.save()
    return newPet
  };