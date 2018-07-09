const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')




class Movies {

  static findAll(callback){
    let query = `SELECT Movies.id,Movies.released_year,Movies.genre,ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON ProductionHouses.id = Movies.prodHouseId`;
    return new Promise();
      db.all(query(err,rows){
        if(err){
          callback(err,null)
        }
        else{
          callback(null,rows)
        }
      })
}


module.exports = Movies;
