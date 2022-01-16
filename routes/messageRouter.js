import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/messages.js';
import findRoom from '../middlewares/findRoom.js';

const messageRouter = Router();

messageRouter.get('/:roomid', findRoom, getMessages);
messageRouter.post('/:roomid', findRoom, sendMessage);

export default messageRouter;
