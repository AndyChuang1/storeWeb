// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/css/animate.css";

import "@/assets/javascripts/jquery-3.2.1.min.js";
import "@/assets/javascripts/jquery.lettering.js";
import "@/assets/javascripts/jquery.textillate.js";
import axios from 'axios';
import store from './store'
Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
