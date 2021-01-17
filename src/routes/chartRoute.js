const routeChart = require('express').Router();
const temperaturaController = require("../controller/TemperaturaCtrL")

routeChart.get("/chart",  temperaturaController.chart)

module.exports = routeChart