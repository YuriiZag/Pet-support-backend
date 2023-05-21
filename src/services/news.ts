import { INews } from "../interfaces/INew";
import News from '../models/news.model'

export const addNews = async (body: INews) => {
  
  const newNew = new News(body)
  await newNew.save();
  return newNew;
};
export const getNewsByTitle = async (title: string) => {
  const response = News.find({title})
  return response;
};
