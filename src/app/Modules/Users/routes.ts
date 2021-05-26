import { Router } from 'express';
import AuthMdl from '../../Middlewares/Auth';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/users', AuthMdl, store);
routes.put('/users/:id', AuthMdl, update);
routes.get('/users', AuthMdl, show);
routes.get('/users/:id', AuthMdl, index);

export default routes;