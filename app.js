//your code here
const express = require ('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')




app.get('/',function(req, res){
    res.render('home')
  })

app.get('/movies',(req,res)=>{
    res.render('movies')
})

app.get('/prodHouses',(req,res)=>{
    res.render('prodHouses')
})



app.listen(3000,function(){
    console.log('Sample app listening on port 3000!')
})