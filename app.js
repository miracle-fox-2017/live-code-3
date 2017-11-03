const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views','./views');
app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.send('selamt datang');
});

app.get('/movies',function(req,res){
    res.render('movies');
});

app.get('/prodHouses',function(req,res){
    res.render('prod');
});

app.listen('3000',function(){
    console.log('go');
});