const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const movies = require('./models/movies')
const prod = require('./models/prodHouses')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/movies', function(req,res) {
  let query = `SELECT M.*, P.name_prodHouse
               FROM Movies AS M
               LEFT JOIN ProductionHouses AS P
               ON P.id = M.prodHouseId`

  db.all(query, function(err,rowsMovie) {
    if(!err) {
      res.render('movie', {dataMovie: rowsMovie});
    } else {
      res.send(err)
    }
  })
})

app.get('/movies/edit/:id', function(req,res) {
  let query = `SELECT * FROM Movies WHERE id = ${req.params.id}`;
  let queryProdHouse = `SELECT * FROM ProductionHouses`

  db.all(query, function(errMovies,movie) {
    if(!errMovies) {
      if(movie.length > 0) {
        db.all(queryProdHouse, function(errProdHouse,rowsProdHouse) {
          if(!errProdHouse) {
            res.render('editMovie', {movie: movie[0], dataProdHouse: rowsProdHouse})
          } else {
            res.send(errProdHouse)
          }
        })
      }
    } else {
      res.send(errMovies)
    }
  })
})

app.post('/movies/edit/:id', function(req,res) {
  movies.update(req.body, req.params.id, function(err)) {
      res.redirect('/movies');
    } else {
      res.send(err)
    }
  })
})

app.get('/prodHouses', function(req,res){
  prod.findAll(function(err,rowsProdHouse) {
    if(!err) {
      res.render('prodHouse', {dataProdHouse: rowsProdHouse});
    } else {
      res.send(err)
    }
  })
})

app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
