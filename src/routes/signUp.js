import express, {Router} from 'express';
import * as PATHS from '../constants/routes.js';
import { signUpController } from '../controllers/signUpController.js';

const routes = Router();

routes.post(PATHS.EMPLOYEE, signUpController);

export { routes as SignUpRoutes };