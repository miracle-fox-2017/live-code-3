const express = require('express')
const router = express.Router()
const ProdHouse = require('../models/prodHouses');

router.get('/', function (req, res) {
  ProdHouse.findAll()
  .then(dataProd=>{
    let dataP = {
      rows : dataProd
    }
    console.log(dataProd);
    res.render('productionHouse', dataP)
  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
