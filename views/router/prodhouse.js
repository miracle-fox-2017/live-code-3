const express = require('express');
const router = express.Router();

router.get('/prodHouses',function(req,res) {
  res.render('prodHouses')
})
