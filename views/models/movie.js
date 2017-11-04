const sqlite3 = require('sqlite3').verbose();
const  db = new sqlite3.Database('../db/movie.db')
class Movie {

  static findAll(cb){
    let query = `SELECT M.*, P.name_prodHouse
                 FROM Movies AS M
                 LEFT JOIN ProductionHouses AS P
                 ON P.id = M.prodHouseId`

    db.all(query, function(err,rowsMovie) {
      if(!err) {
        cb('movie', {dataMovie: rowsMovie});
      } else {
        console.log(err);
      }
    })
  }

  static findById(c)
}
module.exports = Movie;
