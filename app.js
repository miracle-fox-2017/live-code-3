const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/movies', (req, res) => {
  res.render('movies')
})

app.get('/prodHouses', (req, res) => {
  res.render('productionHouse')
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
})
