import { Router } from 'express';
import { signin, signup, getUser } from '../controllers/users.js';
import verifyToken from '../middlewares/verifyToken.js';

const usersRouter = Router();

usersRouter.post('/signin', signin);
usersRouter.post('/signup', signup);
usersRouter.get('/me', verifyToken, getUser);

export default usersRouter;
