const express = require('express');
const router = express.Router();
const movie = require('../model/movies')
router.get('/Movies',(req,res)=>{
    movie.findAll().then((dataMovie)=>{
      res.render('/movie',{dataMovie})
    }).catch((err)=>{
      console.log(err)
    })
})

router.get('/movies/edit/:id',(req,res)=>{

})
module.exports = router
