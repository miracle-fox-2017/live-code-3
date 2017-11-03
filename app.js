const express = require('express');
const app = express();
// const ejs = require('ejs');
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/movie.db');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/movies', function (req, res) {
	let sql = `SELECT Movies.id as movie_id, Movies.name as movie_name, Movies.released_year, Movies.genre, ProductionHouses.id as prodId, ProductionHouses.name_prodHouse FROM Movies LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`;

  	db.all(sql, (err, rows) => {
  		res.render('movies', { allMovie: rows });
  	})	
})

app.get('/movies/edit/:id', function (req, res) {
	let sql = `SELECT * FROM Movies WHERE id = ${req.params.id};`;

  	db.get(sql, (err, rows) => {
  		db.all('select * from ProductionHouses', (err, allProd) => {
  			db.all('select * from Movies', (err, allMovie) => {
  				res.render('edit-movies', {movie: rows, allHouse: allProd, allMovie: allMovie});
  			})
  		});
  	})	
	
})

app.post('/movies/edit/', function (req, res) {
	db.run(`UPDATE Movies SET name = "${req.body.name}", released_year = "${req.body.released_year}", genre = "${req.body.genre}", prodHouseId = "${+req.body.prodHouseId}" WHERE id = ${req.body.id}`, (err, alldata) => {
		res.redirect('/movies');
	});
})

app.get('/prodHouses', function (req, res) {
  let sql = 'SELECT * from ProductionHouses';
  db.all(sql, (err, rows) => {
  	
  	res.render('prodhouse', {allProdHouse: rows});
  })

  // res.render('prodhouse')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})