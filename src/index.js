const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");
const route = require("./routes");
const express = require("express");
const { middleware } = require("./configs");
require("dotenv").config();
//
const server = jsonServer.create();
const port = process.env.PORT || 3005;
//config
server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middleware.configMethod);
server.use("/static", express.static(path.join(__dirname, "public")));
// server.use(router);
route(server);

server.listen(port, () => {
  console.log("JSON Server is running");
});
