const express = require('express')
const router = express.Router()

const Prod = require('../models/prodhouse')

router.get('/', function (req, res) {
  res.render('prodhouse')
})

module.exports = router;