import { Request} from "express";

export interface IUserRequest extends Request {
  user: {
    _id: string;
    avatar: string;
    email: string;
    birthday: string;
    phone: string;
    city: string;
    pets: string;
    favourite: string[];
  };
}

export interface IUser {
  _id: string;
  avatar: string;
  email: string;
  birthday: string;
  phone: string;
  city: string;
  pets: string;
  favourite: string[];
}
