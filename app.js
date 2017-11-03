//your code here
const express = require('express')
const bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/movie.db');


const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.get('/movies', (req, res)=>{
	let select = "SELECT * FROM Movies"
	let join = `SELECT m.id, m.name,m.released_year, m.genre, ph.name_prodHouse FROM Movies as m INNER JOIN ProductionHouses as ph ON m.prodHouseId = ph.id`
	db.all(join, (err, rows)=>{
		if(err){
			res.send(err)
		}
		else{
			res.render('movies', {rows})
		}
	})
	
})

app.get('/movies/edit/:id', (req, res)=>{
	let select = `SELECT * FROM Movies WHERE id =${req.params.id} `
	db.all(select, (err, rows)=>{
		if(err){
			res.send(err)
		}
		else{
			console.log(rows)
			res.render('editMovie', {rows})
		}

	})
})

app.get('/prodHouses', (req, res)=>{
	let select = "SELECT * FROM ProductionHouses"
	db.all(select, (err, rows)=>{
				if(err){
					res.send(err)
				}
				else{
					// console.log(rows.forEach(data =>{
					// 	console.log(data)
					// }))
					res.render('prodHouses', {rows})
					// res.send(rows)
				}
			})
	
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})