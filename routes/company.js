var express = require("express");
const {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp,
  doCmpLogin,
  upDateCompanyProfile,
  companyProfile,
} = require("../contollers/companycontroler");
const { addJob, doAddJob } = require("../contollers/jobcontroller");
var router = express.Router();

/* GET home page. */
router.get("/signinlogin", viewSignUpLoginPage);
router.get("/cmphomepage", viewCmpHomePage);
router.post("/dosignup", doCmpSignUp);
router.post("/signinlogin", doCmpLogin);
router.get("/addjob", addJob);
router.post("/addjob", doAddJob);
router.get("/updateprofile", upDateCompanyProfile);
router.post("/updateprofile", companyProfile);

module.exports = router;
