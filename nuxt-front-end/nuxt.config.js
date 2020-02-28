const pkg = require("./package");
const webpack = require("webpack");
const bodyParser = require("body-parser");
const session = require("express-session");

module.exports = {
  mode: "universal",
  server: {
    // port: 80, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "永盛堂中藥行",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "永盛堂中藥行，提供中藥材，順天本草、勝昌食品、蜜餞、保健食品等等周邊商品。【電話】2531-0309 【地址】中山區吉林路191號."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/earlyaccess/cwtexkai.css"
      }
    ],
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAP8uxMTg1l4APwuezlZXqYhTf0J4HeHB0"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
    "~/node_modules/material-icons/iconfont/material-icons.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/bootstrap.js",
    { src: "~/plugins/libs/jquery.textillate.js", ssr: false },
    { src: "~/plugins/libs/jquery.lettering.js", ssr: false },
    { src: "~plugins/vue-pagination-2.js", ssr: false },
    { src: "~plugins/vuesax.js", ssr: false },
    "~/plugins/axios.js"
  ],
  /*
   ** Add server middleware
   ** Nuxt.js uses `connect` module as server
   ** So most of express middleware works with nuxt.js server middleware
   */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    // session middleware
    session({
      secret: "super-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 60 * 3 }
    }),
    // Api middleware
    "~/server/api/index.js"
  ],
  env: {
    devUrl: "http://localhost:8080",
    prodUrl: "http://52.74.212.171:8080",
    devNuxtURL: "http://localhost:3000",
    prodNuxtURL: "http://ec2-52-74-212-171.ap-southeast-1.compute.amazonaws.com"
  },

  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-leaflet"],
  // proxy: {
  //   '/api': {
  //     target: 'https://example.com/',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '/',
  //     },
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    vendor: [
      "jquery",
      "bootstrap",
      "textillate",
      "lettering",
      "vue-pagination-2"
    ],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    extend(config, ctx) {}
  }
};
