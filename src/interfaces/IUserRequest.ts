import { Request} from "express";
type user = {
  userId: string;
  email: string;
};

export interface IUserRequest extends Request {
  user: user 
}

