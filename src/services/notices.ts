import { INotice } from "./../interfaces/INotice";
import { IRequestOwner} from "../interfaces/IRequestOwner";
import Notice from "../models/notice.model";
import User from "../models/user.model";
import { ConflictError } from "../heplers/errors";


export const addNotice = async (body: INotice, filePath: string, user: IRequestOwner) => {
  const newNotice = new Notice({ ...body, avatar: filePath, owner: user.userId});
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
  const foundUser: any = await User.findOne({ _id: user.userId });
  foundUser.favourite.map(noticeId => {
    if (noticeId === id) {
      throw new ConflictError(`notice with id ${id} already in list`)
    }
  })
  await User.findOneAndUpdate(
    { _id: user.userId },
    { $set: { favourite: [...foundUser.favourite, noticeById?._id.toString()] } }
  );
  return noticeById;
};

export const getPrivatNotices = async (user: IRequestOwner) => {
  const noticesByUser = await Notice.find({ owner: user.userId });
  return noticesByUser;
};

export const getPrivatFavouriteNotices = async (user: IRequestOwner) => {
  const foundUser: any = await User.findOne({ _id: user.userId });
  console.log(foundUser);
  console.log(foundUser.favourite);
  
  const noticesByFavourite = await Notice.find({
    _id: { $all: [...foundUser.favourite] },
  });
  return noticesByFavourite;
};

export const deleteNoticesById = async (id: string | undefined) => {
  const noticesById = await Notice.findOneAndDelete({ _id: id });
  return noticesById;
};
