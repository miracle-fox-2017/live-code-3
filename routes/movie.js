const express = require('express')
const router  = express.Router()
const Model   = require('../models/movieModel')
const prod    = require('../models/prodHouse')

router.get('/', (req, res)=>{
	// res.send('masuk sini')
	Model.getAllMovie().then(result=>{
		// res.send(result)
		res.render('movie', {movies : result})
	}).catch(err=>{
		console.log(err);
	})
})

router.get('/edit/:id', (req , res)=>{
	Model.getMovieById(req.params.id).then(result=>{
		let genre = ['action','comedy','drama','horor']
		prod.getAllProdHouse().then(prod=>{
			res.render('editMovie', {movie : result, genre, prodHouses : prod})	
		})
	})
})

router.post('/edit/:id', (req, res)=>{
	req.body.id = req.params.id
	Model.updateMovieById(req.body).then(()=>{
		res.redirect('/movies')
	}).catch(err=>{
		console.log(err);
	})
})

module.exports = router