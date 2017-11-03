const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')

class Prodhouses{
  static findAll(callBack){
    db.all(`SELECT * FROM ProductionHouses`,function(err, rows){
      callBack(err, rows)
    })
  }
}

module.exports = Prodhouses
