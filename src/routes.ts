import { Router } from 'express';
import UserRoutes from './app/User/routes';

const routes = Router();

routes.use(UserRoutes);

export default routes;

