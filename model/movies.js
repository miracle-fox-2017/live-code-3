const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')

class Movie{
  static findAll(){
    let query = 'SELECT * FROM Movies';
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
module.exports = Movie
