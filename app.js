const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
const movie = require('./router/movies')
app.use('/',movie)

app.get('/movies/edit/:id', function(req,res) {

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

app.get('/prodHouses', function(req,res){
  let query = `SELECT * FROM ProductionHouses`

  db.all(query, function(err,rowsProdHouse) {
    if(!err) {
      res.render('prodHouse', {dataProdHouse: rowsProdHouse});
    } else {
      res.send(err)
    }
  })
})

app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
