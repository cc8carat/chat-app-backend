import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Room from '../models/Room.js';

export const getRooms = asyncHandler(async (req, res) => {
  const {
    query: { longitude, latitude },
  } = req;

  if (!longitude | !latitude) throw new ErrorResponse('longitude and latitude are required');
  const rooms = await Room.find({ location: { $near: { $geometry: { type: 'Point', coordinates: [longitude, latitude] }, $maxDistance: 2300 } } });
  res.json(rooms);
});

export const createRoom = asyncHandler(async (req, res) => {
  const {
    user: { _id },
    body: { name, location },
  } = req;

  const data = await Room.create({
    name,
    location,
    members: _id,
    lastModify: Date.now(),
  });

  res.json(data);
});

// export const checkinRoom = asyncHandler(async (req, res, next) => {
//   const {
//     user: { _id },
//     params: { id: roomId },
//   } = req;
//   const roomFound = await Room.findById(roomId);
//   if (!roomFound) throw new ErrorResponse(`Room with id ${id} does not exsit`, 404);

//   check if user is included in members, if not, push user to members array
//     const memberFond = await Room.findById(roomId).find({members: _id});

//   const room = await Room.findOneAndUpdate({ _id: roomId }, { $push: { members: _id } }, { new: true }).populate('members');
//   res.json(room);
// });
