const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db')
app.set('views', './views');
app.set('view engine', 'ejs');



const moviesRouter = ('../router/movies.js');
app.use('/movies', moviesRouter);


app.get('/prodHouses', function (req, res){
  let query = `SELECT * FROM ProductionHouses`
  db.all(query, (err, rows)=>{
    if(err){
      res.send(err)
    }
    else{
      // res.send('hello')
      res.render('prodHouses', {rows})
      console.log(rows);
    }
  })
})







// app.get('/movies', function (req, res) {//     let query = `SELECT Movies.id,Movies.released_year,Movies.genre,ProductionHouses.name_prodHouse FROM Movies INNER JOIN ProductionHouses ON ProductionHouses.id = Movies.prodHouseId`;
//     db.all(query,function(err,movies){
//         if(!err){
//             res.render('movies', { movies });
//         }else{
//             res.send(err);
//         }
//     });
//
// });
app.get('/movies/edit/:id', function (req, res) {
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

app.post('/movies/edit/:id', function (req, res) {
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


app.listen(3000, function (){
  console.log('are u still there?');
})
