import { Request } from "express";
type user = {
  userId: string;
  email: string;
  iat: number;
};

export interface IUserRequest extends Request {
  user: user;
}
