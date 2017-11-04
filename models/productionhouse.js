var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/movie.db');

class ProductionHouse {

  static findAll(callback) {
    db.all('SELECT * FROM ProductionHouses', (err, data) => {
      callback(err, data)
    })
  }

}

module.exports = ProductionHouse;
