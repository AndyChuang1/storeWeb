var sqlite = require("sqlite3").verbose();
const destination = './db/product.db'
var db = new sqlite.Database(destination);

module.exports = {

    connectDB() {

        db.serialize(() => {
            db.run("CREATE TABLE IF NOT EXISTS product(name TEXT PRIMARY KEY,unit TEXT,types TEXT,price INTEGER,detail TEXT,path TEXT,sales INTEGER)");
            db.run("CREATE TABLE IF NOT EXISTS user(name TEXT PRIMARY KEY,salt TEXT,hashPawd TEXT)");
            db.run("CREATE TABLE IF NOT EXISTS prodTypes(name TEXT PRIMARY KEY)");
            db.run(`CREATE TABLE IF NOT EXISTS productOrder
            (
              orderId INTEGER PRIMARY KEY, name  TEXT NOT NULL,
              idCard TEXT,
              phone TEXT,
              Mphone TEXT NOT NULL,
              address TEXT NOT NULL,
              zip INTEGER,
              payment TEXT NOT NULL,
              deliverTime TEXT NOT NULL,
              status TEXT NOT NULL,
              updateTime TEXT NOT NULL,
              total INTEGER
            )`);
            db.run(`CREATE TABLE IF NOT EXISTS orderDetail
            (
              DetailId INTEGER PRIMARY KEY, 
              name  TEXT NOT NULL,
              qun INTEGER NOT NULL,
              price INTEGER NOT NULL,
              orderId INTEGER NOT NULL,
              FOREIGN KEY(orderId) REFERENCES productOrder(orderId)
            )`);
            console.log('DB connected')

        })
    },
    createAdmin() {
        const sqlStatement = 'INSERT INTO user (name,salt,hashPawd)VALUES(?,?,?)'
        db.serialize(() => {
            db.run(sqlStatement, ['admin', '5d1a10a0fe1f8ee3b01ecac9ea632f2d','2baf28cb80b45541ef7fcb4d7cddf343ded86372961a58b402e158a102e3c755'], function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    console.log('Admin Create')

                }

            })

        })
    },
    createUser() {
        const sqlStatement = 'INSERT INTO user (name,salt,hashPawd)VALUES(?,?,?)'
        db.serialize(() => {
            db.run(sqlStatement, ['yongsn', '32db617abaffd2a49f0a929492616d7d','fd694438dec7f3d4e0045427126296b343c5df8751a05ff58787df2c64261290'], function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    console.log('User Create')

                }

            })

        })
    },
    getUser(name, cb) {
        const sqlStatement = `SELECT name,salt,hashPawd from user where name =?`;

        db.serialize(() => {

            db.all(sqlStatement, name, function (err, rows) {
                if (err) {
                    console.log('getUser error all')
                    throw err;
                } else {
                    const user = JSON.stringify(rows)
                    console.log('getUser : ', user)
                    // cb(rows) 
                    if (rows.length <= 0) {
                        cb([{ name: 'no', pawd: 'no' }])
                    } else {
                        cb(rows);
                    }


                }

            })

        })

    },
    insertData(name, unit, types, price, detail, path, sales) {
        const sqlStatement = `INSERT INTO product (name, unit, types, price, detail, path, sales)VALUES(?,?,?,?,?,?,?) ON CONFLICT(name)
        DO UPDATE SET unit=excluded.unit,price=excluded.price,detail=excluded.detail,path=excluded.path,types=excluded.types, sales=excluded.sales`
        db.serialize(() => {

            db.run(sqlStatement, [name, unit, types, price, detail, path, sales], function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    console.log('Data Inserted' + ' Product:' + name)

                }

            })

        })
    },

    insertTypes(name, cb) {
        const sqlStatement = `INSERT INTO prodTypes (name)VALUES(?)`
        db.serialize(() => {

            db.run(sqlStatement, [name], function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    cb({ success: true })
                    console.log('Types Inserted' + ' Types:' + name)
                }

            })

        })
    },
    insertOrder(name, idCard, phone, Mphone, address, zip, payment, status, deliverTime, total, cb) {
        const sqlStatement = `INSERT INTO productOrder (name,idCard,phone,Mphone,address,zip,payment,status,deliverTime,total,updateTime) VALUES(?,?,?,?,?,?,?,?,?,?,datetime('now', 'localtime'))`
        db.serialize(() => {

            db.run(sqlStatement, [name, idCard, phone, Mphone, address, zip, payment, status, deliverTime, total], function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    cb({ success: true, orderId: this.lastID });
                    console.log('Order Inserted' + ' Order:' + name)
                }

            });

        })
    },
    insertOrderDetail(name, qun, price, orderId, cb) {
        const sqlStatement = `INSERT INTO orderDetail (name,qun,price,orderId) VALUES(?,?,?,?)`
        db.serialize(() => {

            db.run(sqlStatement, [name, qun, price, orderId], function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    cb({ success: true });
                    console.log('OrderDetail Inserted' + ' Order:' + name)
                }

            });

        })
    },
    updateProudct(name, unit, types, price, detail, path, sales, id) {
        const sqlStatement = `UPDATE product set name=?,unit=?,types=?,price=?,detail=?,path=?,sales=? WHERE rowid = ?`;
        const sqlStatementImageSame = `UPDATE product set name=?,unit=?,types=?,price=?,detail=?,sales=? WHERE rowid = ?`;
        db.serialize(() => {
            if (path) {
                db.run(sqlStatement, [name, unit, types, price, detail, path, sales, id], function (err, rows) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('Data Update' + ' Product:' + name)
                    }
                });
            } else {
                db.run(sqlStatementImageSame, [name, unit, types, price, detail, sales, id], function (err, rows) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('Data Update' + ' Product:' + name + ' same Image')
                    }
                })
            }

        })
    },
    updateType(name, id, cb) {
        const sqlStatement = `UPDATE prodTypes set name=? WHERE rowid = ?`;
        db.serialize(() => {

            db.run(sqlStatement, [name, id], function (err, rows) {
                if (err) {
                    cb({ err: err })
                    throw err;
                } else {
                    console.log('Data Update' + ' Types:' + name)
                    cb({ success: true })
                }
            });


        })
    },
    updateOrderStatus(status, id, cb) {
        const sqlStatement = `UPDATE productOrder set status=? WHERE orderId = ?`;
        db.serialize(() => {

            db.run(sqlStatement, [status, id], function (err, rows) {
                if (err) {
                    cb({ err: err })
                    throw err;
                } else {
                    console.log('Order Update' + ' Status:' + status)
                    cb({ success: true })
                }
            });


        })
    },
    getProductList(types, name) {
        const sqlStatementTypes = `SELECT rowid,name,types,price,detail,path from product where types =?`;
        const sqlStatementAll = `SELECT rowid,name,types,price,unit,detail,path,sales from product`;
        const sqlStatementSales = `SELECT rowid,name,types,price,unit,detail,path,sales from product where sales =1`;
        const sqlStatementName = `SELECT rowid,name,types,price,unit,detail,path,sales from product where name =?`;
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                if (types === 'all') {
                    db.all(sqlStatementAll, function (err, rows) {
                        if (err) {
                            reject('getProductList error all')
                            return err;
                        } else {
                            console.log('getProductList' + ' types:' + types)
                            const productList = JSON.stringify(rows)
                            resolve(productList)

                        }

                    });
                } else if (types === '特價商品區') {
                    db.all(sqlStatementSales, function (err, rows) {
                        if (err) {
                            reject('getProductSales error all')
                            return err;
                        } else {
                            console.log('getProductList' + ' types:' + types)
                            const productList = JSON.stringify(rows)
                            resolve(productList)

                        }

                    })
                } else if (name) {
                    db.all(sqlStatementName, name, function (err, rows) {
                        if (err) {
                            reject('getProductList error types')
                            return err;
                        } else {
                            console.log('getProductList' + 'Name:' + name)
                            const productList = JSON.stringify(rows)
                            resolve(productList)
                        }

                    });


                } else {

                    db.all(sqlStatementTypes, types, function (err, rows) {
                        if (err) {
                            reject('getProductList error types')
                            return err;
                        } else {
                            console.log('getProductList' + ' types:' + types)
                            const productList = JSON.stringify(rows)
                            resolve(productList)
                        }

                    });

                }
            });
        });
    },

    getProductTypes() {
        const sqlStatementAll = `SELECT rowid,name from prodTypes`;
        return new Promise((resolve, reject) => {
            db.serialize(() => {

                db.all(sqlStatementAll, function (err, rows) {
                    if (err) {
                        reject('getProductTypes error types')
                        return err;
                    } else {
                        console.log('getProducTypes')
                        const productTypes = JSON.stringify(rows)
                        resolve(productTypes)
                    }

                });


            })

        })

    },
    getOrderList(orderId) {
        const sqlStatementOverView = `SELECT orderId,name,Mphone,status,total,updateTime from productOrder`;
        const sqlStatementDetail = `SELECT * from productOrder where orderId=${orderId}`;
        return new Promise((resolve, reject) => {
            db.serialize(() => {
                if (!orderId) {
                    db.all(sqlStatementOverView, function (err, rows) {
                        if (err) {
                            reject('getOrderList error')
                            return err;
                        } else {
                            console.log('getOrderList')
                            const orderList = JSON.stringify(rows)
                            resolve(orderList)
                        }

                    });
                } else {
                    db.all(sqlStatementDetail, function (err, rows) {
                        if (err) {
                            reject('getOrderList error')
                            return err;
                        } else {
                            console.log('getOrderList')
                            const orderList = JSON.stringify(rows)
                            resolve(orderList)
                        }

                    });
                }



            })

        })

    },
    getOrderDetail(orderId) {
        const sqlStatementAll = `SELECT name,qun,price,price*qun as total from orderDetail where orderId=${orderId}`;
        return new Promise((resolve, reject) => {
            db.serialize(() => {

                db.all(sqlStatementAll, function (err, rows) {
                    if (err) {
                        reject('getOrderDetail error')
                        return err;
                    } else {
                        console.log('getOrderDetail')
                        const orderList = JSON.stringify(rows)
                        resolve(orderList)
                    }

                });

            })

        })

    },

    delProduct(name, id, cb) {
        const sqlStatement = `DELETE FROM product WHERE name=? AND rowid=?  `
        db.serialize(() => {

            db.run(sqlStatement, [name, id], function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    cb({ success: true })
                    console.log(`Delete ${name}`)
                }

            });
            db.exec('VACUUM', function (err, rows) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('VACUUM ')
                }

            })


        })
    },
    delType(name, id, cb) {
        const sqlStatement = `DELETE FROM prodTypes WHERE name=? AND rowid=?  `
        db.serialize(() => {

            db.run(sqlStatement, [name, id], function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    cb({ success: true })
                    console.log(`Delete ${name}  ${id}`)
                }

            });
            db.exec('VACUUM', function (err, rows) {
                if (err) {
                    console.log(err)
                } else {
                    console.log('VACUUM ')
                }

            })


        })
    },
    delOrder(id, cb) {
        const sqlStatement = `DELETE FROM orderDetail WHERE orderId=${id} `
        const sqlStatementProduct = `DELETE FROM productOrder WHERE orderId=${id} `
        db.serialize(() => {

            db.run(sqlStatement, function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    console.log(`Delete OrderDetail : ${id}`)
                }

            });
            db.run(sqlStatementProduct, function (err, rows) {
                if (err) {
                    cb({ err: err })
                } else {
                    cb({ success: true })
                    console.log(`Successfully Delete OrderID :  ${id}`)
                }

            });

        })
    },

}