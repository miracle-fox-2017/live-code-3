const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/movies', function(req,res) {
  res.render('movie');
})

app.get('/prodHouses', function(req,res){
  res.render('prodHouse');
})

app.listen(3000, function() {
  console.log(`Are you looking for me? 3000`);
})
