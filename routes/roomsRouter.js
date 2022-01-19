import { Router } from 'express';
import { getRooms, createRoom } from '../controllers/rooms.js';
import findRoom from '../middlewares/findRoom.js';
import verifyToken from '../middlewares/verifyToken.js';

const roomsRouter = Router();

roomsRouter.get('/', getRooms);
roomsRouter.post('/', verifyToken, createRoom);

export default roomsRouter;
