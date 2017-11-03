var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');


class Movie {


  static findAll(){
    return new Promise ((resolve, reject) =>{
      let query = `SELECT M.*, P.name_prodHouse
                   FROM Movies AS M
                   LEFT JOIN ProductionHouses AS P
                   ON P.id = M.prodHouseId`

      db.all(query,(err,rowsMovie) =>{
        if(!err) {
          resolve(rowsMovie)
        }
      })
  })

}
  static findById (req){
    return new Promise ((resolve, reject) =>{
    db.each(`SELECT * FROM Movies WHERE ID = ${req.params.id}` ,(err, rows) =>{
        if(!err){
          resolve(rows)
        }
    })
  })
}


static update(req){
  return new Promise ((resolve, reject) =>{
    db.run(`UPDATE Movies SET
      name ='${req.body.name}',
      released_year = ${req.body.released_year},
      genre = '${req.body.genre}',
      prodHouseId = ${req.body.prodHouseId}
      WHERE ID = ${req.params.id}`, (err, rows) =>{
      if(!err){
        resolve(rows)
      }
    })
  })

}

}



module.exports = Movie;
