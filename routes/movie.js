var express = require('express')
var router = express.Router()
var Movie = require('./../models/movie')
var ProdHouse = require('./../models/prodHouse')


router.get('/', function (req, res) {
    Movie.findAll().then((dataMovies) => {
        res.render('movie', { dataMovies: dataMovies })
    })

})

router.get('/edit/:id', function (req, res) {
    Movie.findById(req.params.id).then((dataMovie) => {
        ProdHouse.findAll().then((dataProdHouse) => {
            res.render('movie-edit', { dataMovie: dataMovie, dataProdHouse: dataProdHouse })
        })

    })
})

router.post('/edit/:id', function (req, res) {
    Movie.updateData(req.params.id, req.body).then(() => {

    })
})
module.exports = router