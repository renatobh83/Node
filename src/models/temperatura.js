const mongoose = require('../database/database');


const TemperaturaSchema = new mongoose.Schema({
    topico:{
        type: String,
        required:true,
        uppercase:true,
        trim:true
    },
    data:{
        type: Object
    },
    dadosMaxima: {
      type: Object
    },
     dadosMinima: {
      type: Object
    },
    createdAt: {
        type: Date,
        default: Date.now() - 3 * 60 * 60 * 1000,
      },
      updatedAt: {
        type: Date,
        default: Date.now() - 3 * 60 * 60 * 1000,
      },
})
const Temperaturas = mongoose.model("Temperaturas", TemperaturaSchema)
module.exports = Temperaturas