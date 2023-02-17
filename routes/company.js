var express = require("express");
const companyonly = require("../middlewares/companyonly");

const {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp,
  doCmpLogin,
  upDateCompanyProfile,
  companyProfile,
  viewCompanyProfile,
} = require("../contollers/companycontroler");
const { addJob, doAddJob, jobdata } = require("../contollers/jobcontroller");
var router = express.Router();

/* GET home page. */
router.get("/signinlogin", viewSignUpLoginPage);
router.get("/cmphomepage", viewCmpHomePage);
router.post("/dosignup", doCmpSignUp);
router.post("/signinlogin", doCmpLogin);
router.get("/addjob", addJob);
router.post("/addjob", jobdata);
router.get("/updateprofile", upDateCompanyProfile);
router.post("/updateprofile", companyonly, companyProfile);
router.get("/viewcompanyprofile", companyonly, viewCompanyProfile);

module.exports = router;
