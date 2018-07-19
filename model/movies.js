const sqlite3=require('sqlite3');
const db=new sqlite3.Database("../db/movie.db");

class Movie{
    static findAllJoin(){
        return new Promise((resolve,reject)=>{
            const querySelectAll=`SELECT Movies.id, Movies.name, Movies.released_year, Movies.genre, ProductionHouses.name_prodHouse FROM Movies left join ProductionHouses on Movies.prodHouseId = ProductionHouses.id`;
            db.all(querySelectAll,(err,rows)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        });
    }
    static findById(input){
        return new Promise((resolve, reject)=>{
            const getById=`SELECT * FROM Movies WHERE id="${input}"`;
                db.all(getById,(err,rowsMovie)=>{
                });
        });
    }
    static update(input){
        return new Promise((resolve, reject)=>{
            const update=`UPDATE Movies SET name="${input.movie}", released_year="${input.released}", genre="${input.genre}", prodHouseId="${input.prodHouse}" WHERE id="${input.id}"`;
               db.run(update,function(err){
                   if(err){
                       reject(err);
                   }else{
                       resolve(this);
                   }
               });
        });
    }
}

module.exports=Movie;
