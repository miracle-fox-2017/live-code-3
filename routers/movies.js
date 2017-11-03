const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const ProdHouse = require('../models/prod_house')

router.get('/', (req, res)=>{
	Movie.findAll().then(movies=>{
		// console.log(movies)
		res.render('movies', {movies})
	})
	
})


router.get('/edit/:id', (req, res)=>{
	Movie.findId(req.params.id).then(movie=>{
		ProdHouse.findAll().then(prods=>{
			console.log(movie)
			res.render('editMovie', {movie : movie.pop(), prods})
		})
	})
	
})

router.post('/movies/edit/:id', (req, res)=>{
	Movie.edit().then()
	
})


module.exports = router