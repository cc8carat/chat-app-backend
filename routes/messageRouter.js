import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/messages.js';

const messageRouter = Router();

messageRouter.get('/:id', getMessages);
messageRouter.post('/:id', sendMessage);

export default messageRouter;
