const routeIndex = require("express").Router();
const temperaturaController = require("../controller/TemperaturaCtrL");

routeIndex.get("/", temperaturaController.findAll);
routeIndex.get("/temp", temperaturaController.getAll);
module.exports = routeIndex;
