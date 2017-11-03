const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/movies', function(req, res){
  db.all(`SELECT Movies.name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse FROM Movies JOIN ProductionHouses ON Movies.prodHouseID = ProductionHouses.id`, function(dataMovies){
    res.render('movies', {dataMovies:dataMovies))
  })
})

app.get('/movies/edit/:id', function(req, res){
  db.each(``)
  res.render('movieedit')
})

app.get('/prodHouses', function(req, res){
  db.all(`SELECT * FROM ProductionHouses `, function(dataHouses){
    console.log(dataHouse);
    res.render('prodHouses', {dataHouses:dataHouses})
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

