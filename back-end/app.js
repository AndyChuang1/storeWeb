var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var cors = require('cors')
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var formPostRouter = require('./routes/formpost');
var productListRouter = require('./routes/productListAPI');
var secret =require('./config').secret;

var sql = require('./lib/sqlHelper')
connectDB().then(()=>{
    sql.getUser('admin',(result)=>{
        if(result.length<=0){
            sql.createAdmin();
        }
    });

    sql.getUser('yongsn',(result)=>{
        if(result.length<=0){
            sql.createUser();
        }
    })
    
})

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('secret', secret)

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/apipost',formPostRouter)
app.use('/api', productListRouter);

const uploadFolder = './public/product';
createFolder(uploadFolder);

function createFolder(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        console.log(e)
        fs.mkdirSync(folder);
    }  
};

function connectDB(){
    return new Promise((resolve,reject)=>{
        sql.connectDB();
        resolve('done');
    })
}
module.exports = app;
