const express = require('express')
const app = express();


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/movies.db')

app.set('views', './views');
app.set('view engine', 'ejs');

// Tampilkan data Movies yang terdapat pada database movie.db, tuliskan di halaman Movie yang telah kamu buat sebelumnya dalam bentuk tabel. Tampilkan data Movie, Released Year, Genre, Production House (Gunakan Left Join atau tanpa Join dengan melakukan manipulasi objek)


app.get('/movies', function (req, res){
  let query = `SELECT * FROM Movies`
  // res.send('Halaman Movies')
  res.render('movies', {msg : 'ini halaman movies'})
})

app.get('/prodHouses', function(res, res){
  // let query = `SELECT * FROM Movies`
  let query =  `SELECT * FROM ProductionHouses JOIN movies on movies.released_year, movies  `;


      db.run(query, (err,rows) =>{
        if(err){
          console.log(err);
        }
        else{
          res.render('prodHouses', {rows:rows})
        }
    })
  // res.render('prodHouses', {msg : 'ini halaman prodHouses'})
})







app.listen(3000, function (){
  console.log('are u still there?');
})
