//your code here
const express = require('express');
const app = express();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');


app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/movie',(req,res)=>{
  db.all(`SELECT * FROM Movies`,(err,row)=>{
  db.all(`SELECT * FROM ProductionHouse`,(err,rows)=>{
    // res.send(rows);
    res.render('movie',{movie : row, prod : rows})
  })
})
  // res.send('nasnskn')
  // res.render('movie',{})
})

app.get('/prodHouses',(req,res)=>{
  db.all(`SELECT * FROM ProductionHouses`,(err,rows)=>{
    // console.log(rows);

      res.render('productionHouse',{rows})
  })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
