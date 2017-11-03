const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movies.db')

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/prodHouse', function (req, res){
  let query = `SELECT * FROM prodHouse`
  db.all(query, (err, rows)=>{
    if(err){
      res.send(err)
    }
    else{
      res.render('prodHouses', {data : data})
    }
  })
})

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


app.listen(3000, function (){
  console.log('are u still there?');
})
