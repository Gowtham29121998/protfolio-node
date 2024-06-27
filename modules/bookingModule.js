import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: [false, "Please fill your first name"],
  },
  address: {
    type: String,
    required: [false, "Please fill your email"],
  },
  phone: {
    type: String,
    required: [false, "Please fill your password"],
  },
  advance: {
    type: Number,
    required: [false, "Please fill your password"],
  },
  balance: {
    type: Number,
    required: [false, "Please fill your token"],
  },
  date: {
    type: Date,
    required: [false, "Please fill your token"],
  },
  timeOfDay: {
    type: String,
    required: [false, "Please fill your token"],
  },
  type: {
    type: String,
    required: [false, "Please fill your token"],
  },
  jewelSet: {
    type: String,
    required: [false, "Please fill your token"],
  }
});

bookingSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

bookingSchema.set("autoIndex", true);

const Booking = model("Booking", bookingSchema);

export default Booking;
