const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class ProdHouse {

  static findAll(){
    return new Promise(function(resolve, reject) {
      db.all('SELECT * FROM ProductionHouses', (err, rowsProd) => {
        if(!err){
          resolve(rowsProd)
        }else{
          reject(err)
        }
      })
    });
  }
}

module.exports = ProdHouse;
