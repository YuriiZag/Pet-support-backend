import { INotice } from "./../interfaces/INotice";
import { IRequestOwner } from "../interfaces/IRequestOwner";
import Notice from "../models/notice.model";
import User from "../models/user.model";
import { ConflictError } from "../heplers/errors";
import { WrongParametersError } from "../heplers/errors";
import { IUser } from "../interfaces/IUser";
import { error } from "console";

export const addNotice = async (
  body: INotice,
  filePath: string,
  user: IRequestOwner
) => {
  const { userId } = user;
  const noticeOwner: IUser | null = await User.findOne({ _id: userId });
  console.log(noticeOwner);

  if (noticeOwner !== null) {
    const newNotice = new Notice({
      ...body,
      avatar: filePath,
      owner: userId,
      ownerEmail: noticeOwner.email,
      ownerPhone: noticeOwner.phone,
    });

    try {
      await newNotice.save();
    } catch (error) {
      throw new WrongParametersError(error.message);
    }
    return newNotice;
  } else {
    throw new WrongParametersError("Wrong parameters 1");
  }
};

export const getNoticesByTitle = async (title: string | undefined) => {
  let normalizedTitle: string = "";
  if (title !== undefined) {
    if (title.includes("-")) {
      normalizedTitle = title.split("-").join(" ");
    }
  }
  const noticesByTitle = await Notice.find({ title });
  return noticesByTitle;
};

export const getNoticesByCategory = async (category: string | undefined) => {
  const getNoticesByCategory = await Notice.find({ category });
  return getNoticesByCategory;
};

export const getNoticesById = async (id: string | undefined) => {
  const noticesById = await Notice.findOne({ _id: id });
  console.log(noticesById);
  if (noticesById === null) {
    throw new WrongParametersError(`There are no notice with id: ${id} found`);
  }
  return noticesById;
};

export const setFavouriteNotice = async (
  id: string | undefined,
  user: IRequestOwner
) => {
  console.log(id);
  
  const noticeById = await Notice.findById({ _id: id });
  if (noticeById === null) {
    throw new WrongParametersError(`There are no notice with id: ${id} found`);
  }
  const foundUser: any = await User.findById({ _id: user.userId });
  foundUser.favourite.map((noticeId) => {
    if (noticeId === id) {
      throw new ConflictError(`Notice with id ${id} already in list`);
    }
  });
  await User.findOneAndUpdate(
    { _id: user.userId },
    {
      $set: { favourite: [...foundUser.favourite, noticeById?._id.toString()] },
    }
  );
  return noticeById;
};

export const getPrivatNotices = async (user: IRequestOwner) => {
  const noticesByUser = await Notice.find({ owner: user.userId });
  return noticesByUser;
};

export const getPrivatFavouriteNotices = async (user: IRequestOwner) => {
  const foundUser: any = await User.findOne({ _id: user.userId });
  const allNotices = await Notice.find({});
  console.log(foundUser.favourite);
  
  const filteredArray = allNotices.filter(notice => foundUser.favourite.includes(notice._id.toString()))
  return filteredArray;
};

export const deleteNoticesById = async (id: string | undefined) => {
  try {
    const noticesById = await Notice.findByIdAndDelete({ _id: id });
    return noticesById;
  } catch (error) {
    throw new WrongParametersError(`There are no notice with id: ${id} found`);
  }
};
