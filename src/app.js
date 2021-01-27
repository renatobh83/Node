const path = require("path");
const express = require("express");
const cors = require("cors");
const hbs = require("hbs");
const routerController = require("./routes/routerController");

const diretorioPublico = path.join(__dirname, "./public");
const diretorioViewsTemplates = path.join(__dirname, "../templates/views");
const diretorioPartialsTemplates = path.join(
  __dirname,
  "../templates/partials"
);
class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.express.use(express.json());
    this.express.set("view engine", "hbs");
    this.express.set("views", diretorioViewsTemplates);
    hbs.registerPartials(diretorioPartialsTemplates);
    hbs.registerHelper("dateFormat", require("handlebars-dateformat"));
    this.express.use(express.static(diretorioPublico));
    this.express.use(
      cors({
        origin: [
          "http://localhost:3000",
          "https://dashboardmqtt.herokuapp.com/",
          "http://192.168.1.47:3000",
        ],
        credentials: true,
      })
    );
  }
  routes() {
    routerController(this.express);
  }
}
module.exports = new AppController().express;
