const express = require("express");
const twig = require("twig");
const passport = require("passport");
const session = require("express-session");
const Strategy = require("passport-local").Strategy;

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  }

  res.redirect("/login");
};

const MockUser = {
  id: 1,
  username: "miehilmie",
  first: "Muhammad Hilmi",
  last: "Hassan"
};

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
      if (username === "miehilmie" && password === "testing") {
        return done(null, MockUser);
      }

      done("Invalid credentials");
    }
  )
);

/**
 * Session serialization / deserialization
 */
passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
  if (id === 1) {
    return callback(null, MockUser);
  }

  callback("User not found");
});

/**
 * Initialize application
 */
const app = express();

/**
 * Setting template engine
 */
app.engine("twig", twig.__express);
app.set("views", "./app/views");
app.set("view engine", "twig");
app.set("view options", { layout: false });

/**
 * Body Parser
 */
app.use(require("body-parser").urlencoded({ extended: true }));

/**
 * Initialize Session & Passport
 */
app.use(
  session({ secret: "123412341234", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
app.get("/", require("./app/controllers/indexController"));
app.get("/login", require("./app/controllers/loginController").get);

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  require("./app/controllers/loginController").post
);

app.get("/home", isAuthenticated, require("./app/controllers/homeController"));

var startApp = () => {
  console.log("App jalan dekat port 8811!");
};

app.listen(8811, startApp);
