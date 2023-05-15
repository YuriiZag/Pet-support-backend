import { IPet } from "../interfaces/IPet";
import Pet from "../models/pet.model";
import { getIdValidation } from "../heplers/validateId";

export const addPet = async (body: IPet, { user }) => {
  const newPet = await new Pet({ ...body, owner: user }).save();
  return newPet;
};

export const deletePet = async (petId: string, { user }) => {
  getIdValidation(petId);
  const response = await Pet.findOneAndDelete({ _id: petId, owner: user });
  return response;
};
