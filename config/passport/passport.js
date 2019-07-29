// This file defines our authentiction strategies. 
// We have different strategies for signup and signin.
// The password is encrypted


//First, we import bcrypt which we need to secure passwords.
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

// This is the signup strategy
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, username, password, done) {
      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      // Then, using the Sequelize user model we initialized earlier as User, we check to see if the user already exists, and if not we add them.
      User.findOne({
        where: {
          username: username
        }
      }).then(function (user) {

        if (user) {
          return done(null, false, {
            message: 'That username is already taken'
          });

        } else {
          var userPassword = generateHash(password);
          var data =
          {
            username: username,
            password: userPassword
          };

          // Add the new user to the database
          User.create(data).then(function (newUser) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  ));

// This is the signin strategy
passport.use('local-signin', new LocalStrategy(
  {
      // by default, local strategy uses username and password
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
  },


  function(req, username, password, done) {
      var User = user;
      // this method checks if the password entered matches the database
      var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
      }

      // Check if the user exists in the database
      User.findOne({
          where: {
              username: username
          }
      }).then(function(user) {
          if (!user) {
              return done(null, false, {
                  message: 'User does not exist'
              });
          }

      // here we check if the password entered matches the database
      if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                  message: 'Incorrect password.'
              });
          }

          var userinfo = user.get();
          return done(null, userinfo);

      }).catch(function(err) {

          console.log("Error:", err);
          return done(null, false, {
              message: 'Something went wrong with your Signin'
          });

      });
  }

));


  //serialize
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // deserialize user 
  passport.deserializeUser(function (id, done) {

    User.findOne({
      where: {
        id: id
      }
    }).then(function (user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

}
