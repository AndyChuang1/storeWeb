'use strict';
var express = require('express');
var router = express.Router();
var multer = require('multer')
var sql = require('../lib/sqlHelper')
var auth = require('../lib/auth')



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
//midleware
router.use( (req, res, next) =>{
    console.log(req)

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
 
    if (token) {
        auth.verifyToken(token).then(decoded => {
            req.decoded = decoded
            next()
        }).catch(verifyErr => {
            console.log(verifyErr);
            res.status(401).send({
                msg: "Invalid Token",
                success: false
            });
        })
    } else {
        res.status(401).send({
            success: false,
            message: 'No token provided.'
        })
    }
})
/* GET home page. */
router.post('/product',function (req, res, next) {
  //console.log(req)
    upload(req, res, function (err) {
        const { name, unit, types, price, detail, sales } = req.body

        if (req.fileValidationError) {
            //415 Unsupported Media Type
            res.status(415).json({ Success: false, message: req.fileValidationError })
        } else if (err instanceof multer.MulterError) {
            // 413 Payload Too Large
            res.status(413).json({ Success: false, message: err.message })
        } else {
            if (req.file.filename) {
                const path = '/product/' + req.file.filename
                sql.insertData(name, unit, types, price, detail, path, sales)
                res.status(200).json({ Success: true })
            }

        }
    })

    //res.status(200).json({ Success: true })
    // res.status(200).end('Success!!')
});




module.exports = router;
