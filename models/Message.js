import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const messageSchema = new Schema({
  text: { type: String },
  imageURL: { type: String },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  room: { type: Schema.Types.ObjectId, required: true, ref: 'Room' },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { unique: true, expires: '1d' },
  },
});

export default model('Message', messageSchema);
