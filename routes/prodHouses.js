const express = require('express')
const router = express.Router()

const Prodhouses = require('../models/prodhouses')

router.get('/prodHouses', function(req, res){
  Prodhouses.findAll(function(err, rows){
    res.render('prodHouses', {rowsProd: rows})
  })
})

module.exports = router;
