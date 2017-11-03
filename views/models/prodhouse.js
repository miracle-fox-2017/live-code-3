const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../db/movie.db')


class Prodhousw {
  static findAll(cb){
    let query = `SELECT * FROM ProductionHouses`
    db.all(query, function(err,rowsProdHouse) {
      if(!err) {
        cb('prodHouse', {dataProdHouse: rowsProdHouse});
      } else {
        console.log(err);
      }
    })
  }
}
module.exports = Prodhouse;
