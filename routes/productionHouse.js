var express = require('express')
var router = express.Router()
var ProdHouse = require('./../models/prodHouse')

router.get('/', function (req, res) {
    ProdHouse.findAll().then((dataProdHouse) => {
        res.render('prodHouse', { dataProdHouse: dataProdHouse })
    })
})

module.exports = router