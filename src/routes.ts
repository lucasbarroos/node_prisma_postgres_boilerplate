import { Router } from 'express';
import UserRoutes from './app/Modules/Users/routes';
import RolesRoutes from './app/Modules/Roles/routes';

const routes = Router();

routes.use(UserRoutes);
routes.use(RolesRoutes);

export default routes;

