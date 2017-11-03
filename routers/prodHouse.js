const express = require('express');
const router = express.Router();
const ProdHouse = require('../models/prodHouse');

router.get('/', function (req, res) {
  ProdHouse.findAll(req.body).then((rowsProdHouse) => {
    res.render('prodHouse.ejs', { rowsProdHouse: rowsProdHouse });
  });
});

module.exports = router;
