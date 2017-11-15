const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class Movies {
  
  findAllWithProd(cb){
    let query = `SELECT M.*, P.name_prodHouse
                 FROM Movies AS M
                 LEFT JOIN ProductionHouses AS P
                 ON P.id = M.prodHouseId`

    db.all(query, function(err,cb()){
      
    }
  }
  
  findID (){
    
  }
  
  
  update(body,params,cb){
    let query = `UPDATE Movies
                 SET name = '${body.movie}',
                   released_year = '${body.released_year}',
                   genre = '${body.genre}',
                   prodHouseId = ${body.prodHouseId}
                 WHERE id = ${params}`
    db.run(query, function(err){
      if(!err) {
        cb()
      } else {
        
      }
    }
  }
  
}

module.exports = Movies