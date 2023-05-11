import { IPet } from "../interfaces/IPet";
import Pet from "../models/pet.model";
import { getIdValidation } from "../heplers/validateId";

export const getAllPets = async () => {
  const allPets = await Pet.find({})
  return allPets
}
export const addPet = async (body: IPet) => {
    const newPet = new Pet(body)
    await newPet.save()
    return newPet
  };


  export const deletePet = async (petId: string) => {
    getIdValidation(petId)
    const response =  await Pet.findOneAndDelete({_id: petId})
   
    return response
  };