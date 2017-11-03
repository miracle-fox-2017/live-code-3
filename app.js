const express = require('express');
const app = express();
// const ejs = require('ejs');
const bodyParser = require('body-parser');



const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./db/movie.db');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Router
const movieRouter = require('./routers/movie-route');
app.use('/movies', movieRouter); 

const prodRouter = require('./routers/prodhouse-route');
app.use('/prodHouses', prodRouter); 

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})