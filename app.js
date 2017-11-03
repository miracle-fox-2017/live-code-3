//your code here
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movie.db');
// require semua package-package yang kamu butuhkan pada file app.js
// - buatlah routing GET /movies pada file app.js untuk me-render halaman movie dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Movies"
// - buatlah routing GET /prodHouses pada file app.js untuk me-render halaman productionHouse dimana jika kita menuju routing tersebut akan keluar tulisan "Halaman Prod. House"

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


app.get('/', (req, res)=>{
  res.render('index')
})
app.get('/movie',(req, res)=>{
  let query = `SELECT * FROM Movies`
  db.all(query, (err, dataMovies)=>{
    if(!err){
      let queryHouse = `SELECT * FROM ProductionHouses`
      db.all(queryHouse, (err, dataHouses)=>{
        dataMovies.map(dataMovie=>{
          dataMovie.nameProd = []
          dataHouses.map(dataHouse=>{
            if(dataMovie.prodHouseId===dataHouse.id){
              dataMovie.nameProd.push(' '+dataHouse.name_prodHouse)
            }
          })
        })
        // console.log(dataMovies);
        res.render('movie', {dataMovies:dataMovies})
      })

    } else {
      console.log(err);
      res.send(err)
    }
  })

})
app.get('/movie/edit/:id', (req, res)=>{
  let query = `SELECT * FROM Movies WHERE id = ${req.params.id}`
  db.get(query, (err, datamovie)=>{
    if(!err){
      let queyHous = `SELECT * FROM ProductionHouses`
      db.all(queyHous, (err, dataHouses)=>{
        if(!err){
          res.render('editMovie', {datamovie:datamovie,dataHouses:dataHouses})
        }
      })

    }
  })
})

app.get('/prodHouses', (req, res)=>{
  let query = `SELECT * FROM ProductionHouses`
  db.all(query, (err, dataProds)=>{
    if(!err){
      res.render('productionHouse', {dataProds:dataProds})
    } else {
      console.log(err);
      res.send(err)
    }
  })

})

app.listen(3000, (err)=>{
  console.log('Port 3000');
})
