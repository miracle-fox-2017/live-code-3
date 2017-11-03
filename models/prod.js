const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/movie.db');

class Prod {
    static findAll(query) {
        let query = `SELECT * FROM ProductionHouses`;
        return new Promise((resolve, reject) => {
            db.all(query, function (err, dataProd) {
                if (!err) {
                    return resolve(dataProd);
                } else {
                    return reject(err);
                }

            });
        })
    }
}

module.exports = Prod;