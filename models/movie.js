const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class Movie {
  static findAll(){
    return new Promise((resolve, reject)=>{
      let query = `select m.*, ph.name_prodHouse  from Movies as m
            LEFT JOIN ProductionHouses as ph on m.prodHouseId  = ph.id`
      db.all(query, function(err, rows) {
        if (!err) {
          resolve(rows)
        }else {
          reject(err)
        }
      })
    })
  }

  static findID(){
    return new Promise((resolve, reject)=>{
      let id = req.params.id
      let query = `select m.*, ph.name_prodHouse, ph.id as prodId  from Movies as m
            LEFT JOIN ProductionHouses as ph on m.prodHouseId = ph.id WHERE m.id = '${id}'`

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

module.exports = Movie;
