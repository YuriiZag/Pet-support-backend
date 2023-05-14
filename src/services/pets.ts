import { IPet } from "../interfaces/IPet";
import Pet from "../models/pet.model";
import { getIdValidation } from "../heplers/validateId";
import User from "../models/user.model";

export const getAllPets = async ({user}) => {
  const currentUser = await User.find({_id: user})
  console.log(currentUser);
  
  const allPets = await Pet.find({});
  return allPets;
};
export const addPet = async (body: IPet) => {
  const newPet = new Pet(body);
  await newPet.save();
  return newPet;
};

export const deletePet = async (petId: string) => {
  getIdValidation(petId);
  const response = await Pet.findOneAndDelete({ _id: petId });

  return response;
};
