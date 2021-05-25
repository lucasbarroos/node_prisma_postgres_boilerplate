import { Router } from 'express';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/roles', store);
routes.put('/roles/:id', update);
routes.get('/roles', show);
routes.get('/roles/:id', index);

export default routes;