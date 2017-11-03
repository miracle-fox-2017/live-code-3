

const express = require('express')
const router = express.Router();

const Movies = require('../models/movies')

router.get('/', function(req, res){
  Movies.findAll(function(err, rows) {
            console.log(rows);
      res.render('movies', {rowsMovies: rows})
  })
})

// router.get('/', function(req.r))

// }
module.exports = router;
