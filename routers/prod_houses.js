const express = require('express')
const router = express.Router()
const ProdHouse = require('../models/prod_house')

router.get('/', (req, res)=>{
	ProdHouse.findAll().then(prods=>{
		console.log(prods)
		// console.log(movies)
		res.render('prodHouses', {prods})
	})
	
})

module.exports = router