class NewsController {
  // Get /news
  index(req, res) {
    res.render("news");
  }
  //  news:[slug]
  show(req, res) {
    res.send("News Detail");
  }
}

module.exports = new NewsController();
