import { Router } from 'express';
import UserRoutes from './app/User/routes';

const router = Router();

router.use(UserRoutes);

export default router;

