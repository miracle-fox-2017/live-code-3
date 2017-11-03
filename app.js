const express = require('express');
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/movies', (req, res) => {
  res.render('movies')
})

app.get('/prodHouses', (req, res) => {
  res.render('productionHouse')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
