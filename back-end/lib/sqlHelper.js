var sqlite = require("sqlite3").verbose();
const destination = './db/product.db'
var db = new sqlite.Database(destination);

module.exports = {

    connectDB() {

        db.serialize(() => {
            db.run("CREATE TABLE IF NOT EXISTS product(name TEXT PRIMARY KEY,unit TEXT,types TEXT,price INTEGER,detail TEXT,path TEXT,sales INTEGER)");
            console.log('DB connected')

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
    getProductList(types){
        const sqlStatementTypes = `SELECT name,types,price,detail,path from product where types =?`;
        const sqlStatementAll = `SELECT name,types,price,unit,detail,path from product`;
        return new Promise((resolve,reject)=>{
            if (types ==='all'){
                db.serialize(() => {
    
                    db.all(sqlStatementAll, function (err, rows) {
                        if (err) {
                            reject('getProductList error all')
                            throw err;
                        } else {
                            console.log('getProductList' + ' types:' + types)
                            const productList = JSON.stringify(rows)
                            resolve(productList)
        
                        }
        
                    })
        
                })
    
            }else{
                db.serialize(() => {
    
                    db.all(sqlStatementTypes, types, function (err, rows) {
                        if (err) {
                            reject('getProductList error types')
                            throw err;
                        } else {
                            console.log('getProductList' + ' types:' + types)
                            const productList = JSON.stringify(rows)
                            resolve(productList)
                        }
        
                    })
        
                })
            }

        })
        
    }

}