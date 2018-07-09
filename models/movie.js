const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class Movie {

  static findAll() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM Movies', (err, rows) => {
        if (!err) {
          resolve(rows);
        } else { reject(err); }
      });
    });
  }
}

module.exports = Movie;
