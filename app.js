//your code here
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movies = require('./router/movies')
const prodhouse = require('./router/prodHouse')
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/',movies)
app.use('/',prodhouse)




















app.listen(3000,function(){
 })
