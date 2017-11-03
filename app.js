const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/movie.db');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/prodhouses', function (req, res) {
  db.all(`SELECT * FROM ProductionHouses`, (err, rows) => {
    res.render(`prodhouses`, {rows});
  })
})

app.get('/movies', function (req, res) {
  db.all(`SELECT * FROM Movies INNER JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`, (err, rows) => {
    res.render('movies', {rows});
  })
})

app.get(`/movies/edit/:id`, (req, res) => {
  db.all(`SELECT * FROM Movies INNER JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id WHERE Movies.id = ${req.params.id}`, (err, rows) => {
    db.all(`SELECT * FROM ProductionHouses`, (err, prodHouses) => {
      res.render('editMovie', {rows : rows, prodHouses:prodHouses})
    })
  })
})

app.post(`/movies/edit/:id`, (req, res) => {
  db.run(`ALTER TABLE Movies SET name = ${req.body.name}, released_year = ${req.body.released_year}, genre = ${req.body.genre}`)
  // db.run(`ALTER TABLE`)
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})