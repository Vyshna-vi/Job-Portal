var express = require("express");
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
} = require("../contollers/usercontroler");
var router = express.Router();

/* GET home page. */
router.get("/", viewIndexPage);
router.get("/signup", viewSignUpPage);
router.get("/homepage", viewHomePage);
router.get("/loginpage", viewLoginPage);
router.post("/signup", doSignUp);
router.post("/loginpage", doLogin);
router.get("/userhomepage",viewUserHomePage)
router.get("/userprofile",upDateUserProfile)
router.post("/userprofile",userProfile)

module.exports = router;
