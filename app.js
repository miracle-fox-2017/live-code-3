const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/movies', function (req, res) {
  res.send('halaman movies');
})

app.get('/prodHouses', function (req, res) {
  res.send('halaman prod. house');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})