const express = require('express');
const bodyParser = require('body-parser');
const movie = require('./routers/movie');
const prod = require('./routers/prod');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

//halaman utama
app.get('/', function (req, res) {
    res.send('selamat datang');
});

//halaman movies

app.use('/', movie);

//halaman prod house

app.use('/', prod);


app.listen('3000', function () {
    console.log('go');
});