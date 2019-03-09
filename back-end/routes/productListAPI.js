'use strict';
var express = require('express');
var router = express.Router();
var sql = require('../lib/sqlHelper')

/* GET users listing. */
router.get('/productList', function (req, res) {
    const types = req.query.types
     sql.getProductList(types).then(result=>{
         console.log(result);
         res.status(200).end(result)
     })
  
});

module.exports = router;