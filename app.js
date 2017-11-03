const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');
const bodyParser = require('body-parser')

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

app.get('/movies', function (req, res) {
  let query = `select m.*, ph.name_prodHouse  from Movies as m
        LEFT JOIN ProductionHouses as ph on m.id_prodHouse = ph.id`
  db.all(query, function(err, rows) {
    if (!err) {
      let data = {
        rows : rows
      }
      res.render('movie', data)
    }else {
      res.send(err)
    }
  })
})

app.get('/prodHouses', function (req, res) {
  let query = `select * from ProductionHouses`
  db.all(query, function(err, rows) {
    if (!err) {
      let data = {
        rows : rows
      }
      res.render('productionHouse', data)
    }else {
      res.send(err)
    }
  })
})

app.get('/movies/edit/:id', function (req, res) {
  let id = req.params.id
  let query = `select m.*, ph.name_prodHouse  from Movies as m
        LEFT JOIN ProductionHouses as ph on m.id_prodHouse = ph.id WHERE m.id = '${id}'`
  db.all(query, function(err, rows) {
    if (!err) {
      let data = {
        rows : rows
      }
      res.render('movie', data)
    }else {
      res.send(err)
    }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
