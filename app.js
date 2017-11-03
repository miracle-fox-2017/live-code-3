const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyparser = require('body-parser');

const app = express()
const db = new sqlite3.Database('./db/movie.db')

app.set('views','./views')
app.set('view engine','ejs')

app.get('/',function(req,res) {
  res.send('test')
})

app.get('/movie',function(req,res) {
  db.all(`SELECT Movies.*,ProductionHouses.id,ProductionHouses.name_prodHouse
     FROM Movies
     LEFT JOIN ProductionHouses ON  Movies.prodHouseld=ProductionHouses.id
     `,function(err,rows) {
       console.log(rows);
    res.render('movies',{rows:rows})
  })
})

app.get('/prodhouse',function(req,res) {
  db.all(`SELECT * FROM ProductionHouses`,function(err,rows) {
    res.render('prodhouse',{rows:rows})
  })
})



app.listen(3000,function () {
  console.log('masuk');
})
