const api = require("../api");
const jsonServer = require("json-server");
const path = require("path");

const router = jsonServer.router(path.join(__dirname, "../data/db.json"));

function route(app) {
  app.use("/api", router);
  app.get("/", api.index);
  app.post("/user", api.user);
}
module.exports = route;
