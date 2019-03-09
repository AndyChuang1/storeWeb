'use strict';
var express = require('express');

var router = express.Router();
var sql = require('../lib/sqlHelper')
var auth = require('../lib/auth')

/* GET users listing. */
router.post('/', function (req, res) {
    
    sql.getUser(req.body.name,(result)=>{
        const {name,pawd}=  result[0]  
        if(!name){
            res.json({ success: false, message: 'Authenticate failed. User not found'})
        }else if(name){
            if(pawd!=req.body.pawd){
                res.json({ success: false, message: 'Authenticate failed. Wrong password'})
            }else{
                const token = auth.createToken(name,pawd);
                res.json({
                    success:true,
                    message:'login Successfully',
                    token: token
                })
            }
        }
    })

    
});

module.exports = router;