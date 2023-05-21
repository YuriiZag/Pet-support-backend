import { Request} from "express";
type user = {
  _id: string;
  email: string;
};

export interface IUserRequest extends Request {
  user: user 
}

