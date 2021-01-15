const routeIndex = require('express').Router();
const temperaturaController = require("../controller/TemperaturaCtrL")

routeIndex.get("/",  temperaturaController.findAll)
routeIndex.get("/reload",  temperaturaController.findAll)

module.exports = routeIndex