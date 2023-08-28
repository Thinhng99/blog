class HomeController {
  index(req, res) {
    res.render("home");
  }
  show(req, res) {
    res.send("Hello");
  }
}

module.exports = new HomeController();
