const Temperaturas = require("../models/temperatura")


class TemperaturaController {
    async findAll(req, res){
        let limit = 5
        if(req.params.view) limit = parseInt(req.params.view)
        const temperaturas = await Temperaturas.find({}, null, {sort: {data:-1}, limit})
        res.render("index", {Temp: temperaturas})
       
      
    }
}

module.exports = new TemperaturaController()