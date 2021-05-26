import { Router } from 'express';
import AuthMdl from '../../Middlewares/Auth';
import { store, show, index, update } from './controller'

const routes = Router();

routes.post('/modules', AuthMdl, store);
routes.put('/modules/:id', AuthMdl, update);
routes.get('/modules', AuthMdl, show);
routes.get('/modules/:id', AuthMdl, index);

export default routes;