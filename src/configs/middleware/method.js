const getTimeNow = require("../../handle/getTimeNow");

function post(req) {
  req.body.createdAt = getTimeNow();
  req.body.updateAt = getTimeNow();
}
function patch(req) {
  req.body.updateAt = getTimeNow();
}
function configMethod(req, res, next) {
  const method = req.method;
  if (method === "POST") {
    post(req);
    // next();
  }
  if (method === "PATCH") {
    patch(req);
    // next();
  }
  next();
}
module.exports = configMethod;