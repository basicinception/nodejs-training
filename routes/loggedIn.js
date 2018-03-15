var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.use(require("../app/middlewares/isAuthenticated"));

// define the home page route
router.get("/home", require("../app/controllers/homeController"));

module.exports = router;
