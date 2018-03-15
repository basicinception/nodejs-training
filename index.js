const express = require("express");
const twig = require("twig");
const session = require("express-session");

/**
 * Configure Model
 */
var Bookshelf = require("bookshelf")(require("./config/db"));
Bookshelf.plugin("registry");
global.Bookshelf = Bookshelf;

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
const passport = require("./config/auth");

app.use(
  session({ secret: "123412341234", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

/**
 * Routes
 */
app.use("/", require("./routes/guest"));
app.use("/", require("./routes/loggedIn"));

var startApp = () => {
  console.log("App jalan dekat port 8811!");
};

app.listen(8811, startApp);
