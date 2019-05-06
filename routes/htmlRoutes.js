var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      // req.user will be undefined if not signed in
      if (req.user)
        console.log("Welcome " + req.user.username);
      res.render("index", {
        examples: dbExamples,
        store: "FORUM STORE"
      });
    });
  });

  app.get("/modern", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("modern", {
        examples: dbExamples,
        store: "FORUM STORE",
        title: "Modern"
      });
    });
  });

  app.get("/traditional", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("traditional", {
        examples: dbExamples,
        store: "FORUM STORE",
        title: "Traditional"
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/product/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });

};
