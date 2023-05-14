import { ConflictError, NotAuthorizedError } from "../heplers/errors";
import User from "../models/user.model"
import { IUser } from "../interfaces/IUser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import config from 'config'

const salt = config.get<string>('salt')

export const register = async (body: IUser) => {
    const {email} = body
    const emailInUse = await User.findOne({ email });
    if (emailInUse) {
      throw new ConflictError("Email in use");
    }
    const user = new User(body);
    await user.save();
    return user;
  };

type body = {
    email: string,
    password: string,
}
export const login = async (body: body) => {
    const {email, password} = body
    const user = await User.findOne({ email });
    if (!user) {
      throw new NotAuthorizedError("User not found");
    }
    
     const wrongPassword = !(await bcrypt.compare(password, user.password));
    if (wrongPassword) {
      throw new NotAuthorizedError("Email or password is wrong");
    }
  
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      salt
    );
    user.token = token;
    user.save();
  
    return { token, user };
  };