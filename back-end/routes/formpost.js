'use strict';
var express = require('express');
var router = express.Router();
var multer = require('multer')
var sql= require('../lib/sqlHelper')



const uploadFolder = './public/product';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, uploadFolder)
    },
    filename(req, file, cb) {
        cb(null, new Date().toLocaleDateString() + file.originalname)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
}).single('productImage')

function fileFilter(req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
       req.fileValidationError = 'Type wrong';
        return cb(null, false, new Error('goes wrong on the mimetype'));
    }
}
/* GET home page. */
router.post('/product', function (req, res, next) {
    upload(req, res, function (err) {
        const {name,unit,price,detail} = req.body
        
        if(req.fileValidationError){
            //415 Unsupported Media Type
            res.status(415).json({ Success: false, message: req.fileValidationError })
        }else if(err instanceof multer.MulterError) {
            // 413 Payload Too Large
            res.status(413).json({ Success: false, message: err.message })
        } else {
            const path = '/product/'+req.file.filename
            sql.insertData(name,unit,price,detail,path)
            res.status(200).json({ Success: true })
        }
        

    })
   
    //res.status(200).json({ Success: true })
    // res.status(200).end('Success!!')
});



module.exports = router;
