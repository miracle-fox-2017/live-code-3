var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/movie.db');

class ProdHouse{

  static findAll(){
    return new Promise(function(resolve,reject){
      db.all(`select * from ProductionHouses`, function(err,data_Ph){
        if(!err){
          resolve(data_Ph)
        }else{
          reject(err)
        }
      })
    })
  }

}


module.exports = ProdHouse
