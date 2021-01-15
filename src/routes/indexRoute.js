const routeIndex = require('express').Router();
const temperaturaController = require("../controller/TemperaturaCtrL")

routeIndex.get("/",  temperaturaController.findAll)

module.exports = routeIndex