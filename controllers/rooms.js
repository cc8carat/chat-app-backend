import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getRooms = asyncHandler(async (req, res) => {
  console.log(req.user);
  res.json('Here is the map');
});

export const checkinRoom = asyncHandler(async (req, res) => {
  res.json('checkin');
});

export const createRoom = asyncHandler(async (req, res) => {
  res.json('create new room');
});
