 const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');


class Product{

  static findAll(){
 	let query = `SELECT * FROM ProductionHouses`

  return new Promise((resolve,reject)=>{
  	db.all(query, function(err,rowsProdHouse) {
  		if(err){
  			reject(err);
  		}else{
  			resolve(rowsProdHouse)
  		}
  	})
  })
  }
}

module.exports = Product