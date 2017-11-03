const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/movie.db');

class MovieModel {
	static findAllJoin() {
		return new Promise((resolve, reject) => {
			
			let sql = `SELECT Movies.id as movie_id, Movies.name as movie_name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse FROM Movies LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`;

			db.all(sql, (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows);
				}
			})	
		});
	}

	static create(data) {}

	static findById(data) {
		return new Promise((resolve, reject) => {
			
			let sql = `SELECT * FROM Movies WHERE id = ${data.id};`;

			db.get(sql, (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows);
				}
			});
		});
	}

	static update(data) {
		return new Promise((resolve, reject) => {
			
			let sql = `SELECT * FROM Movies WHERE id = ${data.id};`;

			db.run(`UPDATE Movies SET name = "${data.name}", released_year = "${data.released_year}", genre = "${data.genre}", prodHouseId = "${+data.prodHouseId}" WHERE id = ${data.id}`, (err, alldata) => {
				if (err) {
					reject(err);
				} else {
					resolve(alldata);
				}
			});
		});
	}

	static remove(data) {}
}

module.exports = MovieModel;