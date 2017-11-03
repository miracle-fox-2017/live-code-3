const express = require('express');
const bodyParser = require('body-parser');
const Prodhouses = require ('../models/prodHouse.js')

const router = express.Router();

router.get('/',(req,res)=>{
  Prodhouses.findAll().then(data=>{
    res.render('prodHouse',{dataProdHouse: data})

  })
})






module.exports = router;
