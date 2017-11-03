// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./db/movie.db');

const express = require('express');
const bodyParser = require('body-parser');
const router = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
const module = require('../models/movies');
// const query2 =


router.get('/movies', function(req,res){
  module.finAll()
})




// app.get('/movies', function(req,res) {
//   let query = `SELECT M.*, P.name_prodHouse
//                FROM Movies AS M
//                LEFT JOIN ProductionHouses AS P
//                ON P.id = M.prodHouseId`
//
//   db.all(query, function(err,rowsMovie) {
//     if(!err) {
//       res.render('movie', {dataMovie: rowsMovie});
//     } else {
//       res.send(err)
//     }
//   })
// })
