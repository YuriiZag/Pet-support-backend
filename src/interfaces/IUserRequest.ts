import { Request} from "express";
type user = {
  user: string;
  email: string;
};

export interface IUserRequest extends Request {
  user: user 
}

