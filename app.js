const express = require('express');
const app = express();
// const ejs = require('ejs');
const bodyParser = require('body-parser');

// Router
// const movieRouter = require('./routers/movie-route');
// app.use('/movies', movieRouter); 

const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/movie.db');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/movies', function (req, res) {
	let sql = `SELECT Movies.id as movie_id, Movies.name as movie_name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse FROM Movies LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id`;

  	db.all(sql, (err, rows) => {
  		res.render('movies', { allMovie: rows });
  	})	
})

app.get('/movies/edit/:id', function (req, res) {
	let data = req.params;

	let sql = `SELECT * FROM Movies WHERE id = ${data.id};`;

  	db.get(sql, (err, rows) => {
  		db.all('select * from ProductionHouses', (err, allProd) => {
  			res.render('edit-movies', {movie: rows, allHouse: allProd});
  		});
  	})	
	
})

app.post('/movies/edit/', function (req, res) {
	let data = req.body;

	db.run(`UPDATE Movies SET name = "${data.name}", released_year = "${data.released_year}", genre = "${data.genre}", prodHouseId = "${+data.prodHouseId}" WHERE id = ${data.id}`, (err, alldata) => {
		res.redirect('/movies');
	});
})



app.get('/prodHouses', function (req, res) {
  let sql = 'SELECT * from ProductionHouses';
  db.all(sql, (err, rows) => {
  	
  	res.render('prodhouse', {allProdHouse: rows});
  })
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})