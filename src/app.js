const express = require('express');
const routes = require('./routes');

// RAYANA TAVA AQUI O ERROR! KKKKKKKKKKKK
// LEMBREI ISSO DPS KKKKK
require('./database');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
