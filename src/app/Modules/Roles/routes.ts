import { Router } from 'express';
import AuthMdl from '../../Middlewares/Auth';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/roles', AuthMdl, store);
routes.put('/roles/:id', AuthMdl, update);
routes.get('/roles', AuthMdl, show);
routes.get('/roles/:id', AuthMdl, index);

export default routes;