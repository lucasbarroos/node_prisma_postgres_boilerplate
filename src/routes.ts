import { Router } from 'express';
import UserRoutes from './app/User/routes';
import RolesRoutes from './app/Roles/routes';

const routes = Router();

routes.use(UserRoutes);
routes.use(RolesRoutes);

export default routes;

