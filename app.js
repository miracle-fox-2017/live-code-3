const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/movie.db');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

//halaman utama
app.get('/', function (req, res) {
    res.send('selamat datang');
});

//halaman movies
app.get('/movies', function (req, res) {
    let query = `SELECT Movies.id,Movies.released_year,Movies.genre,ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON ProductionHouses.id = Movies.prodHouseId`;
    db.all(query,function(err,dataMovies){

        if(!err){
            res.render('movies', { dataMovies });
        }else{
            res.send(err);
        }

    });
    
});

app.get('/movies/edit/:id', function (req, res) {
    let query = `SELECT Movies.id,Movies.prodHouseId,Movies.released_year,Movies.genre,ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON ProductionHouses.id = Movies.prodHouseId
                WHERE Movies.id = ${req.params.id}`;
    db.all(query, function (err, dataMovies) {
        if (!err) {
            let queryProd = `SELECT * FROM ProductionHouses`;
            db.all(queryProd, function (err, dataProd) {
                if(!err){
                    res.render('editmovies', { dataMovies, dataProd });
                }
            })
        } else {
            res.send(err);
        }

    });

});

//halaman prod house
app.get('/prodHouses', function (req, res) {
    let query = `SELECT * FROM ProductionHouses`;
    db.all(query, function (err, dataProd) {

        if (!err) {
            res.render('prod', { dataProd });
        } else {
            res.send(err);
        }

    });
});

app.listen('3000', function () {
    console.log('go');
});