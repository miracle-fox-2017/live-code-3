let express = require('express')
let app = express()
let sqlite3 = require('sqlite3').verbose()
let bodyParser = require('body-parser')

app.set('view engine','ejs')

app.get('/movies',function(req,res){
  res.render('movies')
})

app.get('/prodHouses',function(req,res){
  res.render('prodHouses')
})

app.listen(3000,function(){
  console.log('listening on port 3000');
})
