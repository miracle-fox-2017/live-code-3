const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyparser = require('body-parser');

const app = express()
const db = new sqlite3.Database()

app.set('views','./views')
app.set('view engine','ejs')

app.get('/',function(req,res) {
  res.send('test')
})

app.get('/movie',function(req,res) {
  res.render('movies')
})

app.get('/prodhouse',function(req,res) {
  res.render('prodhouse')
})

app.listen(3000,function () {
  console.log('masuk');
})
