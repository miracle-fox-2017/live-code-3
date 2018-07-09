const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', function (req, res) {
  Movie.findAll(req.body).then((result) => {
    res.render('movie.ejs', { dataMovie: result });
  });
});

module.exports = router;
