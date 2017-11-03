const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/movies', (req, res) => {
  db.all('SELECT M.*, P.name_prodHouse FROM Movies AS M LEFT JOIN ProductionHouses AS P ON M.prodHouseId = P.id', (err,rows) => {
    res.render('movies', {movies:rows})
  })
})

app.get('/movies/edit/:id', (req,res) => {
  db.get(`SELECT * FROM Movies WHERE id = '${req.params.id}'`, (err, rows) => {
    db.all('SELECT * FROM ProductionHouses', (err, rowsProd) => {
      res.render('movies-edit', {movie:rows, prodHouse:rowsProd})
    })
  })
})

app.post('/movies/edit/:id', (req,res) => {
  db.run('UPDATE FROM Movies')
})

app.get('/prodHouses', (req, res) => {
  res.render('productionHouse')
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
})
