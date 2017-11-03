const express = require('express');
const app = express.Router();
const MoviesEdit = require('../models/')


router.get('/movies/edit/:id', function (req, res) {
    let query = `SELECT * FROM Movies WHERE id = ${req.params.id}`;
    db.all(query, function (err, dataMovies) {

        let genre = {genre : ['comedy', 'drama', 'horor', 'action']};

        if (!err) {
            let queryProd = `SELECT * FROM ProductionHouses`;
            db.all(queryProd, function (err, dataProd) {
                if(!err){
                    res.render('editmovies', { dataMovies, dataProd, genre });
                }
            })
        } else {
            res.send(err);
        }
    });

});

router.post('/movies/edit/:id', function (req, res) {
    let Obj = {
        name: req.body.name,
        year: req.body.year,
        genre: req.body.genre,
        prod: req.body.prod,
    }
    let query = `UPDATE Movies SET name = '${Obj.name}',
                                   released_year = '${Obj.year}',
                                   genre = '${Obj.genre}',
                                   prodHouseId = '${Obj.prod}'
                                   WHERE id = ${req.params.id}`;
    db.run(query, function (err) {

        if (!err) {
            res.redirect('/movies');
        } else {
            res.send(err);
        }

    });

});
module.exports = router;
