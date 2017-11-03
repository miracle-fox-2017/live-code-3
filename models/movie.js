const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/movie.db');

class Movies{
    static findAll(){
        let query = `SELECT Movies.id,Movies.name,Movies.released_year,Movies.genre,ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON ProductionHouses.id = Movies.prodHouseId`;
        return new Promise((resolve,reject)=>{
            db.all(query, function (err, dataMovies) {
                if (!err) {
                    return resolve(dataMovies);
                } else {
                    return reject(err);
                }

            });
        })
    }
}

module.exports = Movies;