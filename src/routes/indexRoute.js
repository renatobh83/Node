const routeIndex = require('express').Router();
const temperaturaController = require("../controller/TemperaturaCtrL")

routeIndex.get("/",  temperaturaController.findAll)
routeIndex.get("/viewFilter/:view",  temperaturaController.viewFilter)

module.exports = routeIndex