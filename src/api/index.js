class Index {
  constructor() {}
  index(req, res) {
    res.send("in api");
  }
  user(req, res) {
    res.redirect("http://127.0.0.1:5500/index.html");
  }
}
module.exports = new Index();
