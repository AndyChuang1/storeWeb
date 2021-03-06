const express = require("express");
const consola = require("consola");
var cors = require("cors");
const { Nuxt, Builder } = require("nuxt");
const bodyParser = require("body-parser");
const app = express();

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const {
    host = process.env.HOST || "127.0.0.1",
    port = process.env.PORT || 3000
  } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }
  // app.use(bodyParser.json()); // for parsing application/json
  // app.use(bodyParser.urlencoded({ extended: true }));
  // Give nuxt middleware to express
  app.use(cors());
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
