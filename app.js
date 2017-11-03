//your code here
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

const film = require('./routes/movie')
const prod = require('./routes/prod')

app.use('/movies', film)
app.use('/prodHouses', prod)

app.listen(3000, function(){
	console.log('jalan guys');
})