const UserModel = require("../models/usermodel");
const bcrypt = require("bcrypt");

const viewIndexPage = function (req, res, next) {
  res.render("index", { title: "Express" });
};

const viewSignUpPage = function (req, res, next) {
  res.render("users/signup");
};

const viewHomePage = function (req, res, next) {
  res.render("users/homepage");
};

const viewLoginPage = function (req, res, next) {
  res.render("users/login");
};

const doSignUp = async function (req, res, next) {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await UserModel.create(req.body);
    // res.json({ sucess: true, message: "Added Sucessfully" });
    res.redirect("/loginpage");
  } catch (error) {
    console.log(error);
    // res.json({ sucess: false, message: "Cannot Add" });
    res.redirect("/signup")
  }
};

module.exports = {
  viewIndexPage,
  viewSignUpPage,
  viewHomePage,
  viewLoginPage,
  doSignUp,
};
