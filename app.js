//your code here
const express = require('express')
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/movies', function(req,res){
	let selectAll = `SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse
					 FROM Movies
					 LEFT JOIN
					 ProductionHouses 
					 on ProductionHouses.id = Movies.prodHouseId`
	db.all(selectAll, function(err, allMovies){
		console.log(allMovies)
		res.render('movies', {data : allMovies})
	})				 
})

app.get('/prodHouses', function(req,res){
	let selectAll = `SELECT * FROM ProductionHouses`
	db.all(selectAll, function(err, allProduct){
		res.render('productionHouse', {data : allProduct})
	})
})


app.get('/movies/edit/:id', function(req,res){
	let selectAll = `SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse
					 FROM Movies
					 LEFT JOIN
					 ProductionHouses 
					 on ProductionHouses.id = Movies.prodHouseId`
	db.all(selectAll, function(err, allProduct){
		for(let i =0 ; i <allProduct.length-1 ; i++){
			if(allProduct[i].id == req.params.id){
				console.log(allProduct[i])
				res.render('edit', {data : allProduct[i]})
			}
		} 
	})
})

app.listen(3000, function(){
	console.log(3000)
})	