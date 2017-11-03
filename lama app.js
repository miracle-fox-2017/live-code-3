//your code here
const express = require('express')
const app = express()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');

const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index.ejs');
});

// about page
// app.get('/movies', function(req, res) {
//   res.render('movies.ejs');
// });

//
let prodHouse = require('./routers/prodHouse.js');
app.use('/prodHouses', prodHouse);

let movie = require('./routers/movie.js');
app.use('/movies', movie);

// app.get('/prodHouses', function(req, res) {
//   res.render('prodHouse.ejs');
// });

// app.get('/prodHouse', function (req, res) {
//     res.render('prodHouse.ejs', { dataMovie: db.all('SELECT * FROM movie') })
//   });
// });

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// function findAll() {
//   return new Promise((resolve, reject) => {
//     db.all('SELECT * FROM movie', (err, rows) => {
//       if (!err) {
//         resolve(rows);
//       } else { reject(err); }
//     });
//   });
// }

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
