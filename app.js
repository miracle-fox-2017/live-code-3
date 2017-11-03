//your code here
const bodyParser=require('body-parser')
const express=require("express");
const app=express();

app.set('views',"./public");
app.set('view engine',"ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const movies=require("./router/movies");
app.use("/movies",movies);

const prodHouse=require("./router/production-house");
app.use("/prodHouses",prodHouse);

app.listen(3001,()=>{
    console.log("Server started! Listen on port 3001");
});
