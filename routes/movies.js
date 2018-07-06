const express = require('express')
const router  = express.Router()
const movies   = require('../models/movies')
const prodHouse = require('../models/prodHouses')

//READ
router.get('/', function(req,res){
  Promise.all([
    movies.findAll(),
    prodHouse.findAll()
  ]).then(allData =>{
    res.render('movies',{data_Movies:allData[0],data_Ph:allData[1]})
  }).catch(err=>{
    console.log(err);
  })
})

//UPDATE
router.get('/edit/:id', function(req,res){
  movies.findByid(req.params).then(data_Movies =>{
    prodHouse.findAll().then(function(data_Ph){
      res.render('movies-edit',{data_Ph:data_Ph,data_Movies:data_Movies})
    }).catch(err=>{
      console.log(err);
    })
  }).catch(err=>{
    console.log(err);
  })
})

router.post('/edit/:id', function(req,res){
  movies.update(req.body,req.params).then(data_Movies=>{
    res.redirect('../../movies')
  }).catch(err=>{
    console.log(err);
  })
})

//DELETE
router.get('/delete/:id', function(req,res){
  moview.reMove(req.params).then(function(){
    res.redirect('../../movies')
  }).catch(err =>{
    console.log(err);
  })
})



module.exports = router
