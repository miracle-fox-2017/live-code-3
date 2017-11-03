// require libraries
const express = require('express')
const bodyParser = require('body-parser')

// sqlite3
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

// invoke express
const app = express()

// set view engine
app.set('view engine', 'ejs')

// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// route movie -----------------------------------------------------------------
app.get('/movies', function (req, res) {
  db.all(`SELECT Movies.*, ProductionHouses.name_prodHouse AS prodHouse
  FROM Movies
  LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`,
  (err, rows) => {
    // res.send(rows)
    res.render('movie', {dataMovies: rows})
  })
})

app.get('/movies/edit/:id', function (req, res) {
  db.get(`SELECT Movies.*, ProductionHouses.name_prodHouse AS prodHouse
  FROM Movies
  LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id
  WHERE Movies.id = ${req.params.id}`,
  (err, rows) => {
    // res.send(rows)
    res.render('movieEdit', {dataMovies: rows})
  })
})

app.post('/movies/edit/:id', function (req, res) {
  db.run(`UPDATE Movies SET name = '${req.body.name}', released_year = '${req.body.released_year}',
  genre = '${req.body.genre}', prodHouseId = '${req.body.prodHouseId}' WHERE id = ${req.params.id}`,
  (err) => {
    if(err) {
      res.send(err)
    } else {
      res.redirect('/movies')
    }
  })
})

// route prodHouse -------------------------------------------------------------
app.get('/prodHouses', function (req, res) {
  db.all(`SELECT * FROM ProductionHouses`, (err, rows) => {
    // res.send(rows)
    res.render('prodHouses', {dataProductions: rows})
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
