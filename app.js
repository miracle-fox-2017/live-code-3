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

app.get('/movies', (req, res)=>{
	// res.render('movie')
	db.all(`select * from Movies`, (err, movies)=>{
		// res.send(movies)
		movies.forEach((movie, index)=>{
			db.get(`select name_prodHouse from ProductionHouses where id = ${movie.prodHouseId}`, (err, ph)=>{
				if(!err){
					movie.name_prodHouse = ph.name_prodHouse
				}

				if(index === movies.length-1){
					// res.send(movies)
					res.render('movie', {movies : movies})
				}
			})
		})
	})
})

app.get('/movies/edit/:id', (req, res)=>{
	db.get(`select Movies.*, P.name_prodHouse from Movies left join ProductionHouses P on Movies.prodHouseId = P.id where Movies.id = ${req.params.id}`, (err, result)=>{
		if(!err){
			db.all(`select name_prodHouse from ProductionHouses`, (err, rows)=>{
				res.render('editMovie', {movie : result})	
			} )
			// res.send(result)
			
		}
	})
})

app.get('/prodHouses', (req, res)=>{
	db.all(`select * from ProductionHouses`, (err, PH)=>{
		if(err){
			console.log(err);
		}else{
			// res.send(PH)
			res.render('prodHouses', {prodHouses : PH})
		}
	})
})

app.listen(3000, function(){
	console.log('jalan guys');
})