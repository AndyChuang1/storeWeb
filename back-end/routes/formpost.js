﻿'use strict';
var express = require('express');
var router = express.Router();
var multer = require('multer');
var sql = require('../lib/sqlHelper');
var auth = require('../lib/auth');
const fs = require('fs');
const path = require('path');
const uploadFolder = './public/product';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadFolder);
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString().split('T')[0] + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
}).single('productImage');

function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    req.fileValidationError = 'Type wrong';
    return cb(null, false, new Error('goes wrong on the mimetype'));
  }
}
//midleware
router.use((req, res, next) => {
  console.log('Upload middleware');

  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    auth
      .verifyToken(token)
      .then((decoded) => {
        req.decoded = decoded;
        next();
      })
      .catch((verifyErr) => {
        console.log(verifyErr);
        res.status(401).send({
          msg: 'Invalid Token',
          success: false,
        });
      });
  } else {
    res.status(401).send({
      success: false,
      message: 'No token provided.',
    });
  }
});
/* GET home page. */
router.post('/product', function (req, res, next) {
  //console.log(req)
  upload(req, res, function (err) {
    const { name, unit, types, price, detail, sales } = req.body;

    if (req.fileValidationError) {
      //415 Unsupported Media Type
      res.status(415).json({ Success: false, message: req.fileValidationError });
    } else if (err) {
      // 413 Payload Too Large
      res.status(413).json({ Success: false, message: err.message });
    } else {
      if (req.file) {
        const path = '/product/' + req.file.filename;
        sql.insertData(name, unit, types, price, detail, path, sales);
        return res.status(200).json({ Success: true });
      }
      return res.status(400).json({ message: '請新增圖片' });
    }
  });

  //res.status(200).json({ Success: true })
  // res.status(200).end('Success!!')
});
router.put('/product/:id', function (req, res, next) {
  upload(req, res, function (err) {
    const { name, unit, types, price, detail, sales } = req.body;
    const { id } = req.params;
    if (req.fileValidationError) {
      //415 Unsupported Media Type
      res.status(415).json({ Success: false, message: req.fileValidationError });
    } else if (err instanceof multer.MulterError) {
      // 413 Payload Too Large
      res.status(413).json({ Success: false, message: err.message });
    } else {
      if (req.file) {
        const path = '/product/' + req.file.filename;
        sql.updateProudct(name, unit, types, price, detail, path, sales, id);
        res.status(200).json({ Success: true });
      } else {
        console.log('Image path keep same');
        const path = null;
        sql.updateProudct(name, unit, types, price, detail, path, sales, id);
        res.status(200).json({ Success: true });
      }
    }
  });

  //res.status(200).json({ Success: true })
  // res.status(200).end('Success!!')
});

router.delete('/product/:id', async function (req, res, next) {
  const { id } = req.params;
  const { name } = req.query;
  try {
    const { path: ImagePath } = await sql.getProductPathById(id);
    const realPath = path.join(process.cwd(), 'public', ImagePath);
    fs.unlinkSync(realPath);
    sql.delProduct(name, id, (result) => {
      if (result.err) {
        console.log(result.err);
        res.status(400).json({ Success: false, Msg: 'Delete error' });
      } else {
        res.status(200).json({ Success: true });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ Success: false, Msg: 'Delete error' });
  }

  // res.status(200).json({ Success: true })
  // res.status(200).json({ realPath });
});

router.post('/types', function (req, res, next) {
  //console.log(req)
  const { name } = req.body;
  try {
    sql.insertTypes(name, (result) => {
      if (result.err) {
        res.status(400).json({ Success: false, Msg: 'Same types exist' });
      } else {
        res.status(200).json({ Success: true });
      }
    });
  } catch (e) {
    console.log(e);
  }
});
router.put('/types/:id', function (req, res, next) {
  //console.log(req)
  const { id } = req.params;
  const { name } = req.body;
  try {
    sql.updateType(name, id, (result) => {
      if (result.err) {
        res.status(400).json({ Success: false, Msg: 'Same types exist' });
      } else {
        res.status(200).json({ Success: true });
      }
    });
  } catch (e) {
    console.log(e);
  }
});

router.delete('/types/:id', function (req, res, next) {
  const { id } = req.params;
  const { name } = req.query;

  sql.delType(name, id, (result) => {
    if (result.err) {
      console.log(result.err);
      res.status(400).json({ Success: false, Msg: 'Delete error' });
    } else {
      res.status(200).json({ Success: true });
    }
  });

  // res.status(200).json({ Success: true })
  // res.status(200).end('Success!!')
});

router.delete('/order/:id', function (req, res, next) {
  const { id } = req.params;
  sql.delOrder(id, (result) => {
    if (result.err) {
      console.log(result.err);
      res.status(400).json({ Success: false, Msg: 'Delete error' });
    } else {
      res.status(200).json({ Success: true });
    }
  });

  // res.status(200).json({ Success: true })
  // res.status(200).end('Success!!')
});
router.put('/order/:id', function (req, res, next) {
  const { id } = req.params;
  const { status } = req.body;

  sql.updateOrderStatus(status, id, (result) => {
    if (result.err) {
      console.log(result.err);
      res.status(400).json({ Success: false, Msg: 'Delete error' });
    } else {
      res.status(200).json({ Success: true });
    }
  });

  // res.status(200).json({ Success: true })
  // res.status(200).end('Success!!')
});

router.get('/order', function (req, res, next) {
  const { orderId } = req.query;
  sql
    .getOrderList(orderId)
    .then((result) => {
      res.status(200).end(result);
    })
    .catch((err) => {
      res.status(400).end(err);
    });
});
router.get('/orderdetail', function (req, res, next) {
  const { orderId } = req.query;
  sql
    .getOrderDetail(orderId)
    .then((result) => {
      res.status(200).end(result);
    })
    .catch((err) => {
      res.status(400).end(err);
    });
});

router
  .route('/deliver')
  .post(function (req, res) {
    const { type, main, offshore, extra } = req.body;
    sql.insertDeliverFee(type, main, offshore, extra, (result) => {
      if (result.err) {
        console.log(result.err);
        res.status(400).json({ Success: false, Msg: 'insert deliver Fee error' });
      } else {
        res.status(200).json({ Success: true });
      }
    });
    // res.end(test);
  })
  .put(function (req, res) {
    console.log(req.body);
    const updateData = req.body;
    for (const type in updateData) {
      const typeData = updateData[type];
      const { main, offshore, extra } = typeData;
      sql.updateDeliverFee(type, main, offshore, extra, (result) => {
        if (result.err) {
          console.log(result.err);
          res.status(400).json({ Success: false, Msg: 'Update deliver Fee error' });
          return;
        }
      });
    }
    res.status(200).json({ Success: true });
  });

module.exports = router;
