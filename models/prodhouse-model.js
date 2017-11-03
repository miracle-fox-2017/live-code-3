const sqlite3 = require('sqlite3').verbose();

class ProdModel {
	static findAll() {
		return new Promise((resolve, reject) => {
			let db = new sqlite3.Database('./db/movie.db');
			let sql = `select * from ProductionHouses`;

			db.all(sql, (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows);
				}
			})	
		});
	}

	static remove(data) {}
}

module.exports = ProdModel;