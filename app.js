const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');
const bodyParser = require('body-parser')

const prodHouse = require('./routers/prodHouses');
const movie = require('./routers/movie');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

// const movie = require('./routers/');
app.get('/', function (req, res) {
  res.send('index')
})

app.use('/prodHouses', prodHouse)
app.use('/movies', movie)



app.get('/movies/edit/:id', function (req, res) {
  let id = req.params.id
  let query = `select m.*, ph.name_prodHouse, ph.id as prodId  from Movies as m
        LEFT JOIN ProductionHouses as ph on m.prodHouseId = ph.id WHERE m.id = '${id}'`
  let queryProd = `select * from ProductionHouses`
  db.all(query, function(err, rows) {
    if (!err) {
      db.all(queryProd, function(err, data) {
        let dataAll = {
          rows : rows,
          data : data
        }
        res.render('movie-edit', dataAll)
      })
    }else {
      res.send(err)
    }
  })
})

app.post('/movies/edit/:id', function (req, res){
  let id = req.params.id;
  let name = req.body.name;
  let year = req.body.year;
  let genre = req.body.genre;
  let prod =  req.body.nameProd;

  let query = `update Movies set name = '${name}', released_year = '${year}', genre = '${genre}', prodHouseId = '${prod}' WHERE id = '${id}'`;
  db.run(query)
  res.redirect('/movies')

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
