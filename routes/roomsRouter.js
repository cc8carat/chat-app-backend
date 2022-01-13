import { Router } from 'express';
import { getRooms, checkinRoom, createRoom } from '../controllers/rooms.js';

const roomsRouter = Router();

roomsRouter.get('/', getRooms);
roomsRouter.post('/', createRoom);
roomsRouter.get('/checkin', checkinRoom);

export default roomsRouter;
