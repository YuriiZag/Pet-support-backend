import { INews } from "../interfaces/INew";
import News from '../models/news.model'

export const getNews = async () => {
  const news = News.find({})
  return news;
};
export const getNewsByTitle = async (title: string) => {
  let normalizedTitle:string = '';
  if (title !== undefined) {
    if (title.includes('-')) {
       normalizedTitle = title.trim().split("-").join(" "); 
    }
  }
  console.log(normalizedTitle);
  
  const response = await News.find({
    title: normalizedTitle
  });

  return response;
};
