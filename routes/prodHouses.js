const express = require('express')
const router  = express.Router()
const model   = require('../models/prodHouses')

router.get('/', function(req,res){
  model.findAll().then(data_Ph => {
    res.render('prodHouses', {data_Ph:data_Ph})
  }).catch(err =>{
    console.log(err);
  })
})


module.exports = router
