//your code here
const express = require('express')
const app = express()

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

var movies = require('./routes/movies')
app.use('/movies', movies)

var prodhouse = require('./routes/prodhouse')
app.use('/prodHouses', prodhouse)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})