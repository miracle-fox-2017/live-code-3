const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');
class ProdHouses {
static findAll(){
  return new Promise(function(resolve, reject) {
    let query = `SELECT * FROM ProductionHouses`
    db.all(query, (err, dataProds)=>{
      if(!err){
        resolve(dataProds)

      } else {
        console.log(err);
        reject(err)
        // res.send(err)
      }
    })
  });
}
}
module.exports = ProdHouses;
