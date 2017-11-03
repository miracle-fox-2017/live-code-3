const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Movie = require('./model/movies')
const Prod = require('./model/prodhouse')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/movies', function(req,res) {
  Movie.findAll().then((rows)=>{
    res.render('movie',{rows})
  }).catch((err)=>{
    console.log(err)
  })
})

app.get('/prodHouses', function(req,res){
  Prod.findAll().then((rows)=>{
    res.render('prodHouse',{rows})
  }).catch((err)=>{
    console.log(err)
  })
})

app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
