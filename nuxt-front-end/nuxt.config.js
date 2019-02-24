const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '永盛堂中藥行',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script:[
      {src:'https://maps.googleapis.com/maps/api/js?key=AIzaSyAP8uxMTg1l4APwuezlZXqYhTf0J4HeHB0'},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/bootstrap.js",
    {src:'~/plugins/libs/jquery.textillate.js',ssr:false},
    {src:'~/plugins/libs/jquery.lettering.js',ssr:false},
    {src:"~plugins/vue-pagination-2.js",ssr:false},
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
   ** You can extend webpack config here
   */

    vendor: ['jquery', 'bootstrap','textillate','lettering','vue-pagination-2'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {

    }
  }

}

