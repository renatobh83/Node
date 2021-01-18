const Temperaturas = require("../models/temperatura")
const moment = require("moment")


let temperatura = 0.0
let high = 0.0
let maximaTemp = ''
let atual = ''
let low = 0.0
let minTemp = ''
function newDateString(days) {
const date =moment(days).format("DD/M HH:mm");
    return date
}
class TemperaturaController {
    async findAll(req, res){
        let limit =200
        if(req.params.view) limit = parseInt(req.params.view)
        const temperaturas = await Temperaturas.find({}, null, {sort: {data:-1}, limit})
        // res.render("index", {Temp: temperaturas})
   
        temperaturas.map((temp) =>{
           if(high === 0.0){ 
              high = parseFloat(temp.dadosMaxima.DHT11.Temperature)
                   maximaTemp = temp.dadosMaxima
            }
           
          
           if(parseFloat(temp.dadosMaxima.DHT11.Temperature) > high) {
                maximaTemp = temp.dadosMaxima
                high = parseFloat(temp.dadosMaxima.DHT11.Temperature)
            }
           if(low === 0.0){ 
              low = parseFloat(temp.dadosMinima.DHT11.Temperature)
              minTemp = temp.dadosMinima
            }
           if(parseFloat(temp.dadosMinima.DHT11.Temperature) < low){ 
                 minTemp = temp.dadosMinima
                  low = parseFloat(temp.dadosMinima.DHT11.Temperature)
           }
        })
    	const data =temperaturas.map(temp =>[ temp.data.DHT11.Temperature])
  
        const time = temperaturas.map(a => newDateString(a.data.Time))
       
        res.render("index", {div: data, time:time, max: maximaTemp, min: minTemp})
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