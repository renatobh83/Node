const Temperaturas = require("../models/temperatura")
const moment = require("moment")



	function newDateString(days) {
        const date =moment(days).format("DD/M HH:mm");
      
			return date
		}
class TemperaturaController {
    async findAll(req, res){
        let limit = 25
        if(req.params.view) limit = parseInt(req.params.view)
        const temperaturas = await Temperaturas.find({}, null, {sort: {data:1}, limit, skip:10})
        // res.render("index", {Temp: temperaturas})
    	const data =temperaturas.map(temp =>[
         temp.data.DHT11.Temperature]
         )
         const timeFor =[]
        const time = temperaturas.map(a => newDateString(a.data.Time))
      
        res.render("index", {div: data, time:time})
    }
    
    async viewFilter(req, res){
          let limit = 5
         if(req.params.view) limit = parseInt(req.params.view)
         const temperaturas = await Temperaturas.find({}, null, {sort: {data:-1}, limit})
          res.send(temperaturas)
          res.render("index", {Temp: temperaturas})
    }
        async chart(req, res){
        let limit = 5
        if(req.params.view) limit = parseInt(req.params.view)
        const temperaturas = await Temperaturas.find({}, null, {sort: {data:-1}, limit})
       //  res.render("index", {Temp: temperaturas})
     
        res.send(temperaturas)
    }
}

module.exports = new TemperaturaController()