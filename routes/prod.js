const express = require('express')
const router  = express.Router()
const Model   = require('../models/prodHouse')

router.get('/', (req, res)=>{
	Model.getAllProdHouse().then(result=>{
		res.render('prodHouses', {prodHouses : result})
	})
})

module.exports = router