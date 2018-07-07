//your code here
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs')


//movies
const movies = require('./routes/movies.js')
app.use('/movies', movies)








// app.get('/movies/edit/:id', function(req, res) {
//   db.each(`SELECT * FROM Movies WHERE ID = ${req.params.id}` ,(err, rows) =>{
//     db.run(`SELECT * FROM ProductionHouses`, (err, dataProd) =>{
//       res.render('edit', {dataMovies:rows, dataProd:dataProd})
//     })
//   })
// })

// app.post('/movies/edit/:id', function(req, res){
//
//   db.run(`UPDATE Movies SET
//     name ='${req.body.name}',
//     released_year = ${req.body.released_year},
//     genre = '${req.body.genre}',
//     prodHouseId = ${req.body.prodHouseId}
//     WHERE ID = ${req.params.id}`, (err) =>{
//     res.redirect('/movies')
//   })
// })



// app.get('/prodHouses', function (req, res) {
//   db.all(`SELECT * FROM ProductionHouses`, (err, dataProd) =>{
//
//   res.render('prodhouse', {dataProd:dataProd})
//   })
// })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



// db.all(`SELECT * FROM Movies`, (err, rows) =>{
//   db.all(`SELECT * FROM ProductionHouses`, (err, dataProd) =>{
//
//     for(let i =0; i < rows.length; i++){
//       dataProd.forEach(data1 =>{
//         if(rows[i].prodHouseId == data1.id){
//           rows[i].prodHouseId = data1.name_prodHouse
//         }
//       })
//     }
//     res.render('movies', {dataMovies:rows})
//   })
