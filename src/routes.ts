import { Router } from 'express';
import UserRoutes from './app/Modules/Users/routes';
import RolesRoutes from './app/Modules/Roles/routes';
import ModulesRoutes from './app/Modules/Modules/routes';

const routes = Router();

routes.use(UserRoutes);
routes.use(RolesRoutes);
routes.use(ModulesRoutes);

export default routes;

