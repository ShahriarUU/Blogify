import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
    validate: [validator.isAlpha, "Name should only contain alphabets"],
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    validate: [validator.isEmail, "Invalid email address"],
    unique: true,
  },
  phone: {
    type: String,
    require: [true, "phone number is required"],
  },

  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },

  education: {
    type: String,
    require: [true, "education status is required"],
  },
  role: {
    type: String,
    require: true,
    enum: ["user", "admin"],
    default: "user",
  },

  password: {
    type: String,
    require: [true, "Password  is required"],
    minlenght: [8, "Password must contain at least 8 character!"],
    maxlenght: [32, "Password can't be exit 32 Character !"],
  },
  createOn: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export { User };
