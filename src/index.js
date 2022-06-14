const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");
const route = require("./routes");
const express = require("express");
require("dotenv").config();
//
const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4002;
//config
server.use(cors());
server.use("/static", express.static(path.join(__dirname, "public")));
// server.use(middlewares);
route(server);
// server.use(router);

server.listen(port, () => {
  console.log("JSON Server is running");
});
