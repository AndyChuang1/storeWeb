const jwt = require('jsonwebtoken');
const crypto = require('crypto');
var secret =require('../config').secret;
module.exports ={
    createToken(user,hashPawd){
        return jwt.sign({user:user,pawd:hashPawd},secret, {
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
    },
    hashPawd(password,salt){
        // let salt2  = crypto.randomBytes(16).toString('hex'); 
        // const hash = crypto.createHmac('sha256','5d1a10a0fe1f8ee3b01ecac9ea632f2d').update(usually).digest('hex');
        // const has2 = crypto.createHmac('sha256','32db617abaffd2a49f0a929492616d7d').update(uncle).digest('hex');
      
        const hash = crypto.createHmac('sha256',salt).update(password).digest('hex');
        return hash ;

       
    }
}