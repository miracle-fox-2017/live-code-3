const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

const movies = require('./routers/movies');
const prodHouses = require('./routers/prodHouses');

app.use('/movies', movies)
app.use('/prodHouses', prodHouses)

app.listen(3000, () => {
  console.log('listening on port 3000!');
})
