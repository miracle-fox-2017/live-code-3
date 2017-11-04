const express = require('express');
const router = express.Router();


const Product = require('../models/product')

router.get('/prodHouse', function(req,res) {
	Product.findAll()
	.then(rowsProd =>{
		res.render('prodHouse', {dataProdHouse: rowsProd});
	})
	.catch(err =>{
		res.send(err);
	})
})


module.exports = router