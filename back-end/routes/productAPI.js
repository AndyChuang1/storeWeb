﻿'use strict';
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

router.post('/order',function(req,res){
    const { name,idCard,phone,Mphone,address,zip,payment,deliverTime,product,status,total} = req.body
    const OrderList = JSON.parse(product)
    
    sql.insertOrder(name,idCard,phone,Mphone,address,zip,payment,status,deliverTime,total,(result)=>{
        if(result.err){
            res.status(400).json({Success: false,Msg:result.err})
        }else{
            res.status(200).json({Success: true})
            OrderList.forEach(item => {
                const {title,price,quantity}=item;
                console.log(title);
                sql.insertOrderDetail(title,quantity,price,result.orderId,(result)=>{
                    res.status(200).end(result)
                })
            });
        }
    })
})
module.exports = router;