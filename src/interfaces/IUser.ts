export interface IUser {
  _id: string;
  avatar?: string;
  email: string;
  password: string;
  name: string;
  birthday: string;
  city: string;
  phone: string;
  pets?: string[];
  favourite?: [];
  token: string;
}
