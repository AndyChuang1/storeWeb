const jwt = require('jsonwebtoken');
var secret =require('../config').secret;
module.exports ={
    createToken(user,pwad){
        return jwt.sign({user:user},secret, {
            expiresIn: 60*60*24*30
          })
  
    },
    verifyToken(token){
        return new Promise((resolve,reject)=>{
            jwt.verify(token,secret,(err,decoded)=>{
                if (err){
                    reject(error);
                }else{
                    resolve(decoded);
                }
            })
        })
    }
}