import { INotice } from "./../interfaces/INotice";
import { IRequestOwner} from "../interfaces/IRequestOwner";
import Notice from "../models/notice.model";
import User from "../models/user.model";


export const addNotice = async (body: INotice, filePath: string) => {
  console.log(filePath);
  
  const newNotice = new Notice({ ...body, avatar: filePath});
  await newNotice.save();
  return newNotice;
};

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

export const setFavouriteNotice = async (
  id: string | undefined,
  user: IRequestOwner
) => {
  const noticeById = await Notice.findOne(
    { _id: id }
  );
  await User.findOneAndUpdate({ $set: { favourite: noticeById?._id } });
  return noticeById;
};

export const getPrivatNotices = async (user: IRequestOwner) => {
  const noticesById = await Notice.find({ owner: user.userId });
  return noticesById;
};

export const getPrivatFavouriteNotices = async (user: IRequestOwner) => {
  const foundUser: any = await User.find({ _id: user.userId });
  const noticesById = await Notice.find({
    _id: { $all: [...foundUser?.favourite] },
  });
  return noticesById;
};

export const deleteNoticesById = async (id: string | undefined) => {
  const noticesById = await Notice.findOneAndDelete({ _id: id });
  return noticesById;
};
