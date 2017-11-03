const express = require('express')
const router  = express.Router()
const Model   = require('../models/movieModel')

router.get('/', (req, res)=>{
	// res.send('masuk sini')
	Model.getAllMovie().then(result=>{
		// res.send(result)
		res.render('movie', {movies : result})
	}).catch(err=>{
		console.log(err);
	})
})

module.exports = router