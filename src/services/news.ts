import { INews } from "../interfaces/INew";
import News from '../models/news.model'

export const addNews = async (body: INews) => {
  const newNew = new News(body)
  await newNew.save();
  return newNew;
};
export const getAllNews = async () => {
  const response = News.find({})
  return response;
};
