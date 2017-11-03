const db = require('../db/koneksi')

class Movie{

	static findAll(){
		let select = "SELECT * FROM Movies"
			let join = `SELECT m.id, m.name,m.released_year, m.genre, ph.name_prodHouse FROM Movies as m INNER JOIN ProductionHouses as ph ON m.prodHouseId = ph.id`

	return new Promise((resolve, reject)=>{
		db.all(join, (err, rows)=>{
			if(err){
				reject(err)
			}
			else{
				resolve(rows)
			}
		})

	})
		
	}

	static findId(id){
			let select = `SELECT * FROM Movies WHERE id =${id}`
		// let select_prod = "SELECT * FROM ProductionHouses"

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

	static edit(){
		let update = `UPDATE Movies set name="${req.body.name}", released_year="${req.body.released_year}", genre="${req.body.genre}", prodHouseId=${req.body.prodHouseId}`+
		` WHERE id=${req.params.id}`

		return new Promise((resolve)=>{
			db.run(update, (err)=>{
				
					resolve('oke')
				
			})
		})

		
	}
}

module.exports = Movie