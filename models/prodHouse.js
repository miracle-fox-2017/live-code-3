const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class ProdHouse {

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM ProductionHouses', (err, rows) => {
        if (!err) {
          resolve(rows);
        } else { reject(err); }
      });
    });
  }
}

module.exports = ProdHouse;
