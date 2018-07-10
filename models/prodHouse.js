var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../db/movie.db')
var db = new sqlite3.Database(dbPath);

class ProdHouse{
    constructor(){

    }
    static findAll(cb){
        let query = `SELECT * FROM ProductionHouses`
        
          db.all(query, function(err,rowsProdHouse) {
            if(!err) {
                // console.log(rowsProdHouse)
             cb(rowsProdHouse)
            } else {
            // console.log(err)
            }
        })
    }
}

module.exports = ProdHouse