import { Router } from 'express';
import { getRooms, checkinRoom, createRoom } from '../controllers/rooms.js';

const roomsRouter = Router();

roomsRouter.get('/', getRooms);
roomsRouter.get('/:id', checkinRoom);
roomsRouter.post('/create', createRoom);

export default roomsRouter;
