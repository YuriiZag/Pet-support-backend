import Pet from "../models/pet.model";
import User from "../models/user.model";

export const getUsersPetsInfo = async (userId: string) => {
  console.log(userId);
  
  const petsInfo = await Pet.find({ owner: userId });
  const userInfo = await User.find({ _id: userId });
  const info = {
    petsInfo,
    userInfo
  }

  return info;
};
