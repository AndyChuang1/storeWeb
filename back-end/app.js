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

var sql = require('./lib/sqlHelper')
sql.connectDB();

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/formpost',formPostRouter)
app.use('/productList', productListRouter);

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

module.exports = app;
