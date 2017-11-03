const express = require('express')
const bodyParser = require('body-parser')

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')

const app = express()

const prodhousesRoute = require('./routes/prodHouses')
const movies = require('./routes/movies')

// const moviesRoute = require('./routes/movies')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', function(req, res){
  res.send('tes')
})

app.use('/movies', movies)

app.get('/movies/edit/:id', function(req,res) {
  let query = `SELECT * FROM Movies WHERE id = ${req.params.id}`;
  let queryProdHouse = `SELECT * FROM ProductionHouses`

  db.all(query, function(errMovies,movie) {
    if(!errMovies) {
      if(movie.length > 0) {
        db.all(queryProdHouse, function(errProdHouse,rowsProdHouse) {
          if(!errProdHouse) {
            res.render('editMovie', {movie: movie[0], dataProdHouse: rowsProdHouse})
          } else {
            res.send(errProdHouse)
          }
        })
      }
    } else {
      res.send(errMovies)
    }
  })
})

app.post('/movies/edit/:id', function(req,res) {
  let query = `UPDATE Movies
               SET name = '${req.body.movie}',
                 released_year = '${req.body.released_year}',
                 genre = '${req.body.genre}',
                 prodHouseId = ${req.body.prodHouseId}
               WHERE id = ${req.params.id}`
  db.run(query, function(err) {
    if(!err) {
      res.redirect('/movies');
    } else {
      res.send(err)
    }
  })
})

app.use('/prodHouses', prodhousesRoute)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
