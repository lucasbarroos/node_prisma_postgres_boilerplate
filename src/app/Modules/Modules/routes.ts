import { Router } from 'express';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/modules', store);
routes.put('/modules/:id', update);
routes.get('/modules', show);
routes.get('/modules/:id', index);

export default routes;