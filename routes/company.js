var express = require("express");
const {
  viewIndexPage,
  viewSignUpLoginPage,
} = require("../contollers/companycontroler");
var router = express.Router();

/* GET home page. */
router.get("/signinlogin", viewSignUpLoginPage);

module.exports = router;
