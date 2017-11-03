//your code here
const express = require('express');
const app = express();



app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/movie',(req,res)=>{
  res.render('movie')
})

app.get('/prodHouse',(req,res)=>{
  res.render('prod')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
