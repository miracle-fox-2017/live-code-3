var express = require('express')
var router = express.Router()
const Movie = require('../models/movie');
const ProdHouses = require('../models/prodHouses');
router.get('/',(req, res)=>{
  Movie.findAllName()
    .then(dataMovies=>{
      res.render('movie', {dataMovies:dataMovies})
    })
      .catch(err=>{
        res.send(err)
      })

})
router.get('/edit/:id', (req, res)=>{
  Movie.getById(req.params.id)
  .then(datamovie=>{
    console.log("----",datamovie);
    ProdHouses.findAll()
    .then(dataHouses => {
      res.render('editMovie', {datamovie:datamovie,dataHouses:dataHouses})
    })
  })
  .catch(err=>{
    console.log(err);
    res.send(err)
  })
})

router.post('/edit/:id',(req, res)=>{
    Movie.update(req.body, req.params.id)
      .then(()=>{
          res.redirect('/movie')
      })
        .catch(err=>{

        })
})

module.exports = router
