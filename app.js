const express = require('express');
const app = express()
var bodyParser = require('body-parser')

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('movie.db');

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/movies', (req, res) => {
  db.all(`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, Movies.prodHouseId, ProductionHouses.name_prodHouse FROM Movies LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`, (err, movies) => {
    // res.send(movies)
    res.render('movies', {movies: movies})
  })
})

app.get('/prodHouses', (req, res) => {
  db.all(`SELECT * FROM ProductionHouses`, (err, ph) => {
    res.render('productionHouse', {ph: ph})
    // res.send(data)
  })
})

app.get('/movies/edit/:id', (req, res) => {
  db.all(`SELECT * FROM Movies WHERE id = "${req.params.id}"`, (err, movies) => {
    db.all(`SELECT * FROM ProductionHouses`, (err, ph) => {
      res.render('moviesedit', {movies: movies, ph: ph})
    })
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
