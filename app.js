//your code here
const express = require('express')
const app = express()
const Router       = require('router')

const router = Router()

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
    res.render('views/index');
});

// about page
app.get('/movies', function(req, res) {
    res.render('views/movies');
});


app.get('/prodHouses', function(req, res) {
    res.render('views/prodHouse');
});

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
