var sqlite = require("sqlite3").verbose();
const destination = './db/product.db'
var db = new sqlite.Database(destination);

module.exports = {

    connectDB() {

        db.serialize(() => {
            db.run("CREATE TABLE IF NOT EXISTS product(name TEXT PRIMARY KEY,unit TEXT,types TEXT,price INTEGER,detail TEXT,path TEXT,sales INTEGER)");
            db.run("CREATE TABLE IF NOT EXISTS user(name TEXT PRIMARY KEY,pawd TEXT)");
            db.run("CREATE TABLE IF NOT EXISTS prodTypes(name TEXT PRIMARY KEY)");
            console.log('DB connected')

        })
    },
    createAdmin() {
        const sqlStatement = 'INSERT INTO user (name,pawd)VALUES(?,?)'
        db.serialize(() => {
            db.run(sqlStatement, ['admin', 'qweasd'], function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    console.log('Admin Create')

                }

            })

        })
    },
    createUser() {
        const sqlStatement = 'INSERT INTO user (name,pawd)VALUES(?,?)'
        db.serialize(() => {
            db.run(sqlStatement, ['yongsn', '5138yongsn'], function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    console.log('User Create')

                }

            })

        })
    },
    getUser(name, cb) {
        const sqlStatement = `SELECT name, pawd from user where name =?`;

        db.serialize(() => {

            db.all(sqlStatement, name, function (err, rows) {
                if (err) {
                    console.log('getUser error all')
                    throw err;
                } else {
                    const user = JSON.stringify(rows)
                    console.log('getUser : ', rows)
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
                } else if (types === '特價商品') {
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

}