import { Router } from 'express';
import { signin, signup } from '../controllers/users.js';

const usersRouter = Router();

usersRouter.post('/signin', signin);
usersRouter.post('/signup', signup);

export default usersRouter;
