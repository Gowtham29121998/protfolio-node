import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [false, "Please fill your first name"],
  },
  email: {
    type: String,
    required: [false, "Please fill your email"],
  },
  password: {
    type: String,
    required: [false, "Please fill your password"],
  },
  confirmPassword: {
    type: String,
    required: [false, "Please fill your password"],
  },
  token: {
    type: String,
    required: [false, "Please fill your token"],
  }
});

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

userSchema.set("autoIndex", true);

const user = model("User", userSchema);

export default user;
