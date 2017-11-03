const express = require('express');
const router = express.Router();
const ProdModel = require('../models/prodhouse-model');

// Home page route
router.get('/', function (req, res) {
 	ProdModel.findAll()
 	.then((rows) => {
 		res.render('prodhouse', {allProdHouse: rows});
 	})
 	.catch(err => res.send(err));
})


module.exports = router;
