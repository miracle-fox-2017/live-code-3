var express = require('express')
var router = express.Router()
var ProdHouse = require('./../models/modelProdHouse')

router.get('/', function (req, res) {
    ProdHouse.findAll().then((dataProdHouse) => {
        res.render('prodHouse', { dataProdHouse: dataProdHouse })
    }).catch((reason) => {
        res.send(reason)
    })
})

module.exports = router