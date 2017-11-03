const express = require('express')
const app = express()

app.use


// const movie = require('./routers/');
app.get('/', function (req, res) {
  res.send('index')
})

app.get('/movies', function (req, res) {
  res.send('Halaman Maovies')
})

app.get('/prodHouses', function (req, res) {
  res.send('Halaman Prod. House')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
