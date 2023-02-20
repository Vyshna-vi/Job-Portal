var express = require("express");
const useronly = require("../middlewares/useronly");
const {
  viewIndexPage,
  viewSignUpPage,
  viewHomePage,
  viewLoginPage,
  doSignUp,
  doLogin,
  viewUserHomePage,
  upDateUserProfile,
  userProfile,
  viewUserProfile,
} = require("../contollers/usercontroler");
const {
  viewjobuser,
  apply,
  viewUserApplication,
} = require("../contollers/jobcontroller");
var router = express.Router();

/* GET home page. */
router.get("/", viewIndexPage);
router.get("/signup", viewSignUpPage);
router.get("/homepage", viewHomePage);
router.get("/loginpage", viewLoginPage);
router.post("/signup", doSignUp);
router.post("/loginpage", doLogin);
router.get("/userhomepage", viewUserHomePage);
router.get("/userprofile", upDateUserProfile);
router.post("/userprofile", useronly, userProfile);
router.get("/viewuserprofile", useronly, viewUserProfile);
router.get("/viewjobuser", viewjobuser);
router.get("/apply/:id", useronly, apply);
router.get("/viewuserapplication",useronly,viewUserApplication);

module.exports = router;
