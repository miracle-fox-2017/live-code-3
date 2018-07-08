var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

class Prodhouse{
  constructor(){}
  
  static getProd(cb){
    let q = `SELECT * FROM ProductionHouses`
    db.all(q, (err,rows)=>{
      // res.render('prodhouse', {ph: rows})
      // console.log('disini');
      cb(rows)
    })
  }
}

module.exports = Prodhouse;