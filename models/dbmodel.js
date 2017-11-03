const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/movie.db');


let selectProdHouse = (callback) => {
  db.all(`SELECT * FROM ProductionHouses`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    else {
      callback(rows);
    }
  })
}

let selectMovies = (callback) => {
  db.all(`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.id AS prodID, ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`, (err, rows) => {
    if (err) {
      console.log(err);
    }
    else {
      callback(rows);
    }
  })
}

let editMovie = (id, callback) => {
  db.all(`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.id AS prodID, ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id WHERE Movies.id = ${id}`, (err, rows) => {
    db.all(`SELECT * FROM ProductionHouses`, (err, prodHouses) => {
      if (err)
      {
        console.log(err);
      }
      else {
        callback(rows, prodHouses)
      }
    })
  })
}

let updateMovie = (obj, id) => {
  db.run(`UPDATE Movies SET name = "${obj.name}", released_year = "${obj.released_year}", genre = "${obj.genre}", prodHouseId = ${obj.name_prodHouse}  WHERE id = "${id}"`)
}


module.exports = {selectProdHouse, selectMovies, editMovie, updateMovie};