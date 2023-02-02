var express = require("express");
const {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp,
  doCmpLogin,
} = require("../contollers/companycontroler");
const { addJob, doAddJob } = require("../contollers/jobcontroller");
var router = express.Router();

/* GET home page. */
router.get("/signinlogin", viewSignUpLoginPage);
router.get("/cmphomepage", viewCmpHomePage);
router.post("/dosignup", doCmpSignUp);
router.post("/signinlogin", doCmpLogin);
router.get("/addjob",addJob)
router.post("/addjob",doAddJob)


module.exports = router;
