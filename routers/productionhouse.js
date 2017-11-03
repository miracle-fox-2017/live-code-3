const express = require('express')
const router = express.Router()
const Productionhouse = require('../models/productionhouse');

router.get('/', (req, res) => {
  Productionhouse.findAll((err, ph) => {
    res.render('productionHouse', {ph: ph})
  })
})

module.exports = router
