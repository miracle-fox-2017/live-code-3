const express = require('express')
const router  = express.Router()
const model   = require('../models/movies')

router.get('/', function(req,res){
  model.findAll().then(data_Movies=>{
    console.log(data_Movies);
    res.render('movies',{data_Movies:data_Movies})
  }).catch(err=>{
    console.log(err);
  })
})


module.exports = router
