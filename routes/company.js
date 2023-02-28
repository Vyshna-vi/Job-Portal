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
  doLogOut,
  editProfile,
  editedProfile,
} = require("../contollers/companycontroler");
const { addJob, jobdata, companyaddedjobs, jobdelete, viewuserappliedapplications, rejectuser, acceptuser, editedjob, editjob } = require("../contollers/jobcontroller");
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
router.get("/viewcompanyaddedjobs",companyonly,companyaddedjobs);
router.get("/delete/:id",jobdelete);
router.get("/viewuserapplyjob",companyonly,viewuserappliedapplications);
router.get("/reject/:id",companyonly,rejectuser)
router.get("/accept/:id",companyonly,acceptuser)
router.get("/logout",doLogOut)
router.get("/foreditjob/:id",companyonly,editjob)
router.post("/editedjob/:id",companyonly,editedjob)
router.get("/editcmpprofile",companyonly,editProfile)
router.post("/editprofile",companyonly,editedProfile)



module.exports = router;
