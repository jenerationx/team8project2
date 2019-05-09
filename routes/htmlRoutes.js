var db = require("../models");
var fs = require("fs");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
      store: "FORUM STORE"
    });
  });

  app.get("/modern", function (req, res) {
    db.Product.findAll({}).then(function (dbProducts) {

      // get the chat data from the file
      getChat("./public/modern.txt", function (chatData) {

        // get the userName
        var userName = false;
        if (req.user) {
          userName = req.user.username;
        }
        res.render("modern", {
          products: dbProducts,
          store: "FORUM STORE",
          title: "Modern",
          user: userName,
          data: chatData
        }); // end of render
      });// end of getChat
    });
  });

  app.get("/traditional", function (req, res) {
    db.Product.findAll({}).then(function (dbProducts) {
      // get the chat data from the file
      getChat("./public/traditional.txt", function (chatData) {

        // get the userName
        var userName = false;
        if (req.user) {
          userName = req.user.username;
        }
        res.render("traditional", {
          products: dbProducts,
          store: "FORUM STORE",
          title: "Traditional",
          user: userName,
          data: chatData
        });
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


  //  reads the file and returns the file's contents
  var getChat = function (fileName, callback) {
    // read the chat from a file and display in message
    fs.readFile(fileName, "utf8", function (error, data) {

      // If the code experiences any errors it will log the error to the console.
      if (error) {
        console.log("Couldn't find a file")
        console.log(error);
      } else {
        // We will then print the contents of data
        console.log("Inside getChat " + data);
      }
      // return data;
      callback(data);
    });
  }

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });

};
