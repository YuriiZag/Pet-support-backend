import { IPet } from "../interfaces/IPet";
import Pet from "../models/pet.model";
import { getIdValidation } from "../heplers/validateId";

export const addPet = async (body: IPet, userId: string) => {
  const newPet = await new Pet({ ...body, owner: userId }).save();
  return newPet;
};

export const deletePet = async (petId: string, userId: string) => {
  getIdValidation(petId);
  const response = await Pet.findOneAndDelete({ _id: petId, owner: userId });
  return response;
};
