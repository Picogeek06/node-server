import { StatusCodes } from 'http-status-codes';
import { APP_MESSAGES as appMessages } from '../constants/appMessages.js';


const NotFound = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).send({message: appMessages.NOT_FOUND, status: StatusCodes.NOT_FOUND});
}

export default NotFound;