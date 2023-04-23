import express, {Router} from 'express';
import * as PATHS from '../constants/routes.js';
import {file}
const routes = Router();

routes.post(PATHS.EMPLOYEE, signUpController);

export { routes as SignUpRoutes };