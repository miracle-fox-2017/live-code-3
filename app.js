const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs')


app.get('/', function(req, res){

  res.send('tes')
})

app.get('/movies', function(req, res){
  res.render('/movies')
})

app.get('/prodHouses', function(req, res){
  res.render('/prodHouses')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
