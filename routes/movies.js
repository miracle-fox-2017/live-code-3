const express = require('express')
const router = express.Router()
const Movie = require('../models/movies.js')

router.get('/', (req,res) =>{
  Movie.findAll().then(rows =>{
    res.render('movies', {dataMovies:rows})
  })
})

router.get('/edit/:id', (req,res) =>{
  Movie.findById(req).then(rows =>{
    //res.send(rows)
    res.render('edit', {dataMovies:rows})
  })
})

router.post('/edit/:id', (req, res) =>{
  Movie.update(req).then(rows =>{
    //res.send(rows)
    res.redirect('/movies')
  })
})



module.exports = router;
