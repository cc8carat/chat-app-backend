import ErrorResponse from '../utils/ErrorResponse.js';
import asyncHandler from './asyncHandler.js';
import Room from '../models/Room.js';

const findRoom = asyncHandler(async (req, res, next) => {
  const {
    params: { roomid },
  } = req;
  if (!roomid) throw new ErrorResponse('roomId is required', 400);
  const room = await Room.findById(roomid);
  if (room) {
    req.room = room;
  } else {
    req.room = null;
  }
  next();
});

export default findRoom;
