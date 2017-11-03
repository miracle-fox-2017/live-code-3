//your code here
const express = require('express')
const app = express()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.get('/movies', function (req, res) {
  let q = `SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre,
  ProductionHouses.name_prodHouse, ProductionHouses.origin_city FROM Movies
  LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`
  db.all(q, (err, rows)=>{
    // console.log(rows)
    res.render('movies',{movies: rows})
  })
})

app.get('/movies/edit/:id', function(req, res){
  // console.log(req.params);
  let q = `SELECT *
  FROM Movies
  WHERE Movies.id = '${req.params.id}'`
  // console.log(q);
  db.all(q, (err, rows)=>{
    console.log(rows)
    res.render('editmovie',{movies: rows})
  })
})

app.post('/movies/edit/:id', function(req, res){
  // console.log(req.body);
  let q = `UPDATE Movies
            SET name = '${req.body.name}',
            released_year = '${req.body.released_year}',
            genre = '${req.body.genre}',
            WHERE condition id = '${req.body.id}';`
            console.log(q);
  db.run(q, ()=>{
    res.redirect('/movies')
  })
})


app.get('/prodHouses', function (req, res) {
  res.render('prodhouse')
})


// var movies = require('./routes/movies')
// app.use('/movies', movies)

// var prodhouse = require('./routes/prodhouse')
// app.use('/prodHouses', prodhouse)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})