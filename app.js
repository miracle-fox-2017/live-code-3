//your code here
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')


//movies
app.get('/movies', function (req, res) {
    db.all(`SELECT * FROM Movies`, (err, rows) =>{
      res.render('movies', {dataMovies:rows})
  })
})

app.get('/edit/:id', function(req, res) {
  db.each(`SELECT * FROM Movies WHERE ID = ${req.params.id}` ,(err, rows) =>{
    //res.send(rows)
    res.render('edit', {dataMovies:rows})
  })
})

app.post('/edit/:id', function(req, res){
  db.run(`INSERT INTO Movies (name, released_year, genre, prodHousId) VALUES('${req.body.name}','${req.body.released_year}','${req.body.genre}'
  '${req.body.prodHousId}')`, (err, rows) =>{
    res.redirect('/movies')
  })
})



app.get('/prodHouses', function (req, res) {
  res.render('prodhouse')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
