var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

db.serialize(function() {
  // db.run("ALTER TABLE Movies ADD id_prodHouse INTEGER");
});

db.close();
