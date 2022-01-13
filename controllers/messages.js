import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Message from '../models/Message.js';

export const getMessages = asyncHandler(async (req, res) => {
  const {
    params: { id: roomId },
  } = req;
  const messages = await Message.find({ room: roomId }).populate('user');
  res.json(messages);
});

export const sendMessage = asyncHandler(async (req, res) => {
  const {
    body: { message },
    user: { _id },
    params: { id: roomId },
  } = req;
  const data = await Message.create({ body: message, user: _id, room: roomId });
  res.json(data);
});
