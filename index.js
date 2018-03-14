const express = require("express");
const twig = require("twig");

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
 * Routes
 */
app.get("/", require("./app/controllers/indexController"));

app.get("/home", require("./app/controllers/homeController"));

var startApp = () => {
  console.log("App jalan dekat port 8811!");
};

app.listen(8811, startApp);
