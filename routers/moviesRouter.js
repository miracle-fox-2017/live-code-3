var express = require('express');
var router = express.Router();
const model = require('../models/dbmodel')

router.get('/', function (req, res) {
  model.selectMovies((rows) => {
    res.render('movies', {rows});
  })
})

router.get(`/edit/:id`, (req, res) => {
  model.editMovie(req.params.id, (rows, prodHouses) => {
    res.render('editMovie', {rows : rows, prodHouses:prodHouses});
  })
})

router.post(`/edit/:id`, (req, res) => {
  model.updateMovie(req.body, req.params.id);
  res.redirect('/movies');
})

module.exports = router;