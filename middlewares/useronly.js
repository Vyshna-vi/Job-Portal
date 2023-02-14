const userOnly = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/loginpage");
  }
};

module.exports = userOnly;
