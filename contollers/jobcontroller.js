const JobApplicationModel = require("../models/jobapplicationmodel");
const JobModel = require("../models/jobmodel");

const addJob = function (req, res, next) {
  if (req.session.company) {
    res.render("company/addjob");
  } else {
    res.redirect("/company/signinlogin");
  }
};

const jobdata = async (req, res, next) => {
  if (req.session.company) {
    try {
      req.body.companyid = req.session.company._id;
      req.body.companyname = req.session.company.companyname;
      req.body.datePosted = new Date().toDateString();
      await JobModel.create(req.body);
      console.log(req.body);
      res.redirect("/company/compjobview");
    } catch (error) {
      console.log(error);
    }
  } else {
    res.redirect("/company/signinlogin");
  }
};

const companyjobview = async (req, res, next) => {
  if (req.session.company) {
    let job = await JobModel.find({ companyid: req.session.company._id });
    console.log(job);
    res.render("company/viewjobcompany", { job });
  } else {
    res.redirect("/company/siginlogin");
  }
};

const viewjobuser = async (req, res, next) => {
  let userjobview = await JobModel.find({ status: "posted" });
  console.log(userjobview);
  res.render("users/viewjobuser", { userjobview });
};

const apply = async (req, res, next) => {
  const job = await JobModel.findOne({ _id: req.params.id });
  let body = {
    userId: req.session.user._id,
    userName: req.session.user.userName,
    jobId: job._id,
    jobTitle: job.title,
    companyId: job.companyid,
    appliedDate: new Date().toDateString(),
  };
  console.log(body);
  await JobApplicationModel.create(body);
};

const viewUserApplication = async (req, res, next) => {
  let appliedjobs = await JobApplicationModel.find({
    userId: req.session.user._id,
  });
  res.render("users/appliedjobs.hbs",{appliedjobs});
};

module.exports = {
  addJob,
  jobdata,
  companyjobview,
  viewjobuser,
  apply,
  viewUserApplication,
};
