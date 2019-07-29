require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
const isEqualHelperHandlerbar = function (a, b, opts) {
  if (a == b) {
    return opts.fn(this)
  } else {
    return opts.inverse(this)
  }
}

//The following lines are for authentication
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser') ;
var flash = require('connect-flash');
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // for session messaging
// end authentication

// The following lines are for the chat
const http = require('http').Server(app);
const io = require('socket.io')(http);
var fs = require("fs");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      if_equal: isEqualHelperHandlerbar
    }
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Passport Strategy for authentication. Pass in passport and User object
require("./config/passport/passport.js")(passport, db.User);
// Route for authentication
require("./routes/authRoutes")(app, passport);

io.sockets.on('connection', function(socket) {
 
  socket.on('username', function(username) {

      socket.username = username;
      io.emit('is_online', '🔵 <i>' + socket.username + ' joined the chat..</i>');
  });

  socket.on('disconnect', function(username) {
    socket.username = username;
    io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
  })

  socket.on('chat_message', function(message, title) {

      io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
      // append the chat to a file
      fs.appendFile("./public/"+title+".txt", '<li><strong>' + socket.username + '</strong>: ' + message +"</li>", function(err) {
        // If an error was experienced we will log it.
        if (err) {
          console.log(err);
        }
      });
            
  });
});

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  // syncOptions.force = true;
  syncOptions.force = false;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  // we need the http to be listening, it can handle both sockets and http 
  // app.listen(PORT, function() {
    http.listen(PORT, function() {
      console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
