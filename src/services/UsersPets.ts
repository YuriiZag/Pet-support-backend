import Pet from "../models/pet.model";
import User from "../models/user.model";

export const getUsersPetsInfo = async ({ user }) => {
  const petsInfo = await Pet.find({ owner: user });
  const userInfo = await User.find({ _id: user });
  const info = {
    petsInfo,
    userInfo
  }

  return info;
};
