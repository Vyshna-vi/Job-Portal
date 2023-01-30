var express = require("express");
const {
  viewSignUpLoginPage, viewCmpHomePage, doCmpSignUp,
} = require("../contollers/companycontroler");
var router = express.Router();

/* GET home page. */
router.get("/signinlogin", viewSignUpLoginPage);
router.get("/homepage",viewCmpHomePage)
router.post("/dosignup",doCmpSignUp)

module.exports = router;
