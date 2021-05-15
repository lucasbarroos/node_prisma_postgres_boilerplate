import { Router } from 'express';

const router = Router();

router.get('/users', (request, response) => {
  return response.json({
    message: 'The users is working!',
  });
});

export default router;