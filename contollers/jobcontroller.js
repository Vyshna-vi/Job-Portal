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
      req.body.companyname = req.session.company.compName;
      req.body.datePosted = new Date().toDateString();
      await JobModel.create(req.body);
      console.log(req.body);
      res.redirect("/company/viewcompanyaddedjobs");
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
  if (req.session.user) {
    const job = await JobModel.findOne({ _id: req.params.id });
    console.log(job);
    let body = {
      userId: req.session.user._id,
      userName: req.session.user.userName,
      jobId: job._id,
      jobTitle: job.title,
      companyId: job.companyid,
      companyName: job.companyname,
      applicationDate: new Date().toDateString(),
    };
    console.log(body);
    await JobApplicationModel.create(body);
    res.redirect("/userhomepage")
  } else {
    res.redirect("/loginpage")
  }
};

const viewUserApplication = async (req, res, next) => {
  let appliedjobs = await JobApplicationModel.find({
    userId: req.session.user._id,
  });
  res.render("users/appliedjobs.hbs", { appliedjobs });
};

const companyaddedjobs = async (req, res, next) => {
  if (req.session.company) {
    let job = await JobModel.find({ companyid: req.session.company._id })
    console.log(job);
    res.render("company/viewcompanyaddedjobs", { job })
  } else {
    res.redirect("/company/signinlogin")
  }
}

const jobdelete = async (req, res, next) => {
  console.log(req.params.id);
  await JobModel.deleteOne({ _id: req.params.id })
  res.redirect("/company/viewcompanyaddedjobs")
}

const viewuserappliedapplications = async (req, res, next) => {
  let companyapplyjob = await JobApplicationModel.find({ companyid: req.session.company._id })
  let applied = companyapplyjob.filter(e => e.status == "applied")
  let accept = companyapplyjob.filter(e => e.status == "Accept")
  let reject = companyapplyjob.filter(e => e.status == "reject")
  console.log("companyapplyjobs", companyapplyjob);
  res.render("company/viewuserapplyjobs", { companyapplyjob, applied, accept, reject })
}

const rejectuser = async (req, res, next) => {
  await JobApplicationModel.findOneAndUpdate({ _id: req.params.id }, { status: "reject" })
  res.redirect("/company/viewuserapplyjob")
}

const acceptuser = async (req, res, next) => {
  let user = await JobApplicationModel.findOneAndUpdate({ _id: req.params.id }, { status: "Accept" })
  console.log("ACCEPT USER", user);
  res.redirect("/company/viewuserapplyjob")
}

const editjob = async (req, res, next) => {
  let currentjob = await JobModel.findOne({ _id: req.params.id })
  console.log("edit job", currentjob);
  res.render("company/editjob.hbs", { currentjob })
}

const editedjob = async (req, res, next) => {
  try {
    req.body.datePosted = new Date().toDateString()
    console.log(req.body)
    let edited = await JobModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    console.log("edited job", edited);
    res.redirect("/company/viewcompanyaddedjobs")
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  addJob,
  jobdata,
  companyjobview,
  viewjobuser,
  apply,
  viewUserApplication,
  companyaddedjobs,
  jobdelete,
  viewuserappliedapplications,
  rejectuser,
  acceptuser,
  editjob,
  editedjob
}
