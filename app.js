//your code here
const express = require('express')
const app = express();

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


app.get('/movies', function(req,res){
	res.render('movies')
})

app.get('/prodHouse', function(req,res){
	res.render('productionHouse')
})

app.listen(3000, function(){
	console.log(3000)
})