import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const roomSchema = new Schema({
  name: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true, default: 'Point' },
    coordinates: { type: [Number], required: true, index: '2dsphere' },
  },
  members: [{ type: Schema.Types.ObjectID, ref: 'User' }],
  lastModify: { type: Date, index: { unique: true, expires: '180d' } },
  createdAt: { type: Date, default: Date.now },
});
roomSchema.index({ location: '2dsphere' });

export default model('Room', roomSchema);
