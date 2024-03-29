import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncHandler from '../middlewares/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import User from '../models/User.js';

export const signin = asyncHandler(async (req, res) => {
  const {
    body: { email, password },
  } = req;
  if (!email || !password) throw new ErrorResponse('Email, password are required', 400);

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new ErrorResponse('User does not exsit. Please sign up', 404);
  }
  if (user) {
    const { _id, name: username, password: hash } = user;
    const match = await bcrypt.compare(password, hash);
    if (!match) throw new ErrorResponse('Password is not correct', 401);
    const token = jwt.sign({ _id, name: username }, process.env.JWT_SECRET);
    res.json({ token });
  }
});

export const signup = asyncHandler(async (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  if (!name || !email || !password) throw new ErrorResponse('Name, email, password are required', 400);
  const found = await User.findOne({ email });
  if (found) throw new ErrorResponse('User already exsit', 403);
  const hash = await bcrypt.hash(password, 5);
  const { _id, name: username } = await User.create({ name, email, password: hash });
  const token = jwt.sign({ _id, name: username }, process.env.JWT_SECRET);
  res.json({ token });
});

export const getUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});
