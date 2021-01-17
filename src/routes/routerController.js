const indexRoute = require("./indexRoute")
const chartRoute = require("./chartRoute")


const routerController = (app) =>{
  app.use(indexRoute)
  app.use(chartRoute)
}

module.exports = routerController