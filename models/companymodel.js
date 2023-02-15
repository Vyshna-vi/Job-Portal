const mongoose = require("mongoose");

const cmpSchema = new mongoose.Schema({
  compName: {
    type: String,
    maxLength: 100,
    minLength: 3,
  },
  email: {
    type: String,
    unique: true,
    maxLength: 100,
    minLength: 3,
  },
  password: {
    type: String,
    minLength: 10,
  },
  phnNumber: {
    type: Number,
    minLength: 10,
  },
  about: {
    type: String,
  },
  address: {
    type: String,
  },
  vision: {
    type: String,
  },
  mission: {
    type: String,
  },
});

const CompanyModel = mongoose.model("Company", cmpSchema);

module.exports = CompanyModel;
