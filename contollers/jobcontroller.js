const JobModel = require("../models/jobmodel");

const addJob = function (req, res, next) {
  if (req.session.company) {
    res.render("company/addjob");
  } else {
    res.redirect("/company/signinlogin");
  }
};

const doAddJob = function (req, res, next) {
  console.log(req.body);
};

module.exports = {
  addJob,
  doAddJob,
};
