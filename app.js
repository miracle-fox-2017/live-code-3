const express = require('express')
const bodyParser = require('body-parser')


const app = express()

//load css
app.use(express.static(__dirname + ('/views')))
//load ejs
app.set('view engine','ejs')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//routing
let index  = require('./routes/index')
let movies = require('./routes/movies')
let prodHouses = require('./routes/prodHouses')


app.use('/', index)
app.use('/movies', movies)
app.use('/prodHouses', prodHouses)


app.listen(3000, err =>{
  if(!err){
    console.log('serv listen in port:3000');
  }
})
