import Notice from "../models/notice.model";

export const getNoticesByTitle = async (title: any) => {
  const noticesByTitle = await Notice.find({title});
  return noticesByTitle;
};
