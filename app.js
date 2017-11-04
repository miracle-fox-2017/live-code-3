const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const movie = require('./routes/movie')
const productionHouse = require('./routes/productionHouse')

app.use('/movies', movie)
app.use('/prodHouses', productionHouse)

app.listen(3000, function (err) {
    console.log("Haloooo")
})