//your code here
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
const movies=require("./router/movies");
app.use("/movies",movies);

//==============================> Production House
const prodHouse=require("./router/production-house");
app.use("/prodHouses",prodHouse);

// Listen Port
app.listen(3000,()=>{
    console.log("Server started! Listen on port 3000");
});
