var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

class Movie {
  static findAll() {
    return new Promise((resolve, reject) => {
      db.all(`SELECT Movies.*, ProductionHouses.name_prodHouse AS prodHouse
      FROM Movies
      LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`,
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

  static findById(movieId) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT Movies.*, ProductionHouses.name_prodHouse AS prodHouse
      FROM Movies
      LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id
      WHERE Movies.id = ${movieId}`,
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

  static update(movieId, data) {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE Movies SET name = '${data.name}', released_year = '${data.released_year}',
      genre = '${data.genre}', prodHouseId = '${data.prodHouseId}' WHERE id = ${movieId}`,
      (err) => {
        if(err) {
          console.log(err);
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}

module.exports = Movie;
