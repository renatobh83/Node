const Temperaturas = require("../models/temperatura")


class TemperaturaController {
    async findAll(req, res){
        const temperaturas = await Temperaturas.find()
        res.render("index", {Temp: temperaturas})
       
      
    }
}

module.exports = new TemperaturaController()