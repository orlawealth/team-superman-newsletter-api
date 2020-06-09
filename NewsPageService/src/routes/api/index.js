import { Router } from 'express';
import pageServiceRoute from './pageServiceRoute.js';

const router = Router();

router.use('/newspage', pageServiceRoute);
router.get('/', (req, res) => res.send('This is the news page microservice page'));

export default router;