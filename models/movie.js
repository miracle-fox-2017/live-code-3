var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

class Movie{
  constructor(){}
  
  static getMovieJoin(cb){
    let q = `SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre,
              ProductionHouses.name_prodHouse, ProductionHouses.origin_city
              FROM Movies
              LEFT JOIN ProductionHouses
              ON Movies.prodHouseId = ProductionHouses.id`
    db.all(q, (err, rows)=>{
      // console.log(rows)
      // res.render('movies',{movies: rows})
      cb(rows)
    })
  }
  
  static getAll(id, cb){
    let q = `SELECT *
              FROM Movies
              WHERE Movies.id = '${id}'`
    let qPh = `SELECT * FROM ProductionHouses`
    db.all(q, (err, movies)=>{
      db.all(qPh, (err, rows)=>{
        // console.log(rows)
        // res.render('editmovie',{movies: movies, ph: rows})
        cb(movies, rows)
      })
    })
  }
  
  static updateDb(update, cb){
    // console.log(req.body);
    let q = `UPDATE Movies
              SET name = '${update.name}',
              released_year = '${update.released_year}',
              genre = '${update.genre}',
              prodHouseId = '${update.prodHouseId}'
              WHERE id = '${update.id}';`
              // console.log(q);
    db.run(q, ()=>{
      // res.redirect('/movies')
      cb();
    })
  }
}

module.exports = Movie;