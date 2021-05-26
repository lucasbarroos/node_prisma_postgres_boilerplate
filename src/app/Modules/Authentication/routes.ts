import { Router } from 'express';
import { login } from './controller'

const routes = Router();

routes.post('/login', login);

export default routes;