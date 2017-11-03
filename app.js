// - require semua package-package yang kamu butuhkan pada file app.js
// - buatlah routing GET /movies pada file app.js untuk me-render halaman movie dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Movies"
// - buatlah routing GET /prodHouses pada file app.js untuk me-render halaman productionHouse dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Prod. House"



const express = require('express')
const app = express();

app.set('views', './views');
app.set('view engine', 'view')


app.get('/movies', function (req, res){
  // res.send('Halaman Movies')
  res.render('movies', {msg : 'ini halaman movies'})
})

app.get('/prodHouses', function(res, res){
  res.send('Halaman Prod. House')
})




app.listen(3000, function (){
  console.log('are u still there?');
})
