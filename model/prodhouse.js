const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')

class Prodhouse{
  static findAll(){
    let query = 'SELECT * FROM ProductionHouses';
    return new Promise((resolve,reject)=>{
      db.all(query,(err,rows)=>{
        if(!err){
          resolve(rows)
        }else{
          reject(err);
        }
      })
    })

  }
}
module.exports = Prodhouse
