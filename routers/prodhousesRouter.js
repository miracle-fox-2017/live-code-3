var express = require('express');
var router = express.Router();
const model = require('../models/dbmodel')

router.get('/', function (req, res) {
  model.selectProdHouse((rows) => {
    res.render('prodhouses', {rows});
  })
})

module.exports = router;