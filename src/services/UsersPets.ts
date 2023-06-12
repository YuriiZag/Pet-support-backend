import Pet from "../models/pet.model";
import User from "../models/user.model";

export const getUsersPetsInfo = async (userId: string) => {
  const petsInfo = await Pet.find({ owner: userId });
  const userInfo = await User.find({ _id: userId });
  const info = {
    petsInfo,
    userInfo,
  };

  return info;
};

export const changeUserInfo = async (userId: string, body: any) => {
  console.log(body);

  const changedUser = await User.findOneAndUpdate({ _id: userId }, body);
  console.log(changedUser);
  
  return changedUser;
};
