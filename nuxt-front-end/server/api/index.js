const express = require('express')
const router = express.Router()
const app = express()
import axios from 'axios'
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? process.env.devUrl : process.env.prodUrl;
const url = require("url");

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.get('/order', (req, res, next) => {
  axios.get('/api/order').then(result => {
    req.session.captcha = result.data.captcha;
    // console.log(req);
    res.type('svg');
    res.send(result.data.captchImg);

  }).catch(err => {
    console.log(err);
  })
})

router.post('/order', (req, res, next) => {
  console.log('Session captcha :' + req.session.captcha);
  console.log("req : " +JSON.stringify(req.body)); 
  const {captcha} = req.body;
  console.log(captcha == req.session.captcha);
  if (captcha != req.session.captcha){
    return res.status(400).json({msg:"驗證碼錯誤"});
  }else{
    axios.post('/api/order', req.body, {
    }).then(result=>{
      // console.log(result)
      return res.status(200).json({msg:"OK"})
    }).catch(err=>{
      console.log(err);
    })
  }

  
  // res.json(req.body);
  // res.send(req);
  // axios.post('/api/order', req.body, {
  //     headers: header,
  //   }).then(result=>{
  //     console.log(result)
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // axios.get('/api/order').then(result => {
  //   req.session.captcha = result.data.captcha;
  //   res.type('svg');
  //   res.send(result.data.captchImg);

  // }).catch(err=>{
  //   console.log(err);
  // })
})
// router.post('/store/login', (req, res) => {
//   const StoresController = require('../controller/admin/stores')
//   StoresController.login(req.body.email, req.body.password).then(
//     response => {
//       req.session.authStore = {
//         // 記錄回傳的必要資訊
//         token = response.data.token,
//         expire_time = response.data.expire_time
//       }
//       return res.json({ name: req.body.email })
//     },
//     err => {
//       res.status(401).json({ message: err })
//     }
//   )
// })

// router.post('/logout', (req, res) => {
//   delete req.session.authStore
//   res.json({ ok: true })
// })

module.exports = {
  path: '/api2',
  handler: router
}