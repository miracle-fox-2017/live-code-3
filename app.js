const express = require('express')
const app = express();
var bodyParser = require('body-parser')

var ejs = require('ejs'),

app.get('/', function (req, res) {
  //res.render('movies')
  res.send('Halaman Movies')
})


app.get('/prodHouses', function (req, res) {
  res.render('Halaman Prod')
  //res.send('Halaman Prod')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


// - require semua package-package yang kamu butuhkan pada file app.js
// - buatlah routing GET /movies pada file app.js untuk me-render
//halaman movie dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Movies"
// - buatlah routing GET /prodHouses pada file app.js untuk me-render halaman productionHouse dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Prod. House"
