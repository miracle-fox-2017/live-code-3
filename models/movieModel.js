const sqlite3    = require('sqlite3').verbose();
const db         = new sqlite3.Database('./db/movie.db');
const Prod 		 = require('./prodHouse')

class Movie{

	static getAllMovie(){

		return new Promise((resolve, reject) => {
			db.all(`select * from Movies`, (err, movies)=>{
				if(err){
					reject(err)
				}else{
					let film = movies.map(movie=>{
						return new Promise((resolve, reject) => {
							Prod.getProdHouseById(movie.prodHouseId).then(result=>{
								movie.prodName = result.name_prodHouse
								resolve(movie)
							})
						})
					})

					Promise.all(film).then(values=>{
						resolve(values)
					})
				}
			})
		});
	}

	static getMovieById(data){
		
	}
}

module.exports = Movie