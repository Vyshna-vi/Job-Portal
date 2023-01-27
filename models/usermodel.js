const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    maxLength: 100,
    minLength: 3,
    default: false,
  },
  email: {
    type: String,
    maxLength: 100,
    minLength: 3,
    default: false,
  },
  password: {
    type: String,
    maxLength: 300,
    minLength: 10,
    default: false,
  },
  phoneNumber: {
    type: Number,
    maxLength: 15,
    minLength: 10,
    default: false,
  },
  workStatus: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
