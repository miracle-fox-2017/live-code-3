const express = require('express');
const router = express.Router()
const Movie = require('../models/movies');
const ProdHouse = require('../models/prodHouses');

router.get('/', (req, res) => {
  Movie.findAll().then(movies => {
    res.render('movies', {movies:movies})
  })
})

router.get('/edit/:id', (req,res) => {
  Movie.findById(req.params.id).then((rowsM) => {
    ProdHouse.findAll().then(rowsP => {
      console.log(rowsM);
      console.log(rowsP);
      res.render('movies-edit', {movie:rowsM, prodHouse:rowsP})
    })
  })
})

router.post('/edit/:id', (req,res) => {
  Movie.update(req.body,req.params.id).then(() => {
    res.redirect('/movies')
  }).catch(err => {
    res.send(err)
  })
})

module.exports = router;
