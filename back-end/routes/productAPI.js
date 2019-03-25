'use strict';
var express = require('express');
var router = express.Router();
var sql = require('../lib/sqlHelper')

/* GET users listing. */
router.get('/productList', function (req, res) {
    const types = req.query.types;
    const name=req.query.name;
     sql.getProductList(types,name).then(result=>{
        //  console.log(result);
         res.status(200).end(result)
     }).catch(err=>{
         console.log(err);
         res.status(400).end(err)
     })
  
});
router.get('/productTypes', function (req, res) {
     sql.getProductTypes().then(result=>{
        //  console.log(result);
         res.status(200).end(result)
     }).catch(err=>{
        console.log(err);
        res.status(400).end(err)
     })
  
});

module.exports = router;