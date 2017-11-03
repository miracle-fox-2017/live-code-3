const express = require('express')
const router  = express.Router()
const ProdHouse   = require('../models/prodHouses')

//READ
router.get('/', function(req,res){
  ProdHouse.findAll().then(data_Ph => {
    res.render('prodHouses', {data_Ph:data_Ph})
  }).catch(err =>{
    console.log(err);
  })
})




module.exports = router
