const Router = require("express").Router();
const NotificationController = require("./controllers/NotificationController")
const HttpServerController = require("./controllers/HttpServerController")

Router.get("/ping", NotificationController.ping)
Router.get("/", HttpServerController.index)
module.exports = Router