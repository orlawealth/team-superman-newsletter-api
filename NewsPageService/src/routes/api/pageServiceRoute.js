/* eslint-disable no-unused-expressions */
import express from 'express';

import { showOneNews, showAllUserNews } from '../../controllers/newsPageService';

const router = express.Router();

router
 	.route('/:emailId')
 	.get(showOneNews);

router
	.route('/:userId/all')
	.get(showAllUserNews);
 	
export default router;
