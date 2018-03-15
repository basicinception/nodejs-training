var passport = require("passport");
const Strategy = require("passport-local").Strategy;

/**
 * Authentication
 */
passport.use(
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, done) => {
      require("../app/models/User")
        .where("username", username)
        .where("password", password)
        .fetch()
        .then(user => {
          if (!user) {
            return done(null, false);
          }

          done(null, user.serialize());
        })
        .catch(err => {
          done(err);
        });
    }
  )
);

/**
 * Session serialization / deserialization
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  require("../app/models/User")
    .where("id", id)
    .fetch()
    .then(user => {
      if (!user) {
        return done(null, false);
      }

      done(null, user.serialize());
    });
});

module.exports = passport;
