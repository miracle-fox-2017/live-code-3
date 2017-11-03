const express=require("express");
const router=express.Router();

const Prod=require("./production-house");

router.get("/",(req,res)=>{
    Prod.findAll().then((rows)=>{
        res.render("production-house",{prodRows:rows});
    }).catch((err)=>{
        res.send(err);
    });
});

module.exports=router;
