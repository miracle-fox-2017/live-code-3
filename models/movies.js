const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')

class Movies{
  static findAll(callBack){
      db.all(`SELECT movies.*, ProductionHouses.name_prodHouse
              FROM movies
              LEFT JOIN ProductionHouses ON movies.prodHouseId = ProductionHouses.id`, function(err, rows) {
                callBack(err, rows)
      })
  }

  module.exports = Movies
