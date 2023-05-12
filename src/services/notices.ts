import { IUser } from "../interfaces/IUserRequest";
import Notice from "../models/notice.model";

export const getNoticesByTitle = async (title: string | undefined) => {
  const noticesByTitle = await Notice.find({ title });
  return noticesByTitle;
};

export const getNoticesByCategory = async (category: string | undefined) => {
  const getNoticesByCategory = await Notice.find({ category });
  return getNoticesByCategory;
};

export const getNoticesById = async (id: string | undefined) => {
  const noticesById = await Notice.findOne({ _id: id });
  return noticesById;
};

export const setFavouriteNotice = async (id: string | undefined, user: IUser) => {
  const noticesById = await Notice.findOneAndUpdate(
    { _id: id },
    { $set: { favourite: user._id } }
  );
  return noticesById;
};

export const getPrivatNotices = async (
  user: IUser
) => {
  const noticesById = await Notice.find(
    { owner: user._id }
  );
  return noticesById;
};

export const getPrivatFavouriteNotices = async (user: IUser) => {
  const noticesById = await Notice.find({ _id: { $all: [...user.favourite] } });
  return noticesById;
};

export const deleteNoticesById = async (id: string | undefined) => {
  const noticesById = await Notice.findOneAndDelete({ _id: id });
  return noticesById;
};