const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    maxLength: 100,
    minLength: 3,
    default: false,
    required:true
  },
  email: {
    type: String,
    unique:true,
    maxLength: 100,
    minLength: 3,
    default: false,
    required:true
  },
  password: {
    type: String,
    minLength: 10,
    default: false,
    required:true
  },
  phoneNumber: {
    type: Number,
    minLength: 10,
    default: false,
    required:true
  },
  workStatus: {
    type: String,
    required:true
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
