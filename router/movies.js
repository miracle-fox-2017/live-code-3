const express=require("express");
const router=express.Router();

const Movie=require("./movies");
const Prod=require("./production-house");

router.get("/",(req,res)=>{
    Movie.findAllJoin().then((rows)=>{
        res.render("movies",{movRows:rows});
    }).catch((err)=>{
        res.send(err);
    });
});
router.get("/edit/:id",(req,res)=>{
    Movie.findAllMovies(req.params.id).then((rows)=>{
        Prod.findAll().then((rows2)=>{
            res.render("edit-movie",{movie:rows,prod:rows2});
        })
    }).catch((err)=>{
        res.send(err);
    });
});
// router.post("/edit/:id",(req,res)=>{
//     const update=`UPDATE Movies SET name="${req.body.movie}", released_year="${req.body.released}", genre="${req.body.genre}", prodHouseId="${req.body.prodHouse}" WHERE id="${req.body.id}"`;
//     db.run(update,function(err){
//         if(err){
//             res.send(err);
//         }else{
//             res.redirect("/movies");
//         }
//     });
// });

module.exports=router;
