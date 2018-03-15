var express = require("express");
var passport = require("../config/auth");
var router = express.Router();

// define the home page route
router.get("/", require("../app/controllers/indexController"));
router.get("/login", require("../app/controllers/loginController").get);
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  require("../app/controllers/loginController").post
);

module.exports = router;
