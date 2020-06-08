import { Router } from 'express';
import subscribeRoutes from './subscribeRoute';

const router = Router();

router.use('/subscribe', subscribeRoutes);
router.get('/', (req, res) => res.send('This is my index page'));
export default router;
