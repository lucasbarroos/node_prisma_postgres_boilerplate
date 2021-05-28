import { Router } from 'express';
import AuthMdl from '../../Middlewares/Auth';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/companies', AuthMdl, store);
routes.put('/companies/:id', AuthMdl, update);
routes.get('/companies', AuthMdl, show);
routes.get('/companies/:id', AuthMdl, index);

export default routes;