import { StatusCodes } from "http-status-codes";
import { APP_MESSAGES as appMessages } from "../constants/appMessages.js";

export const signUpController = (req, res) => {
  res
    .status(StatusCodes.CREATED)
    .send({
      message: appMessages.EMPLOYEE_CREATED,
      status: StatusCodes.CREATED,
      data: req.body,
    });
};
