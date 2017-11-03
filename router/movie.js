const express = require('express');
const router = express.Router();


const Model = require('../models/movie')

router.get('/movies', function(req,res) {
	Model.findAll()
	.then(rowsMovie =>{
		res.render('movie', {dataMovie: rowsMovie});
	})
	.catch(err =>{
		res.send(err);
	})
})


module.exports = router