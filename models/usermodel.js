const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    maxLength: 100,
    minLength: 3,
    default: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    maxLength: 100,
    minLength: 3,
    required: true,
  },
  password: {
    type: String,
    minLength: 10,
    default: false,
    required: true,
  },
  phoneNumber: {
    type: Number,
    minLength: 10,
    default: false,
    required: true,
  },
  workStatus: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  qualification: {
    type: String,
  },
  skill: {
    type: String,
  },
  experiance: {
    type: String,
  },
  jobcatagory: {
    type: String,
  },
  language: {
    type: String,
  },
  totalprojects: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
