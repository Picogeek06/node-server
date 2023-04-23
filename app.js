import express from 'express';
import * as PATHS from './src/constants/routes.js';
import { StatusCodes } from 'http-status-codes';
import { SignUpRoutes } from './src/routes/signUp.js';
import { APP_MESSAGES as appMessages } from './src/constants/appMessages.js';
import AddTraceId from './src/middleware/addTraceId.js';

import NotFound from './src/middleware/notFound.js';

const app = express();

// Action Performed: Parse JSON
app.use(express.json());

// Action Performed: Get All Employees 
app.get(PATHS.APP_HEALTH, (req, res) => {
  res.status(StatusCodes.OK).send(appMessages.APP_HEALTH);
});

// Action Performed: Add Trace Id
app.use(AddTraceId);

// Action Performed: Sign Up
app.use(SignUpRoutes);

// Action Performed: Not Found
app.use(NotFound)

export default app;
