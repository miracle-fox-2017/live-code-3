const express = require('express')
const app = express();
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');

app.get('/movies', function (req, res) {
  // res.send('Hello World!')
  res.render('movies')
})

app.get('/prodHouses', function (req, res) {
  res.render('prodHouses')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


// - require semua package-package yang kamu butuhkan pada file app.js
// - buatlah routing GET /movies pada file app.js untuk me-render
//halaman movie dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Movies"
// - buatlah routing GET /prodHouses pada file app.js untuk me-render halaman productionHouse dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Prod. House"
