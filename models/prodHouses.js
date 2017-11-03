var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

class ProdHouse {
  static findAll() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM ProductionHouses`,
      (err, rows) => {
        if(err) {
          console.log(err);
          reject(err)
        } else {
          console.log(rows);
          resolve(rows)
        }
      })
    })
  }
}

module.exports = ProdHouse;
