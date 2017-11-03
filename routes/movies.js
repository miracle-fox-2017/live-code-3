const express = require('express')
const router = express.Router()

const Model = require('../models/movie')

router.get('/', function (req, res) {
  Model.getMovieJoin((rows)=>{
    res.render('movies',{movies: rows})
  })
})

router.get('/edit/:id', function(req, res){
  let id = req.params.id;
  Model.getAll(id, (movies, rows)=>{
    res.render('editmovie',{movies: movies, ph: rows})
  })
})

router.post('/edit/:id', function(req, res){
  Model.updateDb(req.body,()=>{
    res.redirect('/movies')
  })
})

module.exports = router;