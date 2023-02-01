const CompanyModel = require("../models/companymodel");
const bcrypt = require("bcrypt");

const viewSignUpLoginPage = function (req, res, next) {
  res.render("company/signin");
};

const viewCmpHomePage = function (req, res, next) {
  if (req.session.company) {
    res.render("company/cmphomepage", { company: req.session.company });
  } else {
    res.redirect("company/signinlogin");
  }
  res.render("company/cmphomepage");
};

const doCmpSignUp = async function (req, res, next) {
  console.log(req.body);
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await CompanyModel.create(req.body);
    // res.json({ sucess: true, message: "Added Sucessfully" });
    res.redirect("/company/signinlogin");
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Cannot Add" });
    // res.redirect("/signup")
  }
};

const doCmpLogin = async function (req, res, next) {
  console.log(req.body);
  const company = await CompanyModel.findOne({ email: req.body.email });
  if (company) {
    const companyExsist = await bcrypt.compare(
      req.body.password,
      company.password
    );
    console.log(companyExsist);
    if (companyExsist) {
      req.session.company = company;
      res.redirect("/company/cmphomepage");
    } else {
      res.redirect("/company/signlogin");
    }
  } else {
    // res.json({ sucess: false, message: "Cannot Find Company" });
    res.redirect("/company/signinlogin");
  }
};

module.exports = {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp,
  doCmpLogin,
};
