import axios from 'axios'

export default function (ctx, inject) {
  axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? process.env.devUrl : process.env.prodUrl;
 
  /* 注入 Nuxt Instance Property */
  ctx.$axios = axios
  inject('axios', axios)
}
