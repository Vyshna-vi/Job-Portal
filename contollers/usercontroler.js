const UserModel = require("../models/usermodel");

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
    await UserModel.create(req.body);
    res.json({ sucess: true, message: "Added Sucessfully" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Cannot Add" });
  }
};

module.exports = {
  viewIndexPage,
  viewSignUpPage,
  viewHomePage,
  viewLoginPage,
  doSignUp,
};
