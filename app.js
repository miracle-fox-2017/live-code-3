//your code here
const sqlite3=require('sqlite3');
const db=new sqlite3.Database("./db/movie.db");
const bodyParser=require('body-parser')
const express=require("express");
const app=express();

// View Engine
app.set('views',"./public");
app.set('view engine',"ejs");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start from here
//==============================> Movies
// const movies=require("./router/movies");
// app.use("/movies",movies);
app.get("/movies",(req,res)=>{
    const querySelectAll=`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse FROM Movies left join ProductionHouses on Movies.prodHouseId = ProductionHouses.id`;
    db.all(querySelectAll,(err,rows)=>{
        res.render("movies",{movRows:rows});
    });
});
app.get("/movies/edit/:id",(req,res)=>{
    const byid=`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse FROM Movies left join ProductionHouses on Movies.prodHouseId = ProductionHouses.id WHERE Movies.id="${req.params.id}"`;
    db.all(byid,(err,rows)=>{
        const querySelectAll=`SELECT * FROM ProductionHouses`;
        db.all(querySelectAll,(err,rows)=>{
            res.render("edit-movie",{data:rows});
        });
    });
});
app.post("/movies/edit/:id",(req,res)=>{
    const update=``;
});

//==============================> Production House
// const prodHouse=require("./router/production-house");
// app.use("/prodHouses",prodHouse);
app.get("/prodHouses",(req,res)=>{
    const querySelectAll=`SELECT * FROM ProductionHouses`;
    db.all(querySelectAll,(err,rows)=>{
        res.render("production-house",{prodRows:rows});
    });
});

// Listen Port
app.listen(3000,()=>{
    console.log("Server started! Listen on port 3000");
});
