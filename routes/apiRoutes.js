var db = require("../models");

module.exports = function(app) {
  // Get all products
  app.get("/api/products", function(req, res) {
    db.Product.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

};
