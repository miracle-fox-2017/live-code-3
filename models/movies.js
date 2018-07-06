var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/movie.db');


class Movies{

  static findAll(){
    return new Promise(function(resolve,reject){
      let query = `select Movies.id,Movies.name,Movies.released_year,Movies.genre,ProductionHouses.name_prodHouse from Movies left join ProductionHouses on Movies.prodHouseId = ProductionHouses.id`
      db.all(query, function(err,data_Join){
        if(!err){
          resolve(data_Join)
        }else{
          reject(err)
        }
      })
    })
  }

  static findByid(reqparams){
    return new Promise(function(resolve,reject){
      db.all(`select * from Movies where id='${reqparams.id}'`, function(err,data_Movies){
        if(!err){
          resolve(data_Movies[0])
        }else(
          reject(err)
        )
      })
    })
  }

  static update(reqbody,reqparams){
    return new Promise((resolve,reject)=>{
      db.run(`update Movies set name='${reqbody.name}',
      released_year='${reqbody.released_year}',
      genre='${reqbody.genre}',
      prodHouseId='${reqbody.ph}'
      where id='${reqparams.id}'`,function(err){
        if(!err){
          resolve()
        }else{
          reject(err)
        }
      })
    })
  }

  static reMove(reqparams){
    return new Promise(function(resolve,reject){
      db.run(`delete from Movies where id='${reqparams.id}'`,function(err){
        if(!err){
          resolve()
        }else{
          reject(err)
        }
      })
    })
  }

}

module.exports = Movies
