const passport = require('passport');

function logout(req, res) {
  req.logout();
  res.redirect('/');
};

function isAdmin(req, res, next) {
  if (req.user && req.user.admin) return next();
  res.redirect('/auth/google');
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

var auth = passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
);

var scope = passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
);

var userController = {
  logout: logout,
  isAdmin: isAdmin,
  isLoggedIn: isLoggedIn,
  auth: auth,
  scope: scope
};

module.exports = userController;
