var express = require('express')
var router = express.Router()
const Movie = require('../models/movie')


// define the home page route
router.get('/', function (req, res) {
  Movie.findAll()
    .then(dataMovies => {
      console.log(dataMovies);
      res.render('movie', {dataMovies: dataMovies})
    })
    .catch(error => {
      res.send(error)
    })
})

router.get('/movies/edit/:id', function (req, res) {
  Movie.findById(req.params.id)
    .then(dataMovies => {
      // console.log(dataMovies);
      res.render('movieEdit', {dataMovies: dataMovies})
    })
    .catch(error => {
      res.send(error)
    })
})

router.post('/movies/edit/:id', function (req, res) {
  Movie.update(req.params.id, req.body)
    .then(() => {
      // console.log(dataMovies);
      res.redirect('/movies')
    })
    .catch(error => {
      res.send(error)
    })
})


module.exports = router
