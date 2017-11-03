const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

class ClassName movies{
  static finAll(){
    db.all(`SELECT M.*, P.name_prodHouse FROM Movies AS M LEFT JOIN ProductionHouses
      AS P ON P.id = M.prodHouseId`,function (err,rowsMovie){
    })
  }

}


module.exports = movies



//   db.all(query, function(err,rowsMovie) {
//     if(!err) {
//       res.render('movie', {dataMovie: rowsMovie});
//     } else {
//       res.send(err)
//     }
//   })
// })
