const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');
class Movie {
  static findAllName(){
      return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM Movies`

        db.all(query, (err, dataMovies)=>{
          if(!err){
            let queryHouse = `SELECT * FROM ProductionHouses`
            db.all(queryHouse, (err, dataHouses)=>{
              dataMovies.map(dataMovie=>{
                dataMovie.nameProd = []
                dataHouses.map(dataHouse=>{
                  if(dataMovie.prodHouseId===dataHouse.id){
                    dataMovie.nameProd.push(' '+dataHouse.name_prodHouse)
                  }
                })
              })
              // console.log(dataMovies);
              resolve(dataMovies)
              // res.render('movie', {dataMovies:dataMovies})
            })

          } else {
            reject(err)
            console.log(err);
            // res.send(err)
          }
        })
      });
  }
  static update(edit, id){
    return new Promise(function(resolve, reject) {
      let query = `UPDATE Movies SET name = '${edit.name}', released_year = '${edit.year}', genre = '${edit.genre}', prodHouseId = '${edit.prodHouseId}' WHERE id = '${id}'`
      db.run(query, (err)=>{
        if(!err){
          resolve()
          // res.redirect('/movie')
        } else {
          reject(err)
          console.log(err);
        };
      })
    });
  }
    // // console.log(edit);
    //              name varchar(50),
    //             released_year INTEGER,
    //             genre varchar(10),
    //             prodHouseId INTEGER REFERENCES ProductionHouses(id));

    static getById(id){
      return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM Movies WHERE id = ${id}`
        db.get(query, (err, datamovie)=>{
          if(!err){
            resolve(datamovie)
          //   let queyHous = `SELECT * FROM ProductionHouses`
          //   db.all(queyHous, (err, dataHouses)=>{
          //     if(!err){
          //       res.render('editMovie', {datamovie:datamovie,dataHouses:dataHouses)
          //     }
          //   })
        } else {
          reject(err)
        }
        })
      });
    }
}
module.exports = Movie;
