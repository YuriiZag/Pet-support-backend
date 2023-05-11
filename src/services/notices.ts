import { IUser } from "../interfaces/IUser";
import Notice from "../models/notice.model";

export const getNoticesByTitle = async (title: any) => {
  const noticesByTitle = await Notice.find({title});
  return noticesByTitle;
};

export const getNoticesByCategory = async (category: any) => {
  const getNoticesByCategory = await Notice.find({ category });
  return getNoticesByCategory;
};

export const getNoticesById = async (id: any) => {
  const noticesById = await Notice.findOne({ _id: id });
  return noticesById;
};

export const setFavouriteNotice = async (id: any, user: IUser) => {
  const noticesById = await Notice.findOneAndUpdate(
    { _id: id },
    { $set: { favourite: user._id } }
  );
  return noticesById;
};