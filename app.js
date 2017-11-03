//your code here
const express = require('express')
const bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');


const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

const movies = require('./routers/movies')
app.use('/movies', movies)

const prodHouse = require('./routers/prod_houses')
app.use('/prodHouses', prodHouse)




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})