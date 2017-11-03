const express = require('express')
const app = express();
var bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/movie.db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');


app.set('view engine', 'ejs');

app.get('/movies', function (req, res) {
  db.run(`SELECT * FROM Movies`),function(row){
    res.render('movies', {data:row})
  }
})

// app.post('/', function(req,res){
//   db.run(``)
// })

// app.get('/prodHouses', function (req, res) {
//     db.all(`SELECT * FROM ProductionHouses`)
//   res.render('prodHouses')
// })


// app.post('/prodHouses'), function (req,res) {
//   db.all(`SELECT * FROM ProductionHouses`)
// }

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
