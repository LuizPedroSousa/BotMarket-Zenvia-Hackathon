const express = require('express');
const Routers = require('./routers');
const cors = require('cors');
require('dotenv').config();

class App {
  constructor () {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json()); 
    this.express.use(cors());
  }

  routes() {
    this.express.use(Routers);
  }
}

module.exports = new App().express;