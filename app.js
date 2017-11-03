//your code here
const express = require('express')
const app = express()

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

// app.get('/movies', function (req, res) {
//   res.render('movies')
// })

var movies = require('./routes/movies')
app.use('/movies', movies)

app.get('/prodHouses', function (req, res) {
  res.render('prodhouse')
})

// var prodhouse = require('./routes/prodhouse')
// app.use('/prodHouses', prodhouse)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})