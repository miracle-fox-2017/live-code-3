const express = require('express');
const router = express.Router()
const movie = require('../models/movie')
const prodhouse = require('../models/prodhouse')

router.get('/movie',function(req,res) {
  res.render('movie',)
})
