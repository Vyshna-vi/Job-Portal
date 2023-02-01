var express = require("express");
const {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp,
  doCmpLogin,
} = require("../contollers/companycontroler");
var router = express.Router();

/* GET home page. */
router.get("/signinlogin", viewSignUpLoginPage);
router.get("/cmphomepage", viewCmpHomePage);
router.post("/dosignup", doCmpSignUp);
router.post("/signinlogin", doCmpLogin);

module.exports = router;
