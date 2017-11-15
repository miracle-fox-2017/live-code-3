const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class ProdHouses {
  
  findAll (cb){
    let query = `SELECT * FROM ProductionHouses`

    db.all(query, cb()){
      
    }
  }
  
}

module.exports = ProdHouses