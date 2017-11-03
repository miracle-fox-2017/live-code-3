const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');


class Model {
	static findAll(){
  	let query = `SELECT M.*, P.name_prodHouse
               FROM Movies AS M
               LEFT JOIN ProductionHouses AS P
               ON P.id = M.prodHouseId`
    return new Promise((resolve,reject) =>{
 	  db.all(query, function(err,rowsMovie) {
    	if(err){
    		reject(err);
    	}else{
    		resolve(rowsMovie);
    	}
	    })
	})
	}
}



module.exports = Model