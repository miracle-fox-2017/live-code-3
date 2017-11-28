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

		return new Promise((resolve, reject) => {
			db.get(`select * from Movies where id = ${data}`, (err, result)=>{
				if(err){
					reject(err)
				}else{
					resolve(result)
				}
			})
		});	
	}

	static updateMovieById(data){

		return new Promise((resolve, reject) => {
			db.run(`update Movies set name = "${data.name}", released_year = "${data.year}", genre = "${data.genre}", prodHouseId = "${data.prodHouse}" where id = ${data.id}`, (err)=>{
				if(!err){
					resolve()
				}else{
					reject(err)
				}
			})
		});
	}
}

module.exports = Movie