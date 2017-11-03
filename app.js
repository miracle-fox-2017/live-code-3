const express = require('express')
const app = express()

// const index = require('./routers/index')


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

// var birds = require('./birds')


// app.use('/birds', birds)

app.get('/movies', function (req, res) {
  res.render('movie')
})

app.get('/prodHouses', function (req, res) {
  res.render('prodHouses')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
