const sqlite3=require('sqlite3');
const db=new sqlite3.Database("../db/movie.db");

class Production{
    static findAll(){
        return new Promise((resolve,reject)=>{
            const querySelectAll=`SELECT * FROM ProductionHouses`;
            db.all(querySelectAll,(err,rows)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
            });
        });
    }
}

module.exports=Production;
