import { WrongParametersError } from './errors';
import mongoose from "mongoose";

export const getIdValidation = (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new WrongParametersError("Invalid ID");
    }
  };