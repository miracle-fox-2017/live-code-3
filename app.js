//your code here
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const index = require('./routers/index');
const prodHouses = require('./routers/prodHouses');
const movie = require('./routers/movie');
// require semua package-package yang kamu butuhkan pada file app.js
// - buatlah routing GET /movies pada file app.js untuk me-render halaman movie dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Movies"
// - buatlah routing GET /prodHouses pada file app.js untuk me-render halaman productionHouse dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Prod. House"
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
// CREATE TABLE ProductionHouses
//           (id INTEGER PRIMARY KEY AUTOINCREMENT, name_prodHouse varchar(50),
//           origin_city varchar(50));
// CREATE TABLE Movies
//           (id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name varchar(50),
//             released_year INTEGER,
//             genre varchar(10),
//             prodHouseId INTEGER REFERENCES ProductionHouses(id));

app.use('/', index);
app.use('/movie', movie);
app.use('/prodHouses', prodHouses);


app.listen(3000, (err)=>{
  console.log('Port 3000');
})
