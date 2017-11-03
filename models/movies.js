const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class Movie {

  static findAll(){
    return new Promise(function(resolve, reject) {
      db.all('SELECT M.*, P.name_prodHouse FROM Movies AS M LEFT JOIN ProductionHouses AS P ON M.prodHouseId = P.id', (err,rows) => {
        if(!err){
          resolve(rows)
        }else{
          reject(err)
        }
      })
    });
  }

  static findById(id){
    return new Promise(function(resolve, reject) {
      db.get(`SELECT * FROM Movies WHERE id = '${id}'`, (err, rows) => {
        if(!err){
          resolve(rows)
        }else{
          reject(err)
        }
      })
    })
  }

  static update(body,id){
    return new Promise(function(resolve, reject) {
      db.run(`UPDATE Movies SET name='${body.movies}',released_year='${body.released}',genre='${body.genre}',prodHouseId='${body.prodhouse}' WHERE id='${id}'`, err => {
        if(!err){
          resolve()
        }else{
          reject(err)
        }
      })
    });
  }
}


module.exports = Movie;
