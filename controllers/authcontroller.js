// This file handles the handlebar page rendering
// HLS added this require to be able to render the store 
// var db = require("../models");

var exports = module.exports = {}
 
// The html for creating an account
exports.signup = function(req, res) {
    res.render("signup", {msg: req.flash("error")});
}

// The html used to sign in. This handlebar will be able to display session errors
exports.signin = function(req, res) {
    res.render("signin", {msg: req.flash("error")});
}

// The html that we want the users to see once they  are able to login
// in this case we want them to see the store
exports.dashboard = function(req, res) {
    // req.user gives a reference to the local user
    // res.render('dashboard', {username: req.user.username});
        res.redirect('/');
  }

// this is how the session ends
// the user will be sent to the signin page
exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/signin');
    });
}