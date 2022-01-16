import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Message from '../models/Message.js';

export const getMessages = asyncHandler(async (req, res) => {
  const {
    room: { _id },
  } = req;
  if (!req.room) throw new ErrorResponse('Room does not exist', 404);

  const messages = await Message.find({ room: _id.toString() }).populate('user');
  res.json(messages);
});

export const sendMessage = asyncHandler(async (req, res) => {
  const {
    body: { text },
    user: { _id },
    room: { _id: roomId },
  } = req;
  if (!text) throw new ErrorResponse('Text is required', 400);
  if (!req.room) throw new ErrorResponse('Room does not exist', 404);
  await Message.create({ text, user: _id, room: roomId });
  res.json('Your message has been delivered');
});
