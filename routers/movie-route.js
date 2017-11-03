const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/movie.db');
const MovieModel = require('../models/movie-model');
const ProdModel = require('../models/prodhouse-model');

router.get('/', function (req, res) {
 	MovieModel.findAllJoin().then((rows) => {
 		res.render('movies', { allMovie: rows });
 	})
 	.catch(err => res.send(err));	
})

router.get('/edit/:id', function (req, res) {
	let data = req.params;

	// let sql = `SELECT * FROM Movies WHERE id = ${data.id};`;

 //  	db.get(sql, (err, rows) => {
 //  		db.all('select * from ProductionHouses', (err, allProd) => {
 //  			res.render('edit-movies', {movie: rows, allHouse: allProd});
 //  		});
 //  	})	

 	MovieModel.findById(req.params)
	 	.then((rows) => {
	 		ProdModel.findAll()
		 		.then((allProd) => {
		 			res.render('edit-movies', {movie: rows, allHouse: allProd});
		 		})
		 		.catch(err => res.send(err));
	 	})
 	.catch(err => res.send(err));
	
})

router.post('/edit/', function (req, res) {
	let data = req.body;



	MovieModel.update(data)
	.then((allData) => {
		res.redirect('/movies');
	})
	.catch(err => res.send(err));
})

module.exports = router;
