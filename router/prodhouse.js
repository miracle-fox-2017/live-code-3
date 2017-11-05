const express = require('express');
const router = express.Router();
const prodhouse = require('../model/prodhouse')

router.get('/Movies',(req,res)=>{
    prodhouse.findAll().then((dataProdHouse)=>{
      res.render('/movie',{dataProdHouse})
    }).catch((err)=>{
      console.log(err)
    })
})
module.exports = router
