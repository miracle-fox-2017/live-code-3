const express = require('express')
const router = express.Router()
const Movie = require('../models/movie');
const Productionhouse = require('../models/productionhouse');

router.get('/', (req, res) => {
  Movie.findWithName((err, movies) => {
    res.render('movies', {movies: res.render('movies', {movies: movies})})
  })
})

router.get('/edit/:id', (req, res) => {
  Movie.findByid(req.params.id, (err, movies) => {
    Productionhouse.findAll((err, ph) => {
      res.render('moviesedit', {movies: movies, ph: ph})
    })
  })
})


router.post('/edit/:id', (req, res) => {
  Movie.update(req.params.id, req.body)
  res.redirect('/movies')
})

module.exports = router;
