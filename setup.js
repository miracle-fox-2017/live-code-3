var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

db.serialize(function() {
  db.run("ALTER TABLE Movies DELETE COLUMN id_prodHouse");
});

db.close();
