/* eslint-disable no-unused-expressions */
import express from 'express';

import Subscribe from '../../controllers/subscribeController';
import subscribeValidation from '../../validation/subscribeValidation';

const router = express.Router();

//init subscribe container
const subscribeController = new Subscribe();

router
  .route('/')
  .post(subscribeValidation.validateData, subscribeController.subscribe);

export default router;
