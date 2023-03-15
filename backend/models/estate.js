import mongoose from "mongoose";

const estateSchema = mongoose.Schema({
  id: {
    type: String,
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  garages: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

let Estate = mongoose.model('Estate', estateSchema);

export default Estate;