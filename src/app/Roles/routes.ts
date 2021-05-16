import { Router } from 'express';

const routes = Router();

routes.get('/roles', (request, response) => {
  return response.json({
    message: 'The roles is working!',
  });
});

export default routes;