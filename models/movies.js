var sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../db/movie.db')
var db = new sqlite3.Database(dbPath);

class Movies{
    constructor(){

    }
    static findAll(cb){
        let query = `SELECT * FROM ProductionHouses`
        
          db.all(query, function(err,rowsMovies) {
            if(!err) {
                // console.log(rowsMovies)
             cb(rowsMovies)
            } else {
            // console.log(err)
            }
        })
    }
}

module.exports = Movies