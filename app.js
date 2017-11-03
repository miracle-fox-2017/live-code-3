const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyparser = require('body-parser');

const app = require()
const db = new sqlite3.Database('t')
bodyparser =('v')

app.get('/',function(req,res) {
  res.send('test')
})

app.listen(3000,function (req,res) {
  console.log('masuk');
})
