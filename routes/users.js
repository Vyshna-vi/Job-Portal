var express = require("express");
const {
  viewIndexPage,
  viewSignUpPage,
  viewHomePage,
  viewLoginPage,
  doSignUp,
  doLogin,
} = require("../contollers/usercontroler");
var router = express.Router();

/* GET home page. */
router.get("/", viewIndexPage);
router.get("/signup", viewSignUpPage);
router.get("/homepage", viewHomePage);
router.get("/loginpage", viewLoginPage);
router.post("/signup", doSignUp);
router.post("/loginpage", doLogin);

module.exports = router;
