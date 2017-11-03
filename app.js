const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const prodHouses = require('./routers/prodhousesRouter');
const movies = require('./routers/moviesRouter');

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/movies', movies);
app.use('/prodhouses', prodHouses);





app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})