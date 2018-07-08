const express = require('express')
const router = express.Router()

const Model = require('../models/prodhouse')

router.get('/', function (req, res) {
  // res.render('prodhouse')
  // console.log(Prod);
  Model.getProd(rows=>{
    res.render('prodhouse', {ph: rows})
  })
})

module.exports = router;