//your code here
const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')

const sqlite3    = require('sqlite3').verbose();
const db         = new sqlite3.Database('./db/movie.db');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

const film = require('./routes/movie')
const prod = require('./routes/prod')

app.use('/movies', film)
app.use('/prodHouses', prod)

// app.get('/movies', (req, res)=>{
// 	// res.render('movie')
// 	db.all(`select * from Movies`, (err, movies)=>{
// 		// res.send(movies)
// 		let a = 0
// 		movies.forEach((movie, index)=>{
// 			db.get(`select name_prodHouse from ProductionHouses where id = ${movie.prodHouseId}`, (err, ph)=>{
// 				if(!err){
// 					movie.name_prodHouse = ph.name_prodHouse
// 				}
// 				a++

// 				if(a === movies.length){
// 					console.log(movies.length)
// 					// res.send(movies)
// 					res.render('movie', {movies : movies})
// 				}
// 			})
// 		})
// 	})
// })

app.get('/movies/edit/:id', (req, res)=>{
	db.get(`select Movies.*, P.name_prodHouse from Movies left join ProductionHouses P on Movies.prodHouseId = P.id where Movies.id = ${req.params.id}`, (err, result)=>{
		if(!err){
			db.all(`select id, name_prodHouse from ProductionHouses`, (err, rows)=>{
				let genre = ['action','comedy','drama','horor']
				res.render('editMovie', {movie : result, prodHouses : rows, genre : genre})	
			})
			// res.send(result)		
		}
	})
})

app.post('/movies/edit/:id', (req, res)=>{
	// console.log(req.body);
	db.run(`update Movies set name = "${req.body.name}", released_year = "${req.body.year}", genre = "${req.body.genre}", prodHouseId = "${req.body.prodHouse}" where id = "{req.params.id}"`, (err)=>{
		if(err){
			console.log(err);
		}else{
			res.redirect('/movies')
		}
	})
})

app.listen(3000, function(){
	console.log('jalan guys');
})