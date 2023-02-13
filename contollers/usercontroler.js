const UserModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const { model } = require("mongoose");

const viewIndexPage = function (req, res, next) {
  res.render("index", { title: "Express" });
};

const viewSignUpPage = function (req, res, next) {
  if (req.session.alertMsg) {
    let { alertMsg } = req.session;
    res.render("users/signup", { alertMsg });
  } else {
    res.render("users/signup");
  }
};

const viewHomePage = function (req, res, next) {
  res.render("users/homepage");
};

const viewUserHomePage = function (req, res, next) {
  if (req.session.user) {
    res.render("users/userhomepage", { user: req.session.user });
  } else {
    res.redirect("/login");
  }
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
    req.session.alertMsg = "Signup Failed Retry";
    res.redirect("/signup");
  }
};

const doLogin = async function (req, res, next) {
  console.log(req.body);
  const user = await UserModel.findOne({ email: req.body.email });
  if (user) {
    const userExist = await bcrypt.compare(req.body.password, user.password);
    console.log(userExist);
    if (userExist) {
      req.session.user = user;
      res.redirect("/userhomepage");
    } else {
      res.redirect("/loginpage");
    }
  } else {
    // res.json({ sucess: false, message: "Cannot Find User" });
    res.redirect("/loginpage");
  }
};

const upDateUserProfile = function (req, res, next) {
  res.render("users/updateuserprofile");
};

const userProfile = async function (req, res, next) {
  if (req.session.user)
    try {
      await UserModel.findOneAndUpdate(
        { email: req.session.user.email },
        req.body
      );
      // console.log(req.body)
      await req.files.image.mv(`./public/user/${req.session.user._id}.jpg`);
      await req.files.resume.mv(`./public/resume/${req.session.user._id}.pdf`);
      res.redirect("/userhomepage");
    } catch (error) {
      res.redirect("/userprofile");
    }
  else {
    res.redirect("/loginpage");
  }
};

module.exports = {
  viewIndexPage,
  viewSignUpPage,
  viewHomePage,
  viewLoginPage,
  doSignUp,
  doLogin,
  viewUserHomePage,
  upDateUserProfile,
  userProfile,
};
