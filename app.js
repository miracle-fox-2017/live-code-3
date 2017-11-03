const express = require('express');
const app = express();
// const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/movies', function (req, res) {
  res.render('movies')
})

app.get('/prodHouses', function (req, res) {
  res.render('prodhouse')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})