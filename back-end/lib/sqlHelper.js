var sqlite = require("sqlite3").verbose();
const destination = './db/product.db'
var db = new sqlite.Database(destination);

module.exports = {

    connectDB() {

        db.serialize(() => {
            db.run("CREATE TABLE IF NOT EXISTS product(name TEXT PRIMARY KEY,unit TEXT,price INTEGER,detail TEXT,path TEXT)");
            console.log('DB connected')

        })
    },
    insertData(name, unit, price, detail, path) {
        const sqlStatement = `INSERT INTO product (name,unit,price,detail,path)VALUES(?,?,?,?,?) ON CONFLICT(name) DO UPDATE SET unit=excluded.unit=excluded.unit,price=excluded.price,detail=excluded.detail,path=excluded.path `
        db.serialize(() => {

            db.run(sqlStatement, [name, unit, price, detail, path], function (err, rows) {
                if (err) {
                    throw err;
                } else {
                    console.log('Data Inserted'+' Product:'+name)
                }

            })

        })
    }

}