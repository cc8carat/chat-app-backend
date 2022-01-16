import { Router } from 'express';
import { getRooms, checkinRoom, createRoom } from '../controllers/rooms.js';
import findRoom from '../middlewares/findRoom.js';

const roomsRouter = Router();

roomsRouter.get('/', getRooms);
roomsRouter.post('/', findRoom, createRoom);
roomsRouter.get('/:roomid', findRoom, checkinRoom);

export default roomsRouter;
