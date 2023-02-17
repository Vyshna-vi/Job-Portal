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

const upDateCompanyProfile = function (req, res, next) {
  res.render("company/updatecompanyprofile");
};

const companyProfile = async function (req, res, next) {
  try {
    const updateCompany = await CompanyModel.findOneAndUpdate(
      { email: req.session.company.email },
      req.body,
      { new: true }
    );
    // console.log(req.body);
    await req.files.image.mv(`./public/company/${req.session.company._id}.jpg`);
    req.session.company = updateCompany;
    res.redirect("/company/cmphomepage");
  } catch (error) {
    res.redirect("/company/updateprofile");
    console.log(error);
  }
};

const viewCompanyProfile = function (req, res, next) {
  res.render("company/companyprofile", { company: req.session.company });
};

module.exports = {
  viewSignUpLoginPage,
  viewCmpHomePage,
  doCmpSignUp,
  doCmpLogin,
  upDateCompanyProfile,
  companyProfile,
  viewCompanyProfile,
};
