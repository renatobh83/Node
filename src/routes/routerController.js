const indexRoute = require("./indexRoute")
const routerController = (app) =>{
  app.use(indexRoute)
}

module.exports = routerController