const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const Movie = require('./router/movie')
const Produc = require('./router/product')
app.use('/', Movie);
app.use('/', Produc)

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


app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
