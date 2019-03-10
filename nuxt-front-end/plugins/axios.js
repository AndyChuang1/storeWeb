import axios from 'axios'
import Qs from 'qs'

export default function (ctx, inject) {
  axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? process.env.devUrl : process.env.prodUrl;
  axios.defaults.transformRequest =[function (data, headers) {
    // Do whatever you want to transform the data
    data = Qs.stringify(data);
        return data;
  
  }]
  /* 注入 Nuxt Instance Property */
  ctx.$axios = axios
  inject('axios', axios)
}
