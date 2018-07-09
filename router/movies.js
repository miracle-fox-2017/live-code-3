const express = require('express');
const router = express.Router();
const Movies = require('../models/movies.js')


router.get('/', function (req, res) {
    Movies.findAll(callback){
      if(err){
        console.log(err);
      }
      else{
        res.render({rows})
      }
    }

})


module.exports = router
