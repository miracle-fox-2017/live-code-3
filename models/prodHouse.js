const sqlite3    = require('sqlite3').verbose();
const db         = new sqlite3.Database('./db/movie.db');

class ProdHouse{

	static getAllProdHouse(){
		return new Promise((resolve, reject) => {
			db.all(`select * from ProductionHouses`, (err, prod)=>{
				if(err){
					reject(err)
				}else{
					resolve(prod)
				}
			})
		});
	}

	static getProdHouseById(data){
		return new Promise((resolve, reject) => {
			db.get(`select * from ProductionHouses where id = ${data}`, (err, prod)=>{
				if(err){
					reject(err)
				}else{
					console.log(prod);
					resolve(prod)
				}
			})
		});
	}

}

module.exports = ProdHouse