import { Router } from 'express';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/users', store);
routes.put('/users/:id', update);
routes.get('/users', show);
routes.get('/users/:id', index);

export default routes;