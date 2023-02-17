const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
  },
  companyid: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  vacancies: {
    type: Number,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  datePosted: {
    type: String,
    required: true,
  },
  lastDate: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const JobModel = mongoose.model("Job", jobSchema);

module.exports = JobModel;
