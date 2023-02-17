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
      req.body.dateposted = new Date().toDateString();
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
    let job = await jobModel.find({ companyid: req.session.company._id });
    console.log(job);
    res.render("company/viewjobcompany", { job });
  } else {
    res.redirect("/company/siginlogin");
  }
};

const viewjobuser = async (req, res, next) => {
  let userjobview = await jobModel.find({ jobstatus: "posted" });
  console.log(userjobview);
  res.render("users/viewjobuser", { userjobview });
};

module.exports = {
  addJob,
  jobdata,
  companyjobview,
  viewjobuser
};
