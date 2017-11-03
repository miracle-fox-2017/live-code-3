var express = require('express')
var router = express.Router()
const ProdHouses = require('../models/prodHouses');

router.get('/', (req, res)=>{

ProdHouses.findAll()
  .then(dataProds=>{
    res.render('productionHouse',{dataProds:dataProds})
  })
    .catch(err=>{
      res.send(err)
    })

})

module.exports = router
