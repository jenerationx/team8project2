var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
      res.render("index", {
        store: "FORUM STORE"
    });
  });

  app.get("/modern", function (req, res) {
    db.Product.findAll({}).then(function (dbProducts) {  
      res.render("modern", {
        products: dbProducts,
        store: "FORUM STORE",
        title: "Modern",
      });
    });
  });

  app.get("/traditional", function (req, res) {
    db.Product.findAll({}).then(function (dbProducts) {
      res.render("traditional", {
        products: dbProducts,
        store: "FORUM STORE",
        title: "Traditional"
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/product/:id", function (req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function (dbProduct) {
      res.render("product", {
        product: dbProduct
      });
    });
  });


  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });

};
