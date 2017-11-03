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
	let sql = `SELECT * FROM Movies LEFT JOIN ProductionHouses ON Movies.prodHouseId = ProductionHouses.id ORDER BY Movies.name;`;

  	db.all(sql, (err, rows) => {
  		res.render('movies', { allMovie: rows });
  	})	

  // res.render('movies')
})

app.get('/movies/edit/:id', function (req, res) {
	let sql = `SELECT * FROM Movies WHERE id = ${req.params.id};`;

  	db.get(sql, (err, rows) => {
  		db.all('select * from ProductionHouses', (err, allProd) => {
  			res.render('edit-movies', {movie: rows, allHouse: allProd});
  		});
  	})	
	
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