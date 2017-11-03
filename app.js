const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.get('/movies', function(req, res){
  res.send('movies')
})

app.get('/prodHouses', function(req, res){
  res.send('prodHouses')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})