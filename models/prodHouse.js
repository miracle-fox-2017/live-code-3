
const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./db/movie.db');

class ProductionHouses {
  static findAll(){
    return new Promise ((resolve,reject)=>{
      let query = `SELECT * FROM ProductionHouses`


      db.all(query, function(err,rowsProdHouse) {
        if(!err) {
          resolve(rowsProdHouse)
          // res.render('movie', {dataMovie: rowsMovie});
        } else {
          reject(err)
          // res.send(err)
        }
      })
    })

  }

  module.exports = ProductionHouses;



  // let query = `SELECT M.*, P.name_prodHouse
  //              FROM Movies AS M
  //              LEFT JOIN ProductionHouses AS P
  //              ON P.id = M.prodHouseId`
  //
  // db.all(query, function(err,rowsMovie) {
  //   if(!err) {
  //     resolve(rowsMovie)
  //     // res.render('movie', {dataMovie: rowsMovie});
  //   } else {
  //     reject(err)
  //     // res.send(err)
  //   }
  // })
  // })


}
