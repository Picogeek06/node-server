import { StatusCodes } from 'http-status-codes';
import { APP_MESSAGES as appMessages } from '../constants/appMessages.js';

export const fileUploadController = (req, res) => {

  const file = req.file;
  if(!file) {
    const error = new Error(appMessages.FILE_NOT_FOUND);
    error.httpStatusCode = 400;
    return next(error);
  } else {
    res.status(StatusCodes.OK).send({ message: appMessages.FILE_UPLOADED, status: StatusCodes.OK, data: req.file });
  }
}