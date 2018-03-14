module.exports = {
  get: (req, res) => {
    res.render("pages/login");
  },

  post: (req, res) => {
    res.redirect("/home");
  }
};
