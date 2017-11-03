const express = require('express')
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', function(req, res){
  res.send('tes')
})

app.get('/movies', function(req, res){
  db.all(`SELECT movies.*, ProductionHouses.name_prodHouse
          FROM movies
          LEFT JOIN ProductionHouses ON movies.prodHouseId = ProductionHouses.id`, function(err, rows) {
            console.log(rows);
      res.render('movies', {rowsMovies: rows})
  })
})

app.get('/prodHouses', function(req, res){
  db.all(`SELECT * FROM ProductionHouses`,function(err, rows){
    res.render('prodHouses', {rowsProd: rows})
  })

})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
