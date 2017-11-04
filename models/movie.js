var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/movie.db');

class Movie {

  static findWithName(callback) {
    db.all(`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, Movies.prodHouseId, ProductionHouses.name_prodHouse FROM Movies LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`, (err, data) => {
      callback(err, data)
    })
  }

  static findByid(id, callback) {
    db.all(`SELECT * FROM Movies WHERE id = "${id}"`, (err, data) => {
      callback(err, data)
    })
  }

  static update(id, body) {
    db.all(`UPDATE Movies SET name = "${body.name}", released_year = "${body.released_year}", genre = "${body.genre}", prodHouseId = "${body.prodHouseId}" WHERE id = ${id}`)
  }
}

module.exports = Movie;
