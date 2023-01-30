const mongoose = require("mongoose");

const cmpSchema = new mongoose.Schema({
  cmpName: {
    type: String,
    maxLength: 100,
    minLength: 3,
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
    required: true,
  },
  phnNumber: {
    type: Number,
    minLength: 10,
    required: true,
  },
});

const CompanyModel = mongoose.model("Company", cmpSchema);

module.exports = CompanyModel;
