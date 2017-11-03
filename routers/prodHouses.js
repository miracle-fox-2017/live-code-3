var express = require('express')
var router = express.Router()
const ProdHouse = require('../models/prodHouses')


// define the home page route
router.get('/', function (req, res) {
  ProdHouse.findAll()
    .then(dataProdHouse => {
      res.render('prodHouses', {dataProductions: dataProdHouse})
    })
    .catch(error => {
      res.send(error)
    })
})

module.exports = router
