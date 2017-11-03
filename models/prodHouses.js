const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class ProdHouse {
  static findAll(){
    return new Promise((resolve, reject)=>{
      let query = `select * from ProductionHouses`
      db.all(query, function(err, rows) {
        if (!err) {
          resolve(rows)
        }else {
          reject(err)
        }
      })
    })
  }
}

module.exports = ProdHouse;
