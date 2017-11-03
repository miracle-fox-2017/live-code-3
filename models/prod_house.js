const db = require('../db/koneksi')

class ProdHouse{

	static findAll(){
		let select = "SELECT * FROM ProductionHouses"

		return new Promise((resolve, reject)=>{
			db.all(select, (err, rows)=>{
				if(err){
					reject(err)
				}
				else{
					resolve(rows)
				}
			})
		})

	
	}
}

module.exports = ProdHouse