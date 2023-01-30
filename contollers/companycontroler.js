const CompanyModel = require("../models/companymodel");

const viewSignUpLoginPage = function (req, res, next) {
  res.render("company/signin");
};

const viewCmpHomePage = function (req, res, next) {
  res.render("user/homepage");
};

const doCmpSignUp = async function (req, res, next) {
  console.log(req.body);
  try {
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    await CompanyModel.create(req.body);
    res.json({ sucess: true, message: "Added Sucessfully" });
    // res.redirect("/signinlogin");
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Cannot Add" });
    // res.redirect("/signup")
  }
};

module.exports = {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp
};
