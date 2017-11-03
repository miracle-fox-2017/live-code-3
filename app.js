//your code here
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// require semua package-package yang kamu butuhkan pada file app.js
// - buatlah routing GET /movies pada file app.js untuk me-render halaman movie dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Movies"
// - buatlah routing GET /prodHouses pada file app.js untuk me-render halaman productionHouse dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Prod. House"

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index')
})
app.get('/movie',(req, res)=>{
  res.render('movie')
})

app.get('/prodHouses', (req, res)=>{
  res.render('productionHouse')
})

app.listen(3000, (err)=>{
  console.log('Port 3000');
})
