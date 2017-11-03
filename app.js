//your code here
const express = require('express')
const app     = express()
app.set('view engine', 'ejs');

app.get('/movies', (req, res)=>{
	res.render('movie')
})

app.get('/prodHouses', (req, res)=>{
	res.render('prodHouses')
})

app.listen(3000, function(){
	console.log('jalan guys');
})