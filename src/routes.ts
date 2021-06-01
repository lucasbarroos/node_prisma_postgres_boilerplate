import { Router } from 'express';
import AuthenticationRoutes from './app/Modules/Authentication/routes';
import UserRoutes from './app/Modules/Users/routes';
import RolesRoutes from './app/Modules/Roles/routes';
import ModulesRoutes from './app/Modules/Modules/routes';
import CompaniesRoutes from './app/Modules/Companies/routes';

const routes = Router();

routes.use(UserRoutes);
routes.use(RolesRoutes);
routes.use(ModulesRoutes);
routes.use(CompaniesRoutes);
routes.use(AuthenticationRoutes);

export default routes;

