const express = require('express')
const router = express.Router()
const ProdHouse = require('../models/movie');

router.get('/', function (req, res) {
  ProdHouse.findAll()
  .then(dataProd=>{
    let dataP = {
      rows : dataProd
    }
    res.render('movie', dataP)
  })
  .catch(err=>{
    res.send(err)
  })
})

router.get('/edit:id', function (req, res) {
  ProdHouse.findAll()
  .then(dataProd=>{
    let dataP = {
      rows : dataProd
    }
    res.render('movie', dataP)
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
